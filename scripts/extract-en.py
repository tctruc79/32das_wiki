#!/usr/bin/env python3
"""Extract the pure-English mirror of content/ into content-en/.

Source pages follow the bilingual convention: every VI sentence/bullet is
immediately followed by <br><span class="en">...</span>, and headings are
"VI - <span class="en">EN</span>" on one line. This mechanically extracts
the English half, dropping the VI half, keeping file structure identical
(so wikilinks resolve the same way in content/ and content-en/).
"""
import re
import shutil
import sys
from pathlib import Path

SRC = Path(sys.argv[1])
DEST = Path(sys.argv[2])

# Matches a single-line "... - <span class="en">EN</span>" (heading or frontmatter title),
# tolerating an optional backslash before the quotes (YAML-escaped in frontmatter).
SINGLE_LINE_EN_RE = re.compile(r'^(?P<prefix>.*?)\s-\s<span class=\\?"en\\?">(?P<en>.*?)</span>(?P<suffix>\\?"?)\s*$')

SPAN_OPEN_RE = re.compile(r'<br><span class=\\?"en\\?">')


def extract_heading(line: str):
    m = re.match(r'^(#{1,6})\s+(.*)$', line)
    if not m:
        return None
    hashes, rest = m.group(1), m.group(2)
    m2 = SINGLE_LINE_EN_RE.match(rest)
    if not m2:
        return None
    return f"{hashes} {m2.group('en')}"


TITLE_EN_RE = re.compile(r'^title_en: "(.*)"$')


def extract_body(body: str) -> str:
    lines = body.split('\n')
    out = []
    pending = []
    i = 0
    n = len(lines)
    while i < n:
        line = lines[i]
        heading = extract_heading(line)
        if heading is not None:
            out.extend(pending)
            pending = []
            out.append(heading)
            i += 1
            continue
        if SPAN_OPEN_RE.search(line):
            # the VI block's first line carries the real list marker (-, *, 1., ...);
            # the span's own line only has continuation indent, so reuse the VI marker.
            marker_src = pending[0] if pending else line
            marker_m = re.match(r'^(\s*(?:[-*]\s+|\d+\.\s+)?)', marker_src)
            marker = marker_m.group(1) if marker_m else ''
            pending = []  # discard the VI block this EN span pairs with
            span_text = line
            while '</span>' not in span_text:
                i += 1
                span_text += '\n' + lines[i]
            m = re.match(
                r'^(?P<indent>[ \t]*)<br><span class=\\?"en\\?">(?P<en>.*)</span>\s*$',
                span_text, re.DOTALL,
            )
            en_content = m.group('en') if m else span_text
            out.append(f"{marker}{en_content}")
            i += 1
            continue
        if line.strip() == '':
            out.extend(pending)
            pending = []
            out.append(line)
        else:
            pending.append(line)
        i += 1
    out.extend(pending)
    return '\n'.join(out)


def process_file(src_path: Path, dest_path: Path):
    text = src_path.read_text(encoding='utf-8')
    if not text.startswith('---\n'):
        dest_path.parent.mkdir(parents=True, exist_ok=True)
        dest_path.write_text(text, encoding='utf-8')
        return
    end = text.find('\n---\n', 4)
    if end == -1:
        dest_path.parent.mkdir(parents=True, exist_ok=True)
        dest_path.write_text(text, encoding='utf-8')
        return
    frontmatter_lines = text[4:end].split('\n')
    body = text[end + 5:]

    title_en = None
    for fl in frontmatter_lines:
        m = TITLE_EN_RE.match(fl)
        if m:
            title_en = m.group(1)
            break

    new_fm_lines = []
    for fl in frontmatter_lines:
        if fl.startswith('title: "') and title_en is not None:
            new_fm_lines.append(f'title: "{title_en}"')
        elif TITLE_EN_RE.match(fl):
            continue  # drop title_en from the EN mirror's own frontmatter
        else:
            new_fm_lines.append(fl)

    new_text = '---\n' + '\n'.join(new_fm_lines) + '\n---\n' + extract_body(body)
    dest_path.parent.mkdir(parents=True, exist_ok=True)
    dest_path.write_text(new_text, encoding='utf-8')


def main():
    if DEST.exists():
        shutil.rmtree(DEST)
    count = 0
    for src_path in SRC.rglob('*.md'):
        rel = src_path.relative_to(SRC)
        process_file(src_path, DEST / rel)
        count += 1
    print(f"Extracted {count} files to {DEST}")


if __name__ == '__main__':
    main()

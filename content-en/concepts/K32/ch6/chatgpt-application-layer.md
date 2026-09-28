---
type: concept
title: "The Application Layer Around an LLM: ChatGPT"
tags: [chapter-6, k32, chatgpt, prompt, system-prompt, tools, memory, context-limit]
created: 2026-09-28
updated: 2026-09-28
status: complete
---

## Definition

**ChatGPT is not the same thing as the LLM.** The LLM (a
GPT model) is **"the brain"** and **does exactly one thing: given some text,
it predicts the next token**. The ChatGPT app is **"the wrapper"**: it **turns
your chat into text the LLM can read, and turns the LLM's output back into a
reply** (slide 58).

The chapter's formula: **`ChatGPT = LLM + prompt building
+ tokenization + a generation loop + extras`**.

## Explanation

### The four-step pipeline

Slide 59 draws a message's whole life:

| Step | Who does it | What happens |
|---|---|---|
| You type a message | User | |
| **1. Build the full prompt** | App | instructions + history + your message |
| **2. Split into tokens** | App | text becomes numbers |
| **3. Predict the next token** | **LLM** | repeated many times |
| **4. Tokens back to text** | App | |
| The reply appears | User | |

The thing to notice: **the LLM appears on exactly one
row**. Three of the four steps are the app's work.

### Step 1: the hidden prompt

**The LLM never sees only your message.** The app
assembles a hidden script in three parts (slide 60):

- **System prompt**: instructions such as "You are a
  helpful assistant."
- **Conversation history**: earlier turns, labeled by
  speaker.
- **Your new message**, then a marker meaning "the
  assistant speaks now."

The analogy: **like handing an actor a script**.

**The assembled chat template** (slide 61):

```
[system]    You are a helpful assistant.
[user]      What is the capital of France?
[assistant] The capital of France is Paris.
[user]      And of Japan?
[assistant] _
```

**The model's job is simply to continue this text from
the blank at the end.**

Seeing the template **answers review question 1**:
ChatGPT does not "remember". **The whole history is pasted back into the
prompt every turn.** The model rereads it from scratch each time.

### Four extras, and what they share

| Extra | How it works (slide 66) |
|---|---|
| **Tools** | The model can **request a web search or a calculation**; the app runs it and **pastes the results into the prompt** |
| **Memory** | **The LLM forgets between chats**; memory features **save notes and add them to future prompts** |
| **Safety checks** | **Separate filters** screen requests and replies |
| **Context limit** | The LLM **reads a limited amount of text at once**, so long chats may be **trimmed or summarized** |

The chapter's fifth takeaway sums the table up: **tools,
memory, and safety checks work by changing what goes into the prompt** (slide
69).

In other words: **no extra modifies the model; they all
modify its input**. This gives a usable rule: when a chat app ships a new
feature, ask **"how does it change the prompt?"** before assuming the model
changed.

**The tool-call loop** (slide 67) shows exactly that: the
model **does not access the internet**; it writes a request and reads text
pasted in for it. That **answers review question 4**.

### The context limit, and why it exists

Slide 66 says only that the limit exists and that long
chats may be **trimmed or summarized** - **review question 5**.

But the **reason** is on slide 38: **the size of the
attention pattern equals the square of the context size**. Doubling the window
**quadruples** the cost. Joining these two slides, nearly 30 pages apart, is
the complete explanation.

The practical consequence: **trimming and summarising are
not memory**. Once a chat exceeds the limit, the old part is **dropped or
compressed**, so early detail can **vanish** with no warning.

### The closing analogy

Slide 68, worth memorising:

> <br><span class="en">**The LLM is a brilliant writer locked in a room who
> can only read a page and write the next word. ChatGPT is the assistant
> outside who prepares the page (instructions, conversation, search results),
> slides it under the door, collects each new word, slides the page back, and
> finally shows you the finished reply.**</span>

It is economical because it encodes **all four** key
properties at once: the model **reads one page** (context limit), **writes one
word** (next-token prediction), **the page must be slid back in each time** (no
memory between steps), and **the assistant decides what is on the page**
(system prompt, tools, memory).

## Appears in

The slides above.

## Related

- the "brain", and why it does one thing.
- steps 2 and 3 of the pipeline.
- why parameters stay fixed during inference.
- the technical reason for the context limit.
- the chapter's five review questions, answered.

## Caveats

**The chapter describes ChatGPT as a general
architecture, not as product documentation.** It names no model version, no
concrete context-window size, and no product's actual memory mechanism. Every
specific number in it is **explicitly labelled as invented for
illustration**.

**Read "ChatGPT" here as "any chat app built on an
LLM".** The same description fits every conversational assistant; the chapter
picks ChatGPT because students already use it.

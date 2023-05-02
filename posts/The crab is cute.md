---
title: The crab is cute
date: '2023-02-01'
preview: Yeah, Rust is pretty cool.
---

Months ago I posted on [LinkedIn](https://www.linkedin.com/posts/mariasolano151822_no-matter-my-coding-experience-im-always-activity-6977411647090941952-QObY?utm_source=share&utm_medium=member_desktop) a picture of my first Rust `"Hello, World!"` program (because is there another way to begin your learning journey with a new language??). I had heard about how it was great for multi-threading stuff, its amazing time performance, and how it had a nice mascot (I mean, [Ferris](https://rustacean.net/) is pretty cute). That sounded like C on steroids, and I was curious to try it out. So I downloaded `rustc` and began my way through ["_the Book_"](https://doc.rust-lang.org/book/).

The rumours are true: Rust is awesome. I'm now working on a **major** (!!) Rust side project, and the more I learn about it the closer it is of becoming my favourite programming language.

_Please don't tell my team (A.K.A. TypeScript) I said that._

Okay Maria focus: My goal with this post is to share a couple of my hypotheses about why everyone seems to love Rust, and a couple of features I think other languages could use as "inspiration". Or maybe these are only the reasons why I like it and this list is kind of irrelevant. But I'm going to continue anyway because if you read until here you're already committed so let's go.

1. **`rustdocs` are fabulous:** I like clean code, but I love well-documented code. [`rustdoc`](https://doc.rust-lang.org/rustdoc/what-is-rustdoc.html) makes this really easy since it uses a Markdown syntax, which I'm pretty sure every programmer is familiar with (and if you're not, please stop reading this and educate yourself). As someone that often doesn't comment their JavaScript/TypeScript code because I cannot remember the `@tag` I need to use, Markdown-based documentation is great.

1. **Testing your code is easy:** I've written a lot of React applications, but I've _never_ written a unit test for a web app. There are a bunch of JavaScript/TypeScript test frameworks, each with their own rules and required dependencies, and I just don't want to bother. On the other hand, testing Rust code is sweet and simple. Examples in your `rustdocs` become units tests for your public API, and you can add test modules in each file that run with a simple `cargo test` command. The ease of testing has made me adopt a [test-driven mentality](https://en.wikipedia.org/wiki/Test-driven_development), while in the past tests felt like a painful maintenance task we told interns to fix.

1. **It feels dangerous, in a good way:** In university I really liked my C assignments. There's a masochistic pleasure in writing a program whose only error message is "Segmentation fault, core dumped". The danger of manipulating raw pointers, messing up memory, and other low-level joys can be really fun when you're used to higher-level languages. Yes, Rust errors can be really annoying to debug (lifetimes are tricky), but its primitive nature makes me feel more like a true hacker.

1. **The editor support is great:** [`rust-analyzer`](https://rust-analyzer.github.io/) makes the editing experience great. I always use [VS Code](https://code.visualstudio.com/) for all my non-work coding, and the customizable language server features makes Rust development really enjoyable. Also, after [implementing an LSP-based extension in Visual Studio](https://devblogs.microsoft.com/visualstudio/building-a-new-javascript-linting-experience-in-visual-studio/), I love how Rust uses the language server protocol for its editor support.

1. **The community is welcoming:** When I find a bug, I always try to fix it. Even as a Rust beginner, I've already contributed to a couple of Rust projects (from [fixing documentation](https://github.com/clap-rs/clap/pull/4640) to [adding new features](https://github.com/rust-lang/rust-analyzer/pull/13722)). All the code maintainers I've interacted with have been really nice and welcoming, not making me feel like an annoying newbie that disturbs their codebase.

1. **Sooo many learning resources:** From the Rust book to [practice exercises](https://github.com/rust-lang/rustlings), there are a lot of (free!) resources to learn Rust. No need to take a fancy boot camp to learn the obscure features of the language, just visit [their website](https://www.rust-lang.org/learn) and pick your learning path.

...that's all I could come up with. If you're curious about learning Rust I really recommend you try it out, and if you're not then well, I hope you find joy in WinForms or something.

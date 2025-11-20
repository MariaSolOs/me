+++
date = '2025-11-20T14:49:53-08:00'
title = 'My code editor'
description = 'I can quit it, but I do not want to'
+++

There are 2 events that sparked my curiosity to try out Neovim.
1. After reading all the books and staring at the gorgeous compiler errors, I was re-writing [ShellCheck](https://github.com/koalaman/shellcheck) in Rust (yeah I know, so basic). Why? Because I thought (and still think) that a Bash linter written in Rust would make the internet explode. However turns out that parsing shell languages is kind of cursed, and in addition to the sweet Reddit karma I also wanted to write a linter that I felt proud of, not only copy-paste the Haskell hacks into my project. After more than a year in this endeavor I realized how hard it was to write an elegant Bash linter, but I also began to notice how in the weekly "what's the best text editor for Rust" Reddit threads Neovim kept being invoked.
1. I was fed up of Copilot in VS Code. I overload `<tab>` for a bunch of stuff (navigating through the completion list, jumping through snippets, accepting Copilot suggestions, etc) and having my tabbing always triggering Copilot was extremely annoying. I tried doing what a VS Code Andy would do: Tweak the JSON hell of `settings.json` and `keybindings.json`, search for a plugin that would solve my super specific use case, open a GitHub issue asking for the feature I wanted that (even as a MediumFirm employee) was auto-closed after a few days, etc.

And so at that point I was like "Yeah whatever let me pay attention to Reddit and try out this weird thing".

Oh dear that escalated quickly.

I started by doing what most people do: I tried out a distro. I don't want to be salty so I won't mention which one I tried, but after spending several days trying to configure the highlight colors and getting a not-very-nice response to my newbie questions on Reddit, I decided to fully commit to configuring everything myself. For this I used [`kickstart.nvim`](https://github.com/nvim-lua/kickstart.nvim) as a reference, slowly copy-pasting each snippet of the configuration after understanding what it did. This is how I spent entire weekends reading Tree-sitter documentation, Neovim docs, and random plugin `README`s that seemed to be written by people much smarter than me.

More than once I deleted what I had configured so far. "I don't have time for this" I would tell myself before the weekend ended, but then on Monday I would feel the need to continue the dotfile tinkering as VS Code felt less and less natural. My muscle memory was also broken: I was still getting used to Vim motions but using the mouse and the arrow keys started to feel wrong. Eventually one day I had a minimal setup that felt good enough for work, and so I just fully commited to this addictive code editor.

It was amazing.

I spent my weekends trying out new plugins, configuring LSP servers, going through dotfile repos and copy-pasting hacky snippets. I loved the creative feeling of building my own editor that made sense to _me_, how I could wire each keybind to a combination compatible with my bilingual brain, and just how by doing this I was learning so much about CLI tools, language servers, Lua and even systems programming (months later I installed Arch Linux but I'll leave that story for another post).

My dotfiles eventually became stable. I didn't need to tweak my config every day, but I did realize how I had some "hacks" that were actually bug fixes of my favorite plugins (`#i-love-folke`). [That's how I started contributing to Neovim](https://youtu.be/GSjTiRlnUek?si=tfDpX0rKKlQTqEkM).

It's wild to think that years later I'm part of the editor's core team and my most popular repo on GitHub is [`MariaSolOs/dotfiles`](https://github.com/MariaSolOs/dotfiles). Yet switching to Neovim was one of the best decisions I've made for my programming journey. I've learned a lot, met incredible people weirdly passionate about concealing and bike-shedding on PRs, and feel a genuine joy every time I open my editor to code.

Yeah, at some point I actually learned how to exit Neovim. But I don't want to.

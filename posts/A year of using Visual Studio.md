---
title: A year of using Visual Studio
date: '2023-04-19'
preview: Nope. VS Code is a different thing.
---

It has actually been longer than a year. My first Microsoft anniversary was last February, and I've been using good 'ol VS since then. Why? Because well, I work in a team that writes code for Visual Studio, so I don't really have a choice (I did try at the beginning to build my team's repo using VS Code, but MSBuild is a wild creature that VS has tamed well).

I must confess: I still prefer VS Code. The extensions, the integrated terminal, stuff being a bit harder to set up... it makes me feel more like a hacker. But I also get it now. VS is a powerful product that a lot of devs use and love. I've learned to love it too. Let me tell you about some of my favourite features.

## The debugger

I will never forget the first traumatizing bug in my current role. For some obscure reason TypeScript completions were being duplicated in VS. This was a _serious_ problem and I had a couple of days to fix it before the release went public. Me being me, I told my manager that I could fix it (_oh Maria, but you had no idea of where to start_). I started adding print statements (because from my web dev brackground I thought `console.log()` was all I needed) and wasted my time doing that because the bug was not even in our codebase. The duplicates were caused by some code invoking us in different threads. I figured it out by disabling "Just My Code" in Tools/Options, going back the stack until I reached the dark depths of Roslyn code, and found [this comment](https://github.com/dotnet/roslyn/blob/a6a78dd64fc1eb466113ece272747a72d497aad7/src/EditorFeatures/Core/IntelliSense/AsyncCompletion/CompletionSource.cs#L232-L266) (God bless documented code). I then set up a ton of functional breakpoints, downloaded all the symbols I needed, and stared at the code for a couple of days. The fix was super simple (we were just using the wrong method overload), but I'm sure that I would still be working on that bug if it wasn't for Visual Studio's debugger, and its superpowers to debug every single thing from the original assembly code to the C# program you wrote.

## The useful bits are built-in

We all love how you can download your favourite (and no more!) set of extensions in VS Code and customize it as your pixelated heart desires, but it is also nice to open VS and for things to _just work ™_ right out of the bat. A GitHub UI for pulling and pushing without having to remember the right `git` command? Done. Language server support for C#, TypeScript, JavaScript, HTML, CSS, Razor and thousands of other languages? Checked. A super duper amazing ESLint integration (shameless [self-promo](https://devblogs.microsoft.com/visualstudio/building-a-new-javascript-linting-experience-in-visual-studio/))? ✅. For work purposes, I enjoy using a product that has the useful stuff as part of the original bundle, without having to download and install a bunch of extensions.

That being said, VS also has amazing extensions. My favourite are those from [Mads](https://github.com/madskristensen) (100% recommend [this one](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.ClearMEFComponentCache) for MEF errors.)

## It's history

When I first began working in Visual Studio extensibility, I wondered why it differed so much from the familiar TypeScript APIs from VS Code. Well, because Visual Studio is much older than TypeScript (it was used to _create_ TypeScript). The legacy code, the wonders of COM and MEF... it is all annoying and frustrating, but was there from the early days of many of the products that we all know and love.

I now realize that this might seem like a super biased post coming from a Microsoftie that works in Visual Studio. But oh well, I already spent some time writing this and with the state of the economy words are too expensive to dispose of them like that. Besides, I'm not being paid to write this, and I'm sure that I haven't reached influencer status for this post to have an impact in the number of VS downloads. Just rambling about my IDE endeavours, which hopefully some of you might find worth reading.

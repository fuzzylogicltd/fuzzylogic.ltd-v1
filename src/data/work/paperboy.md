---
title: "Paperboy"
sortOrder: 2
image: "./paperboy.png"
blurb: "As a personal project, I'm working on a web RSS feed reader."
tags: "TypeScript, React, CSS, Node, Express, AWS"
www: "https://paperboy.fuzzylogic.ltd/"
git: "https://github.com/fuzzylogicltd/paperboy-frontend"
slug: "/paperboy"
---

This is a project I decided to embark on recently for about 50% learning purposes and 50% actually being useful.

I use and have been using RSS to consume the web since probably about 2005 or thereabouts, when I first learned that RSS is a thing. I think it's the best way to consume the web, and more importantly curate what you will consume in a way that is both time-efficient and free from big tech interference. I'll get back to that in a second, but first let me answer the question probably half of the people reading this have.

## Isn't RSS Dead?

Actually no, it's alive and well thank you very much. Many people think RSS died or was at least abandoned as a technology when Google killed Google Reader more than a decade ago. After that it kind of faded from the mainstream since there wasn't a big corporation pushing for it any more, but it's still there, still working and many people use it. Many sites still publish RSS feeds, for starters all WordPress sites do it by default unless you turn it off, and WordPress runs like a third of the internet.

## But why use it? Don't we have something better by now? It's old tech!

It is old tech. But no, in my humble opinion we do not have anything better. The thing is, if you want to follow news sources you have two options. Go to each site you're interested in and read what you're interested in on it, and do that one by one. Or, have some kind of aggregator combine it all in one place for convenience. The "aggregators" most people use these days are social networks. You go to the page of the media source you're interest in, like a newspaper or portal or whatever, and click "follow". And then - and this is the crucial bit - the social media algorithm decides what you should read. And all of them are made to farm maximum engagement regardless of how relevant the content might be for you. And I won't even get into the fact that it's near impossible to go back to find something you read a while ago, unless you specifically saved it.

Entire books have been written on how social media has warped our perceptions of reality for their purely financial gains. I'm not going to go into (any more) excruciating detail, but the short of it is, if you take care of your diet and are picky what you put in your stomach, the brain should get the same consideration, no?

I believe RSS is the solution to this. Feed readers (typically):

- Don't order the articles by anything other than publication date
- Don't suggest what "you may also like"
- Make it easy to go back and find stuff you've read
- Make it easy to completely control your own data

## Feed readers out there

So there's a ton of them actually, and a bunch of them are pretty good. I won't list them here, but there's a thousand articles you can [google](https://duckduckgo.com) for suggestions. There's free and paid options, open source and proprietary, web, desktop and mobile, you name it.

I used Netvibes (now dead) for a long time, but for the past 5-6 years I've been on [Feedbin](https://feedbin.com) and am very happy. It's a paid service, but offers a few features that I've not seen on any free one like newsletter-to-rss and custom article filtering, and is _really_ nice on the eyes.

## Building my own

I decided to take a crack a building my own reader. I feel no shame in saying that I am imitating Feedbin in many ways and whenever I get stuck on a decision (mostly in terms of UI) I consider how they've solved it, because they've mostly solved all of that stuff well.

For me this is in large part a learning project, the idea being it will help me advance my knowledge of full-stack JavaScript (ie NodeJS), REST API design and wrangling AWS services.

It's written in TypeScript, uses Node, Express and Prisma on the backend, React and TanStack Query on the front, and sits on AWS EC2 and Amplify.

The biggest challenges are to get the UX right across different screen sizes, especially since the idea is for this to be a full-blown PWA that you can just stick on your phone and have it work perfectly (that's how I use Feedbin 90% of the time).

Right now the project is functional and live, but there are many more things to do and features to add. I won't list them here because I don't want to have another list to update, but you can [see it on GitHub](https://github.com/fuzzylogicltd/paperboy-frontend).

That is it for now, whish me luck!

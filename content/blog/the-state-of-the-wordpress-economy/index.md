---
title: "The State of the WordPress economy"
date: '2019-12-05T01:24:08Z'
spoiler: "Join me in _an exploration_ of the forces, trends, and future developments of the WordPress open-source ecosystem. I aim at helping myself and you get a clearer picture about the reality of the WordPress world, however fair or unfair things may seem. I believe we each need as much clarity as possible if we are to help progress WordPress, and the web at large, in a meaningful way."
---

First of all, some _clues_ about my background so you can gauge _the biases_ that may push me in certain directions. I've been working with WordPress in one form or another for the past ten years. Going back about six years, WordPress has been my primary focus through my work at [Pixelgrade](https://pixelgrade.com/) (co-founder and CTO), a niche maker and seller of premium WordPress themes. 

My exposure to the WordPress economy has been quite wide starting with custom client work, continuing with products on [ThemeForest](https://themeforest.net) (an Envato marketplace), then expanding to [WordPress.com](https://wordpress.com), finishing with directly selling themes through a self-hosted shop at [pixelgrade.com](https://pixelgrade.com/) and distributing free WordPress themes through [WordPress.org](https://wordpress.org).

Now that you have a sense of my experience in the WordPress space, join me in _an exploration_ of the forces, trends, and future developments of this open-source ecosystem. This last characteristic is important since I believe **WordPress is exemplary** of the dynamics that naturally emerge in **open-source software projects.** Much of what follows ultimately ties back to this.

## A little thing called GPL

The cornerstone of any open-source ecosystem is its software license, a veritable social contract or governing law. WordPress adopted the [GNU General Public License](https://en.wikipedia.org/wiki/GNU_General_Public_License) (GPL for short). This license has some very clear and powerful characteristics:
- it's a free _and_ open-source software (FOSS) license meaning you don't just have to _publicly release you source code_ but you have to _allow its free redistribution;_
- it's a [copyleft](https://en.wikipedia.org/wiki/Copyleft) type of license meaning that any piece of software that is based on GPL-licensed code _must_ also adopt the GPL license; many dub this as having _an infectious behavior._

**The GPL sets the stage** for all the actors involved in WordPress. No matter how hard any of them try to push it to one side, it stubbornly finds its way back in any meaningful argument or decision. It's not an elephant that stumbles over precious china, more like _a single-minded bull_ that will not allow anyone to forget they are in an arena under his reign. All this is _exactly_ how the GPL's creator envisioned it. No accidents or surprises here.

I've struggled a great deal in the past two years with the philosophy of the GPL, it's economic and community implications, and, ultimately it's view of human nature. Today, I am _firmly_ in the camp of [Eric S. Raymond](https://www.linuxjournal.com/article/9911) and [David Heinemeier Hansson _aka_ DHH](https://m.signalvnoise.com/open-source-beyond-the-market/)  concerning the alignment of GPL with today's software landscape: it makes little sense for **ideological and economic conditions of the 1980s**(as seen by a brilliant, but [awfull man](https://www.wired.com/story/richard-stallmans-exit-heralds-a-new-era-in-tech/)) to shape today's collaborations and solutions (30 years later _aka_ a couple of centuries in Internet time).

_Note: If you are after a deep, deep dive into the history, concepts, and biases behind the creation of the GPL by Richard Stallman (Free Software Foundation), I highly recommend [Labyrinth of Software Freedom](http://www.softpanorama.org/Copyright/License_classification/index.shtml) by Nikolai Bezroukov. The site's styling is lack-luster at best, but the content is solid and quite enjoyable._

## Making a living in a GPL world

If one was to fanatically follow the license's intent, as some do, no one could sell GPL software products. Everyone should just generously give away all the code that they produce. _Replenish the commons_ as the 19th and 20th-century egalitarians warned.

Sadly, developers are also human and need some money to get by in this capitalist world. Richard Stallman had a now-infamous solution: _work at a fast-food by day and code by night._ It would make for a good joke if he didn't actually mean it and crafted a software license to match.

But developers are inventive, ambitious, high-maintenance creatures. A time-intensive, low-paying job would not cut it. Along came the equally infamous solution: produce free, quality software, win a reputation, and do consulting work for clients that use it - **sell services.**

Now, what about the folks that don't enjoy client work endlessly and wish to take a stab at working full-time on digital products? Well, there is a solution for this also, dubbed "the GPL loophole": **don't distribute your GPL-licensed code, just sell access to it.** The SasS (software as a service) business model was the obvious tactic. Few people seem to notice _the absurdity_ of the situation. It defeats the whole free and open-source thing, the contributing back to the commons mantra, but who cares?! There is no violation of the license — everything is just fine.

I don't know about you, but this all feels like having a nail and using it as a toothpick, to scribble on walls, to stab others [in self-defense], anything but the obvious: get a hammer and drive it through a piece of wood. All because someone, at some point in time, had an exaggerated wood appreciation or a misplaced nail-on-wood fetish.

## Selling GPL-licensed software products

Human nature, being.. well.. human nature, could not simply accept this reality. People naturally want freedom in _the way_ they do business and _value_ their work.

Along came **the split-licensed** WordPress themes and plugins that pushed the whole derivatives narrative to its limits by stating that only the PHP code qualifies as a derivative work under the terms of GPL, while the rest of the product (CSS styling, JavaScript code) is free to use other licenses. For any actual user of a plugin or theme, both parts are needed to get some value from the product. Product makers used this to enforce a stricter license that would, in effect, eliminate the free part from the "free and open-source" nature of GPL. If this is in line with the GPL is an ongoing debate with no end in sight.

The vast majority of individuals and companies focused on selling products in the WordPress space did the "right" thing and chose a "100% GPL" license, distributing _all their code_ under the GPL. If you have followed along, I guess the first thing that comes to mind is: _but how can they stay sustainable since, in an extreme situation, they could sell each product just once, after which that buyer would distribute it for free?_

The reality is that all those individuals and companies are at the mercy of decency. They simply hope that extreme scenario will not happen. They all rely on customers doing the right thing and each buying the product they wish to use. Some do, some don't. As a precaution, product makers have reached back to the "sell services" solution: you only get product updates and, most importantly, product support (a service in disguise) if you actually buy the product — shaky, stressful way of doing business.

---

After this whole extended introduction, a simple question begs for some answering: _who does the GPL benefit since everyone seems to be fucked in one way or another?_ Let's explore some possible answers.

## What customers haven't asked for

Someone buying a GPL products is automatically empowered by **the four freedoms,** whether she knows it or not:
- run the program as you wish, for any purpose (freedom 0).
- study how the program works, and change it so it does your computing as you wish (freedom 1).
- redistribute copies so you can help others (freedom 2).
- distribute copies of your modified versions to others (freedom 3). By doing this you can give the whole community a chance to benefit from your changes. \
[_GNU - What is free software?_](https://www.gnu.org/philosophy/free-sw.html)

Great! More freedom to the people! If only they've asked for it or knew what to do with it.

In the everyday reality of people that actually want a problem of theirs solved, **only the first freedom counts.** The rest matter only to fellow developers. This is such a classic example of coders' self-absorbed importance and over-optimization. They tend to suffer from this quite a lot, by [my judgment](https://thinkwritecode.com/fixing-the-word-one-code-release-at-a-time/). 

After years of working with customers of all kinds and helping them get the most out of their purchase, I can safely say _the GPL is last on their list of concerns,_ if at all. So, the GPL (as opposed to other, friendlier, OSS licenses like [MIT](https://en.wikipedia.org/wiki/MIT_License)) is not making a meaningful contribution to the lives of non-technical software users.

## Corporatize the anti-corporate

The GPL was openly aimed at messing with (preferably destroying) the big, closed-source corporations of the 80s and 90s (think Microsoft, Oracle, IBM) in an attempt to save society from their evil clutches. It's the purest distillation of saying "Fuck you!" to a tech corporation. Until the corporation, ever resourceful and farsighted, answers back with "Okay!"

Corporations realized that open-source software is actually a very big opportunity for them, with benefits in all the right places. They realized their instinctual fear of customers taking their software and walking away was far removed from reality. Customers actually didn't care or didn't have the technical skills to do the walking away.

Open-source is ticking corporate boxes with surprising ease:
- democratic with totalitarian tendencies when making decisions;
- labor intensive with free contributions;
- a badge of honor for developers with little extra motivation required;
- trustworthy with mostly free peer-reviews;
- great public relations with free marketing and employer branding.

WordPress, as an open-source project, followed the same route. Even picked up speed in recent years. It reached a point where the market economy is clearly polarized: hosting corporations, Automattic (wordpress.com), and fellow large agencies serving enterprises, on one end, and freelancers or small teams doing consulting work at the other end. There are few successful entities in the middle. The obvious middle players, themes and plugins shops get acquired left and right like it's Christmas. 

It sure seems like a far cry from "democratize publishing." More like "corporatize publishing."

## Brand over code

As plainly stated by the GPL — if you look at it with your business glasses, code is only destined to be poured into that big bucket called "the commons", creators losing all rights and most financial value. As long as people get proper recognition in front of their peers, all is great. I find it hilarious that a software license meant to protect passionate, idealistic developers (and the world) from the onslaught of evil corporations, ends up stripping those same contributors' work of any meaningful value.

Today, the GPL license is a very advantageous license model for those who are after the brand of an open-source project, not its code. The fact that WordPress is GPL is favorable only for platforms like WordPress.com and agencies that benefit from the trust the WordPress brand commands. Product creators benefit to some extent from the market size, but they have a much harder time distinguishing their work from the _free WordPress core_ and the _free WordPress.org marketplace._

_WordPress the brand_ has become much more powerful and valuable than _WordPress the code._ The WordPress community of developers and users is a massive marketing machine for whoever has the capability of capitalizing on the WordPress brand. Little surprise that Automattic has exclusive rights to use the WordPress brand for commercial purposes; the other entity with these rights is WordPress.org controlled by the CEO of Automattic through the WordPress Foundation. The game seems awfully rigged. 

_WordPress the code_ is pretty much stale when it comes to improving extensibility and contributions, hence give everyone a fairer chance to succeed. Just look into these areas or initiatives: WordPress dashboard, WordPress Fields API, WordPress block editor, to name a few. For those of you in the know, WP-REST API doesn’t qualify since it is focused less on extensibility, but on data portability.

Looking at recent years, a lack of interest from Automattic or enterprise-focused agencies equaled a lack of effort and focus. Strong interest from them translated into a massive push to get things done, like what happened with the new block editor nicknamed Gutenberg. It is fair to say that the fortunes of WordPress are firmly in enterprise hands.

## Winter is coming for WordPress plugins 

Premium plugins, in stark contrast to premium WordPress themes, had a good ride this past couple of years. They've managed to keep and even increase their projected value while experimenting with more sustainable business models: monthly or mostly yearly subscriptions. It is fair to say that plugins have managed to increase their prices across the board.

I am afraid the good days are coming to an end for premium WordPress plugins. First, promising, platform-like plugins get scooped up and merged into the offerings of hosting services and wordpress.com. Second, many successful, functional plugins are either bought or replaced by similar solutions on platforms (hosting services are the main actors here). Third, successful page-builder plugins will only get bigger, bundling more and more functionality. 

That leaves only highly targeted plugins with a fighting chance of staying independent — and these are overwhelmingly technical in nature, aimed at site administrators.

## Dismantling WordPress themes 

Premium WordPress themes had their glory days until about three or four years back. I know since my team and I experienced it first hand. Sadly, neither I nor the larger community saw what was just around the corner. 

First, the market started a race-to-the-bottom pricing war, only benefitting platforms like Envato. Some of us stayed put and refused to engage. It made little difference since the customer's mind was hooked on ever-decreasing prices. Second, page-builders started to eat away the value-proposition of themes, cleverly tricked by the alure of integrating with them. Third, the new default block editor of WordPress (aka Gutenberg) is in the process of delivering the final blow to themes as we know them.

Themes seem to be targeted from all sides. There is a good reason for this onslaught: _design as a product is not aligned with the interests of large players in WordPress, and the web in general._ It is getting increasingly harder to sell design and nobody, besides themes, has any incentive to do that. The trend is to sell entire sites or solutions to specific problems. Design has become a selling vector for platforms and agencies, not a product in and of itself.

The premium WordPress themes market is getting thinned out: on the low end, you have a massive upside for platforms (like WordPress.com, GoDaddy, Elementor) that don’t really need themes as products, but just decoupled, standardized, preferably free designs; on the high end, you have all the tools to build complex systems (Gutenberg, WP-REST API, platform-like plugins: WooCommerce), systems that can bear the costs of custom design work.

Once Gutenberg delivers full-site editing capabilities and the block directory is in full swing, you can be sure themes will be reduced to merely providing a general, style-guide CSS. Few people will be willing to pay for that.

Unless **themes makers manage to take the initiative and do their own dismantling** before the ecosystem does it for them, times ahead are pretty grim. This process will take some serious _creativity, effort, and preferably collaboration_ between like-minded theme shops. I see **no other way to survive and thrive** in the new WordPress ecosystem.

---

Good for you to have made it this far. I've given it my best to make this exploration of the WordPress economy useful to everyone involved. I've tried to refrain from placing blame on one actor or another since I aim at helping myself and you get a clearer picture about the reality of the WordPress world, however fair or unfair things may seem. 

I believe we each need as much clarity as possible if we are to help progress WordPress, and the web at large, in a meaningful way.

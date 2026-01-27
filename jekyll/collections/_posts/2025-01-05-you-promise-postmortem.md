---
title: "You promise me a postmortem?"
date: 2025-01-05
tags: [interactive fiction, you promise]
category: devlogs
image: "promise.png"
alt: "The cover for You Promise. It is a fortune cookie fortune with the words 'You Promise' on it, and a series of numbers."
layout: posts
---
A postmortem about You promise. Full spoilers!
<!--more-->
## The reason
__You promise__ essentially started out as a date idea.

I had told my husband, Jake, that I like creating with him and want to do it more as a bonding/quality time activity. He felt the same, but admitted that the game we'd been working on for quite a while was too big and intimidating to think about finishing. So I said, let's do something small then, something that can be done in one day. When he asked what that could be, I remembered EctoComp was going on, and told him about the rules for La Petite Mort. This goal sounded doable, so we did it.
## Thinking really hard
As a couple, we have a tendency to analyze and over-analyze media, both when experiencing and creating it. We'll even pick apart jokes for fun--we *like* [looking at the dissected frog](https://www.goodreads.com/quotes/440683-explaining-a-joke-is-like-dissecting-a-frog-you-understand). Jake has said something to the effect of, "we think so hard about our stories that we barely write them". We both think obsessively about coherence of theme and symbolism in stories, though in creation I definitely focus on it to a more extreme degree (I mean, just look at my hour-long thematic puzzles talk...).

We started with a general topic, "fae shit", which we both are suckers for. The blue-orange morality just really grabs us, okay? After asking ourselves what we wanted to capture about this fae shit, we quickly circled around, and into, a singular idea, a single "trick", which Jake clarified in one statement: "It will take whatever you give It."

This is a common, though relatively new, trope with the fae, that they take metaphysical things that you give them, unintentionally or not. Your name, your pronouns, your abilities or lack thereof. part of what makes deals with the fae threatening is there is no point in which you "click to confirm", and you end up giving away things you never intended or knew were takeable in the first place.

What can you give the Honored Guest? Niceties, hospitality, compliments, intentions, desires, feelings, these are all things the Honored Guest will take and take and take from you when you offer them up. The trap only snaps later, when these vague "promises" about your feelings and plans are taken back. So how can you get It to give *you* what you want, without any way to "renege" later? What's the trick?

**Note:** The following section discusses the crux of our discussion and the nature of the trick. *It dissects the frog in full.* If you want to stick with your own interpretation of the text, you don't have to read it, but it's key to how and why we wrote it the way we did.

### The trick of it
<details>
<summary>Alright, tell me.</summary>
<p>Give It an order.</p>

<p>Why? Because the rules of the exchange means <i>It has to take them</i>. When It tries to trick you into giving It <i>anything</i> else, simply ignore It. While not all the good end responses are strictly imperatives, the throughline between them is that they are all one-time, limited, conditional, and straightforward. This discussion, this week, these numbers, directed at the Honored Guest only.</p>

<p>While a lot of the options seem like they're pointing at the same thing, the nature of how you deliver the request is the key here. <i>What</i> to wish for is not as important as <i>how</i> to wish for it. The thing is the Esteemed Host actually has substantial power here--if you order It about in this way, the rules mean It <i>will</i> take the order and give you what you demanded. Their anger, wheedling, and questions are just affect and posturing in the end.</p>
</details>

After solidifying that concept, we spun up several endings, refining or tossing out ideas centered around the core rule. A few hours later, we prepared to write it...the next day.
## Actually writing the game
In terms of narrative design, I suggested we structure the game into a [gauntlet](https://heterogenoustasks.wordpress.com/2015/01/26/standard-patterns-in-choice-based-games/), which I couldn't remember the word for so we called it a "Christmas tree". Each branch of the tree leads to a bad ending, with only one good path as the 'trunk'.

Jake had the smart idea of splitting the writing time into [pomodoros](https://en.wikipedia.org/wiki/Pomodoro_Technique) of 20 minutes, with breaks in between. This meant, with proper division of the 4 person-hours, we had six pomodoro sprints, making up two hours, each. We divvied up the seven endings and other needed passages (like the beginning and recurring bad end passage) between ourselves, and got to work.

I started with file organization (making nearly-blank `.tw` files with passages names in Tweego) and CSS styling out of the gate while Jake waited. This took longer than I'd wanted -- 1.5 sprints, i.e. 30 minutes (more on this later)--so during our break we had to re-allot the pomodoros evenly, hoping to eke out 10 minutes of copy-editing and hopefully bug-testing at the end. Jake started writing the beginning and sketches for the other passages for 10 minutes while I twiddled my thumbs, then I wrote based off his work. The rest was a cadence of write for 20 minutes, break, start again. The breaks were basically as-long-as-we-needed, where we rested mentally, reviewed what we'd accomplished so far, and revised our pomodoro plans as needed. One of our breaks lasted like two hours, but we made it very much a break away from the game entirely, since the writing time limit was pretty taxing.

When we finally finished writing, we were coming down to the wire and realized I  wouldn't have enough time to actually *put the passages into Twine*, let alone clean up the writing or make it consistent. Then two saving graces appeared, a few sprints apart.

1. Apparently file organization doesn't count toward your time.
2. Apparently CSS styling _also_ doesn't count toward your time.

This meant we actually had _30 more minutes_ than we'd thought! We split it into something like 10 minutes of Jake doing a copyediting pass, 15 minutes of me quickly stuffing the passages into Twine with a quick writing-consistency pass, and *5* minutes of me attempting to bug-test CSS styling and the bit of logic that did exist (which was literally just adding the forwarding to the beginning passage once you hit an ending). Phew!

It felt a little dodgy at the end with all that recalculation, so I'm not sure if we actually went over or under the time limit after all by the given rules, but if we did go over (or under??), it probably wasn't any more than 5-10 minutes. So we can say, 2 hours **±** 10 minutes, perhaps?
## Responses to responses
### Deal with the...
We think it's a little funny that several people have called this a Faustian bargain when neither of us have read the original story of Faust and the Devil, nor are we especially familiar with it outside of cultural osmosis. We were thinking of the word twisting of fae contracts and the dangers of breaking them, which has a different feeling to us than the doomed narrative that comes with making a Deal with the Devil. Crucially, the Faustian bargain trope, the monkey's paw, the evil genie, are all exchanges that you *cannot win*. But here, you *do* have a chance, as ambiguous as that ending turned out to be. There *is* a correct answer to the riddle that will let you steal away with the faerie gold, you just have to figure out what the trick is.
### Being rude as hell
I felt incredibly called out by my friend's very astute analysis that the game is "VERY Aster". When I asked why, he said this:

**Friend:**
> The host never ACTUALLY makes the guest a promise, they just make the odd declarative statement or incincere gesture of goodwill. The guest renders them promises after the fact, and the only thing that preserves the host is being blunt and direct about their wants with little regard for the guests expectations. It frames these kinds of social lubricants as traps to ensnare the speaker. Which, in a lot of circumstances, they can be! It's an interesting subversion of stories where you have to be polite to the fae or suffer their wrath; it's human rules that are framed as the ones that are binding, and you keep yourself safe by trampling over them.

**Jake:**
> Yeah, that's a great reading of what we were going for! The central "post" that we tried to orient all the decisions/outcomes towards was the Honored Guest will take anything, _anything_, you "give" to it. And it gets an unfair amount of discretion about what counts as "giving." So the best thing you can give it is commands, or at least grammatically imperative statements. Depending on cultural context, real life human social graces are highly symbolic and often expect forbearance (e.g. people won't take full advantage of offers, and the offers are usually more than what is expected), whereas the Honored Guest makes those offers or graces absurdly literal.

**Another friend**:
> Don't be nice to the guest, just demand things from it, never give an inch!!! then you can finally keep the money but feel unease for possibly a long long time yay!

Other reviews from the interactive fiction community reflected this idea. In truth, the secret to the trick does not inherently involve being rude as hell to your Honored Guest; it's more of a side effect of how to apply it. We hadn't thought of these framings when writing it, but we totally agree with them! It uses formality and etiquette as a weapon, is trying to hit the part of the brain that makes you behave in ways that make you give It niceties that It can twist.

...The fact that this bluntness is actually my communication style in real life is just a coincidence, right?
### El problema es el capitalismo
The most surprising part of reviews was people pointing out the capitalist, "rules lawyer" framing of the Honored Guest. This was not intentional on our part either! We knew we wanted to draw on influences like the silver-haired man in Jonathan Strange & Mr. Norrell who just looks like, more or less, a Regular Guy™. We wanted It to be unassuming and normal-seeming, so we chose the appearance of a mundane businessperson with a simple but classy briefcase.

However, we really like this reading, especially since the Esteemed Host is asking for money for such extravagant things as their month-to-month rent. The predatory and unequal nature of the exchange was fully intentional, and we loved the reviews that picked it up and read it this way. The framings of the Esteemed Host and Honored Guest becomes a box that you can be trapped in, which takes counterintuitive effort to break. Just like capitalism! Maybe not like judicial court??
## Trivia
- The Honored Guest smells of autumn, and at the start of a bad ending, the autumn smell starts to smell like winter rot.
- The offset text of `promise` was inspired by the `house` in House of Leaves.
- We tried to never call It a fae outright, except for the references to faerie gold.
- It's not happy with you when you insult It. In most games this is a cue that you're fucking up, but in this game it's more of a front to intimidate you into doubting your answers and impropriety.
- By complete accident, someone I know got the good ending on the first go around and didn't understand why it was titled "You promise" until they decided to replay. I find this incredibly amusing.

## One last thing...
Tell us which ending you got first! We'd love to know 😃
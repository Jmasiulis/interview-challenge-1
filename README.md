# Introduction
This is technical challenge for Feedr. This challenge involves basic manipulation of data items by adding, removing and showing data of overall results

## Project structure:
Project is structured in a classic manner as follows:
- Features - There you will find one Menu feature. It contains some more divided components such as items, layout, panel and components. All of them has tests in it.
- Utils - this is just very basic utilities such as styles (quite possibly could be stored elsewhere), data manipulation and mocked items themselves.
- Other files for configuration and main entry points.

## Testing:
No complicated testing has been done in this challenge. I took some time to ensure that necessary components are always rendered whenever necessary and all component structure is there as intended.

## Thought Process:
### Task itself:
For the task itself I figured that item always has to be removed from the options menu and placed on the right menu. In the real world, you could add several items of the same name. This was done just to keep this more simple and maybe as a point for further improvement.

If item gets removed from selected items, it gets thrown back into the pool of items to be selected.

Items count and dietaries are changing whenever items are selected or removed. Selected dietary options are not visible if no selected item contains it.

I used objects data structures instead of arrays. I just find that while navigating objects might be a bit more tedious and harder to read, it's just much faster.

Folder structure itself could be reconsidered. Since it's a small project for now, it's not that difficult to navigate and find the necessary components. But as project grows bigger, this definetely requires more consideration. Now I just splitted it into more obvious folders, for the sake of simplicity.

I had a debate with myself whether I should use React context versus use state and reside for prop drilling. Since it was not that complicated and Context, in my humble opinion, is a bit dangerous in some situations, I sticked with maybe more tedious, yet more understandable approach.

I made sure to separate and divide components into most basic atomic chunks to avoid any repetition. Of course, there might be some improvements to be done in some areas how components are divided.


## Problems encountered and improvements, which could be done:
More extensive testing, particularly more behavioural testing, such as what happens when the item gets removed/added.

Folder structure should be reconsidered if the project gets bigger.

Layout component could be a bit smaller and some logic chunks could be moved elsewhere. Usually I wouldn't do that kind of state manipulations in the component itself. I'm personally used to do that in sagas or elsewhere.

Styles shouldn't be in one file, as they should be divided and used in folders where they're necessary. Since I'm not sure if that's the part of the configuration, which shouldn't be changed, I left this as is for now.

Utils could use some unit tests.


## Author:
Justinas Masiulis - Developer
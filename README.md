The content below is an example project proposal / requirements document. Replace the text below the lines marked "__TODO__" with details specific to your project. Remove the "TODO" lines.

(__TODO__: VibeCheck)

# VibeCheck 

## Overview

(__TODO__: a brief one or two paragraph, high-level description of your project)

Creating meaningful relationships, especially in a big city like New York, where one can have interactions with several people each day, is difficult. It's hard to remember specific nuances about each friend, and how each hangout made you feel. That's where VibeCheck comes in!

VibeCheck is a web app that will allow users to record interactions with friends, reflect on hangouts, and track important details to assess their relationships. They will be able to sign up and login to view all of their friends or create new ones. For every friend they have, they will be able to add a hangout, new detail they learned about their friend, and record how the interaction made them feel. They will also be able to view past interactions with the friend.

VibeCheck will facilitate the process of making intentional connections by helping users stay mindful of their relationships and the people they choose to spend time with. 

## Data Model

(__TODO__: a description of your application's data and their relationships to each other) 

The application will store Users, Friends, and Interactions

* users can have multiple friends (via references)
* each friend can have multiple interactions (by embedding)

(__TODO__: sample documents)

An Example User:

```javascript
{
  username: "shubhi_upadhyay",
  hash: // a password hash,
  lists: // an array of references to Friend documents
}
```

An Example Friend with Embedded Interactions:

```javascript
{
  user: // a reference to a User object
  name: "Alex",
  about: [ "Met in College", "Studied Math", "Interested in Running", "Is From Philadelphia" ]
  interactions: [
  {
    date: "2024-10-26",
    activity: "Exploring Central Park",
    newDetail: "Interested in Running",
    reflection: "Enjoyable, had good conversation",
    rating: 5

  },
   {
    date: "2024-10-10",
    activity: "Getting Pizza",
    newDetail: "Is From Philadelphia",
    reflection: "Enjoyable, had good conversation",
    rating: 5

  },

  ],
  createdAt: // timestamp
}
```


## [Link to Commented First Draft Schema](db.mjs) 

(__TODO__: create a first draft of your Schemas in db.mjs and link to it)

The schema definitions can be viewed in [`db.mjs`](./db.mjs)

## Wireframes

(__TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

/list/create - page for creating a new shopping list

![list create](documentation/list-create.png)

/list - page for showing all shopping lists

![list](documentation/list.png)

/list/slug - page for showing specific shopping list

![list](documentation/list-slug.png)

## Site map

(__TODO__: draw out a site map that shows how pages are related to each other)

Here's a [complex example from wikipedia](https://upload.wikimedia.org/wikipedia/commons/2/20/Sitemap_google.jpg), but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

## User Stories or Use Cases

(__TODO__: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://en.wikipedia.org/wiki/Use_case))

1. As a user, I want to either log in or create an account on the site to access my recorded friends and interactions
2. As a user, I want to add a new friend to my dashboard so I can record interactions with them
4. As a user, I want to add an interaction corresponding to a friend so I can keep track of the date, activity, and any new details I learned about them
5. As a user, I want to see a list of all of my friends on the dashboard so I can quickly click on and access information about each one
6. As a user, I want to access a friend's profile so I can see all of my past interactions with them along with moods after these interactions.
7. As a user, I want to see a list of details I've learned about each friend so I can hone in on certain relationships at certain times.

## Research Topics

(__TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed)

* (5 points) Integrate user authentication
    * I'm going to be using passport for user authentication
    * And account has been made for testing; I'll email you the password
    * see <code>cs.nyu.edu/~jversoza/ait-final/register</code> for register page
    * see <code>cs.nyu.edu/~jversoza/ait-final/login</code> for login page
* (4 points) Perform client side form validation using a JavaScript library
    * see <code>cs.nyu.edu/~jversoza/ait-final/my-form</code>
    * if you put in a number that's greater than 5, an error message will appear in the dom
* (5 points) vue.js
    * used vue.js as the frontend framework; it's a challenging library to learn, so I've assigned it 5 points

10 points total out of 8 required points (___TODO__: addtional points will __not__ count for extra credit)


## [Link to Initial Main Project File](app.mjs) 

(__TODO__: create a skeleton Express application with a package.json, app.mjs, views folder, etc. ... and link to your initial app.mjs)

## Annotations / References Used

(__TODO__: list any tutorials/references/etc. that you've based your code off of)

1. [passport.js authentication docs](http://passportjs.org/docs) - (add link to source code that was based on this)
2. [tutorial on vue.js](https://vuejs.org/v2/guide/) - (add link to source code that was based on this)


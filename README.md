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

/dashboard - page for viewing a user's friends / recent interactions in a dashboard format

![dashboard](documentation/Dashboard.png)

/friend - page for adding / editing a friend

![edit-friend](documentation/Edit_Friend_Page.png)

/friend/interaction-slug - page for adding / editing an interaction

![edit-interaction](documentation/Edit_Interaction_Page.png)

/friend/details-slug - page for viewing a friend's details
![friend-details](documentation/Friend_Details.png)

## Site map

(__TODO__: draw out a site map that shows how pages are related to each other)

Here's a [complex example from wikipedia](https://upload.wikimedia.org/wikipedia/commons/2/20/Sitemap_google.jpg), but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

[Site Diagram](documentation/site_diagram.png)

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


* (3 points) Unit Testing with Javascript
    * Unit testing is a manner of testing your code by testing each smallest possible unit of code at a time. This typically refers to functions, so unit testing enables the testing of individual functions. It is used to ensure that individual pieces of code work in isolation, so it helps pinpoint errors because a developer can look at which tests are failing to determine where the code may be buggy. Possible frameworks I could use would be Jest and Mocha, although I'm definitely leaning towards Jest because it has more features, specifically mocking, which will be helpful in testing aspects like adding to / modifying a database. I plan to use Jest to test essential functions in my app, such as logging in / registration, adding a friend, and adding an interaction with a friend.

* (2 points) Using a CSS Framework with Customization
   * CSS Frameworks are libraries with pre-defined styles and components, such as buttons and nav bars. These make the life of a developer easier by simplifying the process of creating consistent, cohesive, and responsive web pages. Using a CSS framework thus expedites the process of designing a web page, which allows the developer to focus more on the functionality of the web app rather than its appearance. Personally, I'm leaning more towards using Bootstrap rather than Tailwind CSS although both are very popular CSS frameworks. This is just because I've used Tailwind in the past and don't enjoy it, so I wanted to try something new. I plan to customize Boostrap's styles to configure a theme by overriding colors, changing typographies, and adjusting the properties of elements like buttons, navbars, and cards.
 
* (6 points) Using a Frontend Framework - React
   * React is a Javascript library used to build out user interfaces; it facilitates the development processs of creating UIs by enabling developers to make reusable components, such as friend details pages and forms for creating and editing friends and interactions. This component-based workflow will be useful in creating modular and organized code but will also ensure that the app's appearance remains seamless from page to page. I'm assigning it 6 points because utilizing a front-end framework is a significant undertaking (although I have previous web dev experience), involving setting up the frontend project directory, creating components and pages, and integrating with the backend Express architecture.
 
* (3 points) Using server-side Javascript modules - node-cron and nodemailer
  * After doing some researching, I've found a way that I can send automated email reminders to the user if it's been some time since they last interacted with a friend. node-cron is a task scheduler module in Javascript, that can be used to schedule a daily task that searches through the database of friends and finds their most recent interaction with the user. If the date of it is far in the past (say, more than 30 days), then the friend is added to a list. Then, nodemailer, a module that allows Node.js applications to send emails, is configured to send an email to the user with a suggestion for a friend from the list / entire list of friends to catch up with. I gave this three points because it involves multiple steps and two different modules, including setting up the daily task with node-cron, configuring nodemailer to send customized emails, and ensuring the task queries the database accurately and consistently.

 

14 points total out of 10 required points (___TODO__: addtional points will __not__ count for extra credit)


## [Link to Initial Main Project File](app.mjs) 

(__TODO__: create a skeleton Express application with a package.json, app.mjs, views folder, etc. ... and link to your initial app.mjs)

## Annotations / References Used

(__TODO__: list any tutorials/references/etc. that you've based your code off of)

1. [React Docs](https://react.dev/) 
2. [node-cron docs](https://www.npmjs.com/package/node-cron) 
3. [nodemailer inf](https://nodemailer.com/)
4. [jest docs](https://jestjs.io/docs/getting-started)


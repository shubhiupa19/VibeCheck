# VibeCheck 

## Overview

Creating meaningful relationships, especially in a big city like New York, where one can have interactions with several people each day, is difficult. It's hard to remember specific nuances about each friend, and how each hangout made you feel. That's where VibeCheck comes in!

VibeCheck is a web app that will allow users to record interactions with friends, reflect on hangouts, and track important details to assess their relationships. They will be able to sign up and login to view all of their friends or create new ones. For every friend they have, they will be able to add a hangout, new detail they learned about their friend, and record how the interaction made them feel. They will also be able to view past interactions with the friend.

VibeCheck will facilitate the process of making intentional connections by helping users stay mindful of their relationships and the people they choose to spend time with. 

## Data Model


The application will store Users, Friends, and Interactions

* users can have multiple friends (via references)
* each friend can have multiple interactions (by embedding)


An Example User:

```javascript
{
  username: "shubhi_upadhyay",
  email: //email address
  password: // a password hash,
  friends: // an array of references to Friend documents
}
```

An Example Friend with Embedded Interactions:

```javascript
{
  name: "Alex",
  about: [ "Met in College", "Studied Math", "Interested in Running", "Is From Philadelphia" ]
  interactions: [
  {
    date: "2024-10-26",
    activity: "Exploring Central Park",
    newDetail: "Interested in Running",
    reflection: "Enjoyable, had good conversation",
    rating: 5,
    emoji: ☺️

  },
   {
    date: "2024-10-10",
    activity: "Getting Pizza",
    newDetail: "Is From Philadelphia",
    reflection: "Enjoyable, had good conversation",
    rating: 5,
    emoji: 🍕

  },

  ],
  createdAt: // timestamp
}
```


## [Link to Commented First Draft Schema](models) 



The schema definitions can be viewed in [`/final-project/src/models`](/final-project/src/models)

## Wireframes



/dashboard - page for viewing a user's friends / recent interactions in a dashboard format

![dashboard](documentation/Dashboard.png)

/add - page for adding / editing a friend

![edit-friend](documentation/Edit_Friend_Page.png)

/friend/interaction-slug - page for adding / editing an interaction

![edit-interaction](documentation/Edit_Interaction_Page.png)

/friend/details-slug - page for viewing a friend's details
![friend-details](documentation/Friend_Details.png)

## Site map




![Site Diagram](documentation/site_diagram.png)

## User Stories or Use Cases


1. As a user, I want to either log in or create an account on the site to access my recorded friends and interactions
2. As a user, I want to add a new friend to my dashboard so I can record interactions with them
4. As a user, I want to add an interaction corresponding to a friend so I can keep track of the date, activity, and any new details I learned about them
5. As a user, I want to see a list of all of my friends on the dashboard so I can quickly click on and access information about each one
6. As a user, I want to access a friend's profile so I can see all of my past interactions with them along with moods after these interactions.
7. As a user, I want to see a list of details I've learned about each friend so I can hone in on certain relationships at certain times.



Milestone 04 - Final Project Documentation
===

NetID
---
su2132

Name
---
Shubhi Upadhyay

Repository Link
---
[Link to Repo](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-shubhiupa19/)

URL for deployed site 
---
[Link](http://linserv1.cims.nyu.edu:36503/)

URL for form 1 (from previous milestone) 
---
[Link to login/register (same as deployed site URL)](http://linserv1.cims.nyu.edu:36503/) -> on correct submission

Special Instructions for Form 1 (note ** the site has been loading extra slowly on 12/7/2024, for some reason, it still works - it just takes a few extra seconds!)
---
To see tester information, you can login using the credentials:
username: tester
password: 1234
You can also just create an account and proceed normally as well.

URL for form 2 (for current milestone)
---
[Second Form](http://linserv1.cims.nyu.edu:36503/add)

Special Instructions for Form 2
---


URL for form 3 (from previous milestone) 
---
[Sample Friend Interaction Form](http://linserv1.cims.nyu.edu:36503/friend/673a80107ef8c4bf3e5b3b0b/add-interaction)

Special Instructions for Form 3
---
You must already have logged in and created a friend to add an interaction. In the example above, the form is creating an interaction for a friend named Alex. 

In this case, you must be logged into the given login credentials to access the page to prevent accessing and editing other users' friend info. 

First link to github line number(s) for constructor, HOF, etc.
---
[Link](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-shubhiupa19/blob/cdaeb58c0c58520beebb2f449cf7e82e50ef367f/final-project/src/app/friend/%5Bid%5D/page.js#L87-L110)

Second link to github line number(s) for constructor, HOF, etc.
---
[Link 2](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-shubhiupa19/blob/cdaeb58c0c58520beebb2f449cf7e82e50ef367f/final-project/src/app/api/friends/%5Bid%5D/route.js#L19-L22)

Short description for links above
---
1) The first link is a higher order map function used for rendering each interaction with a friend in a `<span>` element with the data of the interaction. The callback takes in a single `interaction` as a parameter, and applies the same styling to each element of the `interactions` array. This is done using HTML and Tailwind CSS. The result is a more readable and understandable list of interactions displayed on the webpage. 
2) The second link is also a higher order map function used for formatting the `date` property of each interaction with a friend in the `interactions array` on the server side. The callback function also takes in a single `interaction` as a parameter, and uses `date-fns` library to format its `date` property.
   
Link to github line number(s) for schemas (db.js or models folder)
---
(TODO: add link to schemas)

Description of research topics above with points
---
(TODO: add description of research topics here, including point values for each, one per line... for example: 2 points - applied and modified "Clean Blog" Bootstrap theme)

Links to github line number(s) for research topics described above (one link per line)
---
(TODO: add link to github line number(s), one per line for research topics ... for example, if using auth/passport, link to auth.js or where bulk of auth code is)

Optional project notes 
--- 
(TODO: optionall add add any other information required for using/testing the final project)

Attributions
---
(TODO:  list sources that you have based your code off of, 1 per line, with file name, a very short description, and an accompanying url... for example: routes/index.js - Authentication code based off of http://foo.bar/baz ... alternatively, if you have already placed annotations in your project, answer "See source code comments")

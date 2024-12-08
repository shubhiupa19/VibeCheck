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
[Link to login/register (same as deployed site URL)](http://linserv1.cims.nyu.edu:36503/)

Special Instructions for Form 1 (note ** the site has been loading extra slowly on 12/7/2024, it still works - it just takes a few extra seconds!)
---
To see tester information, you can login using the credentials:  
username: tester  
password: 1234  
You can also just create an account and proceed normally as well.  

URL for form 2 (for current milestone)
---
[Second Form](http://linserv1.cims.nyu.edu:36503/add)

 **:warning:you must be logged into an account to access this form:warning:**, this prevents just anyone from adding a friend. If not, you will be rerouted to the login page.
.
Special Instructions for Form 2
---


URL for form 3 (from previous milestone) 
---
[Sample Friend Interaction Form](http://linserv1.cims.nyu.edu:36503/friend/673a80107ef8c4bf3e5b3b0b/add-interaction)

Special Instructions for Form 3
---
You must already have logged in and created a friend to add an interaction. In the example above, the form is creating an interaction for a friend named Alex. 

In this case, **:warning:you must be logged into the tester login credentials above:warning:** to access the page; this prevents accessing and editing other users' friend info. 

If not, you will be rerouted to the login page.

First link to github line number(s) for constructor, HOF, etc.
---
[Link](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-shubhiupa19/blob/cdaeb58c0c58520beebb2f449cf7e82e50ef367f/final-project/src/app/friend/%5Bid%5D/page.js#L87-L110)

Second link to github line number(s) for constructor, HOF, etc.
---
[Link 2](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-shubhiupa19/blob/cdaeb58c0c58520beebb2f449cf7e82e50ef367f/final-project/src/app/api/friends/%5Bid%5D/route.js#L19-L22)

Short description for links above
---
1) The first link is a higher order map function used for rendering each interaction with a friend in a `<span>` element with the data of the interaction. The callback takes in a single `interaction` as a parameter, and applies the same styling to each element of the `interactions` array. This is done using HTML and Tailwind CSS. The result is a more readable and understandable list of interactions displayed on the webpage. 
2) The second link is also a higher order map function used for adding in the `date` property of each interaction with a friend in the `interactions array` if it doesn't exist. The callback function also takes in a single `interaction` as a parameter, and sets the `date` to the current date and time, if the user hasn't entered one. This way, there are no errors thrown when the client renders the interactions they have with a friend. There are definitely other ways to handle this issue, but I preferred to ensure that the date value is populated at all times, and so I decided to set it to the current date rather than "no date" or "undefined". 
   
Link to github line number(s) for schemas (db.js or models folder)
---
[Models folder](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-shubhiupa19/tree/master/final-project/src/models)

Description of research topics above with points
---
(2 points) Using a CSS Framework with Customization

CSS Frameworks are libraries with pre-defined styles and components, such as buttons and nav bars. These make the life of a developer easier by simplifying the process of creating consistent, cohesive, and responsive web pages. Using a CSS framework thus expedites the process of designing a web page, which allows the developer to focus more on the functionality of the web app rather than its appearance. Personally, I'm leaning more towards Tailwind CSS because it easily integrates with Next.js, which I'm planning on using for my app. So far, it has been pretty easy to use and the docs are very well structured. I have also customized Tailwind CSS by modifying the button and text colors as well as the app's font. 

(6 points) Using a Frontend Framework - Next

Next is a React-based Javascript library used to build out user interfaces; it facilitates the development process of creating UIs by enabling developers to make reusable components, such as friend details pages and forms for creating and editing friends and interactions. Additionally, the built-in routing system allows me to manage both frontend routes and API endpoints in the same directory, without requiring a separate backend framework like Express. I'm assigning it 6 points because utilizing a front-end framework is a significant undertaking (although I have previous web dev experience), involving setting up the project structure, creating components, API endpoints and pages, and utilizing the appropriate syntax for connecting to MongoDB.

(3 points) Using a server-side library - jsonwebtoken

I implemented JWT-based authentication in VibeCheck to validate whether a user was logged in before retrieving their list of friends. Essentially, the way it works is that when a user logs into or signs up in the app, the server-side code generates a JSON Web Token (containing info such as their userId in MongoDB) and sends it to the client, which then stores it in localStorage. For future interactions between the client and server (that require authentication), the client sends the JWT in the HTTP Authorization request header. I implemented it to ensure that a user could only access their friends if they were logged in, and that a user's list of friends wouldn't be accessible to just anyone to access the web app. It's a pretty interesting technology.

(2 points) Using client side libraries - date-fns, Chart.js

While not initially planned, I ended up using date-fns to lightly format the dates within the application to make them more readable, and also implement a chart using Chart.js for each friend; this way, the user can track their moods after interacting with the friend over time. These libraries were intuitive to use and definitely enhanced the user experience 

(1 point) Using a server-side library - bcrypt

On the server side, I used bcrypt to securely hash and compare the passwords and user inputs. This ensures that I wasn't storing any plaintext passwords in my database. It helped improve the security of my application. 


14 points total out of 10 required points



Links to github line number(s) for research topics described above (one link per line)
---
(TODO: add link to github line number(s), one per line for research topics ... for example, if using auth/passport, link to auth.js or where bulk of auth code is)

[CSS Framework - Tailwind](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-shubhiupa19/blob/edb704a0af6e299eca0805b4823f9c4cf8a4242b/final-project/src/app/dashboard/page.js#L68-L95) --> this is just one area, I used it all throughout the app

[Using a Frontend Framework - Next](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-shubhiupa19/blob/master/final-project/src/app/dashboard/page.js) --> the entire app is written in Next.js, so I just linked the dashboard/landing page

Using a server-side library - jswonwebtoken
[Client Sending Token](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-shubhiupa19/blob/edb704a0af6e299eca0805b4823f9c4cf8a4242b/final-project/src/app/dashboard/page.js#L13-L17),
[Server Verifying Token](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-shubhiupa19/blob/edb704a0af6e299eca0805b4823f9c4cf8a4242b/final-project/src/app/api/friends/route.js#L9-L19)

 Using client-side libraries - date-fns, Chart.js
 [date-fns example usage](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-shubhiupa19/blob/edb704a0af6e299eca0805b4823f9c4cf8a4242b/final-project/src/app/dashboard/page.js#L90), 
 [Chart.js](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-shubhiupa19/blob/edb704a0af6e299eca0805b4823f9c4cf8a4242b/final-project/src/app/components/LineChart.js#L2-L69)

 Using a server-side library - bcrypt
 [bcrypt](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-shubhiupa19/blob/32434dcc21c895f9b7676feb0e407bf30dcde385/final-project/src/app/api/login/route.js#L17)
 



Optional project notes 
--- 


Attributions
---
"see source code comments"

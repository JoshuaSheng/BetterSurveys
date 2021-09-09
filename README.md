# BetterSurveys

You can try a demo at https://joshuasheng.com/bettersurveys-frontend?key=20020618
Note that it may take a few seconds to load.

Have you ever filled out a survey and thought "Wow, this is really boring." I know I have. Filling out form after form, whether for work, school, or for another reason
can get really old, fast, and technology is way too advanced for such an antiquated method of gathering information to persist for this long.

That's where BetterSurveys come in. We add fun, unique designs to surveys so that readers don't feel the same boredom and frustration when taking long, winding surveys.
Surveyors answering engaging surveys will become more engaged themselves, leading to better feedback and quicker response times. They'll thank you for it, too, not having to
fill out 30 of the same boring multiple choice questions on a static white background. Try BetterSurveys today!

# Technical Stuff

Better Surveys is currently built with the MERN stack, or MongoDB, Express.js, React.js and Node.js.
The scheme is this: Creating and customizing a survey is determined by a handful of props that are passed to the main React component. These props are stored in MongoDB Atlas,
and tracked by a hash. Users can then serve the survey by they sending people a specific link like the one used in the demo, with their own survey key as the url query parameter.

On the page, a script makes a call to the express.js backend, which will get the survey data from the MongoDB Atlas database and serve the data. Then, when the user is ready to 
submit, yet another call will be made to the express.js server to post data to put into the database. The information can then be accessed by entering in a password along with the
query key to get the data.

All 3 components (the react.js frontend, the express.js backend, and the mongodb database) are all hosted on the cloud. The page is hosted by github pages, while the backend is 
hosted by heroku and the database is hosted by MongoDB Atlasyh 

#Plans:

This project is currently in development and quite far from being finished. Currently, I only have a sample survey, though the survey data storage and retrieval works well.
Timeline:
- Create survey customization page, and hook it up to backend
- Create survey data retrieval page, along with custom dashboard for data visualization
- Remove having to save query key, and instead have OAuth handle the signin and our servers handle the query key storage.
- Add more survey designs and customization options
- Use css animations (or maybe even Three.js animations) to make the surveys more visually appealing


Wow - this project is tough!

I'm not honestly real thrilled with where we are at 11:05 the day it is due. I'd call this a pre-alpha build of my ideal submission.

What the app is supposed to do:

Page 1 - Todo App - using react/redux have make a basic to do app with the following functions:
1) add to do
2) complete to do
3) delete to do
4) filter view of to dos.

--- That all actually works!

There is a bug with the delete todos that needs to be squashed, if you ever delete a task that has a task beneath it, the key can get messed up and you can end up with delete not working. Thats a bug I'd like to fix.

Other than that for the actual to-do functions I'm OK. I'd like to:

Clear out the text so you dont have to delete it to add a new task. - that should be easy
-
Investigate allowing for editing todos
-
investigate allowing you to reorder your todos or assign priorities.
-
consider implementing a work in progress state. I think that would be fairly easy as well

-----------------------

Page 2 a contact form 

To be honest I got a little thrown by this one, I spent a fair bit of time figuring it out in redux and then realized it wasn't supposed to be in redux.
-
I believe the code I have works but I've run out of time to get it implemented before submission.

-----------------------

Nav Bar with React Router -- 

I have a dummy navbar, I need to go in and at minimum get the actual links working. I'll probably look at redux bootstrap to do a much better version of it.

-----------------

My code is messier than I would like.

I realized I spent way too much time practicing react in code pen and code sandbox and when it came time to set up locally I ran into a lot of issues. I watched a ton of videos and read many references but a lot of them used depreciated items in their code which made this something of an adventure.

My project organization isnt nearly as clean as I want it to be and I think in general a lot of this code could be rewritten to be of higher quality.


See below for how to get everything running. Fair warning there were some issues with react terms flagging as unused and preventing the npm start - this seems to be a react/redux issue and thankfully solutions were only a google away.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

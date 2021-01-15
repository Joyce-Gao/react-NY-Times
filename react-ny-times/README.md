# NYTimes

This repository contains codebase for "NY Times Most Popular Articles".

## Functionalities implemented in this project

- user registration and login has been implemented after integration
  with local server using this repo -> https://github.com/techiediaries/fake-api-jwt-jsonserver
- The token fetched from login call, is being passed through all NY Times requests in Authorization JWT Bearer token header.
- A middleware has been implemented to refresh the token after 15 minutes or whenever it expires.
- User can either select to see categorized top news(Home, World or Science) or search for articles.
- On click of "Home" and "World" and "Science" tab , top news of each category is automatically loaded.
- Search has been implemented, we can input search text in search input, press Enter key or click 'Search' button to search the news corresponding to entered text.
- Last 5 searches are shown below the search bar and we can click on any of the search history item to search it again.
- Pagination has been implemented in search results page to fetch more results while click pagination button.
- Spinner has also been implemented whenever we are making a network call.
- Best coding practices has been used and proper modules are created for better readability.

## Project Development

- Start the service with npm run start-auth ro yarn start-auth in the fake-api-jwt-jsonserver file(Can simulate login registration and refresh token)
- Home page call /svc/topstories/v2/home.json
- world call /svc/topstories/v2/world.json
- science call /svc/topstories/v2/science.json
- search call /svc/search/v2/articlesearch.json?q=inputValue
- The search page will display the 5 most recently searched records and the search results
- in article, the comments number is empty.The comment data returned by the article comment is empty, so the simulated data (constants/NewsComments.js) is used and the number of comments is displayed on the page.
- search input is required.
- signIn and Register page can toggle (Through Create Account and please sign in), After logging in or registering, access_token will be saved in localstrage,
  and Update the token of localstrage by modifying the token in the state

setupProxy.js

- /svc/\*\* to https://api.nytimes.com
- /atuh/\*\* to http://localhost:8000/

NY Times API:
https://developer.nytimes.com/apis

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

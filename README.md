# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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


###################################
## Create routes using React Browser router
1. **Route 1: "/"** - list out all the articles.
2. **Route 2: "/articleDetail/:id"** - display the article detail, where id represents the id of the article to which we want to view the detail.

## Created Context API for state management
1. API Response is stored using React Context API to maintain the same state throughout the application.
2. It will reduce the performance delay.
3. Here we have used 2 APIs:
   - a. [List Articles API](https://ps-dev-1-partnergateway.patientsky.dev/assignment/articles/) - to list out all articles. This API is called only once as we have only reading of content from the API. There is no write operation.
   - b. [Article Detail API](https://ps-dev-1-partnergateway.patientsky.dev/assignment/articles/1) - to get the details of the article whose id is 1. This API is called when the user clicks on the view more button in a particular article card.

4. Displaying proper error messages to the user when a particular API fails to return data, due to network or backend issues. By doing this, the user will get to know what is happening in the backend. This is handled by properly managing the errors in async function calls.

## Implemented Component Lifecycle Methods
1. Utilized `useEffect` hook to fetch data from APIs when the component mounts and performs necessary cleanup when the component unmounts.
2. Leveraged `useState` hook to manage component state and update the UI dynamically based on user interactions or API responses.

### Enhanced User Experience with CSS Transitions
1. Implemented CSS transitions to create smooth animations when navigating between different routes or interacting with UI elements.
2. Used CSS transitions to improve the loading experience by adding loading spinners or fade-in effects for content.

## Utilized React Hooks for State and Side Effects
1. Used custom React hooks to encapsulate and reuse logic across multiple components, promoting code reusability and maintainability.
2. Leveraged `context API`  to manage  state logic .

### Issue Faced
1. Sometimes API returns errors - it's an API-related issue. UI-related changes have been done to inform the user about what's happening in the background.

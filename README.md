# Articles App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Technology used
ReactJS, TypeScript, React Bootstrap, CSS

# Approach Used
- Store the Articles in data.json file. Fetch the data from JSON file using fetch API in useEffect hook.
- Make use of useState hook to store the data like articles, loading and error.
- When API call is made, display the Loader until the response is Successful or errored out.
- In case of failure during the fetch call, display Error Page.
- Wrap every Article with ErrorBoundary component created using Class based approach, on failure display error message which is rendered by ErrorBoundary Component and log error and component stack details in console. This is done so that entire page does not crash, instead only the article with issues will show error message.
- On success, render the articles in a Card component of react bootstrap.

Success Scenario
![image](https://github.com/candycandy9/articleApp/assets/24561903/8431ccab-d819-4cf2-acdb-c2e702662196)

Error in rendering Article
![image](https://github.com/candycandy9/articleApp/assets/24561903/e4df0f5c-3db7-421b-bb36-5569eebd3307)

Failure in fetching data
![image](https://github.com/candycandy9/articleApp/assets/24561903/762ed0e4-aca1-438d-91b3-8c20f9a2692c)

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



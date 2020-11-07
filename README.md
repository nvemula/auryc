# Auryc

Please clone this repository and run `npm install` to get started

## Project Structure

The fields required for the feedback form are organized in separate files for easy maintenance and for using them in other pages.

Constants are put in a separate file for easy localization.

Redux is not necessary here because the data is not modified by other components and the data is local to this component i.e everything can be managed by the component state.

Field Labels and strings can be moved to separate files for easy localization and accessability.

Test cases can be created using [https://jestjs.io/](jest) to further improve this project.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


#### Prerequisites:
1)	Node js install using node installer
2)	Install npm : npm install -g npm
3)	Check versions
           node -v
           npm -v
4)	Install React
npx create-react-app my-app
       5)check version
              npm view react version
        6) cd my-app
npm start

Course Link : https://www.linkedin.com/learning/hands-on-introduction-react


### This is a jsx demo app ###

# Points to be noted

1)JSX stands for javascrpt syntax extension. JSX = Html in javascript
2)When you want to return html in function if it is single html statement then bracets not required
eg: return <h1> exaample </h1>
3)when you want to return multiple html in return statement brackets are required
return(
    <h1> exMPLE1 </h1>
    <h2> example2 </h2>
)
4) no need of semicolon for jsx
5)when want to give class attrbute to html you will write it as className = "container" (diff from normal html class = "")
eg: <p className = "container">example </p>
5) In jsx Css style attribute is written as style = {{color:blue , width: 150px}} intead of separating into semicolon by normal html
6)events in jsx will be camelCase eg: onClick = {#----js code-----}
eg: onClick = { () => alert('Hi')}
7)in Jsx self closing tags is not optional otherwise it will throw error 
eg: img - <img src = "" > will return error
jsx - <img src = "" />
8)In js template literals is given in jsx as
{variable -name}
in angular that is similar to string interpolation {{variable-name}}

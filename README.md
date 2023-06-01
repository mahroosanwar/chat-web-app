# Real-Time Chat Application

This is a real-time chat application built using React and Socket.IO. It allows users to engage in instant conversations within the browser sidebar. The application supports features such as real-time messaging, theming adaptation, and code highlighting using Prism.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Real-Time Messaging](#real-time-messaging)
- [Theming Adaptation](#theming-adaptation)
- [Code Highlighting](#code-highlighting)

## Installation

1. Clone the repository: `git clone https://github.com/mahroosanwar/chat-web-app.git`
2. Navigate to the project directory: `cd chat-app`
3. Install dependencies: `npm install`

## Real-Time Messaging

The real-time messaging functionality is implemented using Socket.IO. Socket.IO is a library that enables real-time, bidirectional communication between the server and clients. In this application, Socket.IO facilitates instant message transfer between users within the chat sidebar.

The logic for real-time messaging involves the following steps:

1. Establishing a WebSocket connection between the client and the server using Socket.IO.
2. Emitting and handling events on the server and client to send and receive chat messages.
3. Updating the UI in real-time by adding new messages to the chat interface whenever a new message is received.

## Theming Adaptation

The theming adaptation in this application is achieved using Theme UI. Theme UI is a library that provides a theme-aware design system for building React applications. It allows for easy theming and styling customization.

To implement theming adaptation, the following steps were taken:

1. Defining a theme object that includes color palettes, font styles, and other theme-related properties.
2. Setting up React state management to hold the selected theme and update it dynamically.
3. Utilizing CSS variables and the `ThemeProvider` component from Theme UI to apply the selected theme styles to the chat sidebar and its components.
4. Adding a theme selector in the sidebar settings or UI control to allow users to switch between light and dark themes.

## Code Highlighting

Code highlighting in this application is implemented using Prism.js. Prism.js is a lightweight, extensible syntax highlighter that supports various programming languages.

The approach for code highlighting involves the following steps:

1. Importing the Prism.js library and its language modules for the desired programming languages.
2. Adding a code highlighting function that takes a message content as input and checks if it contains code snippets.
3. Using Prism.js to apply syntax highlighting to code snippets by specifying the language of the code.
4. Rendering the highlighted code within the chat interface.

Please refer to the source code for more detailed implementation and configuration specific to real-time messaging, theming adaptation, and code highlighting.

---

This readme provides an overview of the real-time chat application, its features, and the approaches used to implement them. For more detailed information and code examples, please refer to the respective source code files in the project.

If you have any questions or encounter any issues, feel free to contact the project owner or raise an issue in the repository.

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

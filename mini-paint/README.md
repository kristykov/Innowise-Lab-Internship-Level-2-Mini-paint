# Welcome to ImageDraw!

ImageDraw is a React application that allows you to upload images, store them, draw on them, or create custom drawings and store them as well.

## Features

- Upload Images: You can upload any image from your device and store it in the app.
- Draw on Images: You can use the drawing tools provided by the app to draw on the images you've uploaded.
- Create Custom Drawings: You can create new drawings from scratch using the app's drawing tools.
- Save Drawings: You can save any drawings you create or modify to your device.

## Deploy

[https://clever-todo-list-tassker.netlify.app](https://mini-paint-image-draw.netlify.app) //correct

### Task

[Link to the task](https://drive.google.com/file/d/1x2CPoFf5GvPvZHU2ztPu5U81Ek9Xl5Xn/view?usp=share_link)

## Technologies used in the project

![ReactJS](https://img.shields.io/badge/-ReactJS-0D1117?style=for-the-badge&logo=React)
![Redux](https://img.shields.io/badge/-Redux-0D1117?style=for-the-badge&logo=Redux)
![Webpack](https://img.shields.io/badge/-Webpack-0D1117?style=for-the-badge&logo=Webpack)
![Babel](https://img.shields.io/badge/-Babel-0D1117?style=for-the-badge&logo=Babel)
![Sass](https://img.shields.io/badge/-Sass-0D1117?style=for-the-badge&logo=Sass)
![Eslint](https://img.shields.io/badge/-Eslint-0D1117?style=for-the-badge&logo=Eslint)

## Getting Started

Clone the repository to your local machine using `git clone https://github.com/kristykov/Innowise-Lab-Internship-Level-2-Mini-paint.git`.

Go to mini-paint folder `cd mini-paint`

Install the necessary dependencies using `npm install`

Run the app using `npm start`

Once the app is running open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

After that you can create an account or log in with an existing one.

For testing use the credentials below:

```
Test user: test@mail.com
User password: 111111
```

## Database snapshot

ImageDraw stores all uploaded images in Firebase Storage and all the information about the file is stored in Firebase Cloud as well. The app uses thunks to handle the file upload process.

### Data Structure

he uploadFile thunk is responsible for handling the file upload process. It receives the selected file and dispatches the createNewFile thunk once the file has been uploaded. The createNewFile thunk is responsible for creating a new file in Firebase Cloud, including the file's name, URL, and date of creation. The file's information is stored in the `users/{userId}/pictures` collection, and the actual image is stored in the `users/{userId}/{fileName}` path in Firebase Storage.

## Folder Structure

The Clever to-do tassker's codebase is organized into the following main folders:

- `src`: This is the main directory for the source code of your React application. It contains all the files and subfolders that make up the application.
- `src/assets`: This folder contains all the static assets for the application, such as svg files.
- `src/components`: his folder contains all the reusable components used throughout the application. These components can be used across multiple pages and screens in the application.
- `src/helpers`: This folder contains helper functions that are used throughout the application. These can include functions for formatting data, validation credentials, and other common functionality.
- `src/hooks`: This folder contains custom hooks that can be used throughout the application.
- `src/intefaces`: This folder contains TypeScript interfaces used throughout the application. These interfaces define the shape of the data used in the application.
- `src/navigation`: This folder contains the navigation configuration and components for the application. It includes code for routing, navigation between pages, and any navigation-related functionality.
- `src/pages`: This folder contains the components for the different pages of the application. Each page is typically represented by a single component in this folder.
- `src/store`: This folder contains the configuration and code for the application's state management using Redux. It also includes thunk functions for handling API calls.
- `src/App.jsx`: This is the root component of the application. It is responsible for rendering the different pages and components of the application.
- `src/firebase-config.js`: This file contains the configuration for connecting to Firebase. It exports the required credentials to use Firebase services.
- `src/index.css`: This file contains the global styles for the application. It is used to define the layout, colors, and other visual elements.
- `src/index.html`: This is the main HTML file that is used to load the application. It includes the necessary scripts and styles for the application to run.
- `src/index.jsx`: This is the entry point for the application. It is responsible for rendering the root component and starting the application. It also includes the configuration for Redux.

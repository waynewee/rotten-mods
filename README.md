# Getting Started

This is a step-by-step guide for setting up a development environment on your local machine. Using this environment, you can contribute to the project by working on features, enhancements, bug fixes, etc.

To get started, you should have installed the latest version Visual Studio Code (VS Code) on your local machine. Then please follow the steps.

## Get a Copy

Clone the repo into your local machine.
```git clone git@github.com:CS3219-SE-Principles-and-Patterns/cs3219-ay2021-s1-project-2020-s1-g01.git```

## Environment Setup

Please ensure that you have installed these software with its at least these versions:

* Node 10.15
* NPM 6.14.8
* MongoDB 4.4 Community Edition

### Backend

  1. Navigate to the `api` folder.
  2. Install the dependencies using `npm install`.
  3. Build the backend codebase using `npm run watch`.
  4. Populate the database using `npm run populate`.
  5. Start running the backend server using `npm start`.

### Frontend

  1. Navigate to the `frontend` folder.
  2. Install the dependencies using `npm install`.
  3. Start running the frontend server using `npm run dev`.
  4. Head over to `localhost:3000` on your browsert and wait for the server to initialize.

_Note: This project works best in Google Chrome Browser._

## Important things to Note

### `.next` folder in frontend

We have decided to take `.next` out of the git ignore, and commit the frontend build folder to the repository. 
This is for the sole purpose of deployment only, as the free tier version of our AWS VM deployment was unable to build
the frontend.



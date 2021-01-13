
# WizpandaUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Functionality

This application provides the basic functionality of Login as a Student, SignUp as a Student or Create Student Account and to see all the student in the backend database.
This application calls the backend server which is running at http://localhost:8080 (Built on SpringBoot) for any operation.
To run the application on your system you need to install node and angular cli on your local system.
Once the Angular Cli is install go to the root directory and run ## npm install to install all the project dependencies on your system.
After installing all the dependencies to start the server run npm start or ng serve, it will compile your code and application will be up on http://localhost:4200.

Open the browser and navigate to http://localhost:4200, and then click on the Home button to navigate to Home page.
You will see 2 tiles there, One is for Login and Second one is for Create Account (SignUp).

## Create Account: 
Click on the Create Account tile to create an account, it will navigate you to Create Account Template form.
Provide the required details and click submit to create an account. A notification will appear saying account created successfully.

## Login:
Click on the Home button from navbar to navigate to Home Page. Click on the Login Tile for Login, provide the username and password and click login.

## Show Students:
Once you logged in a Show Students button will appear. Click on the button to fetch all the students details.


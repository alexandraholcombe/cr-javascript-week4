# Seattle Symphony Club Management Website

#### _Club management website built with AngularCLI_

#### By _**Alexandra Holcombe**_

***

## For Instructor

To view project as existed at 5:00 on Friday, please clone branch pre-due-date.
To view project as completed, please clone master branch.

***

## Planning
### **1.  Configuration/Dependencies**  
  * angular-cli, used for project generation and commands
  * bower
  * bootstrap
  * typescript
  * node-sass
  * angularfire2

### **2.  Specs**  

  **The user can see a list of all club members.**  

  **The user can click on a club member to see the member's profile on a new page.**  

  **The user can visit an "about" page that describes the club.**

  **The user can filter club members based on their role in the club.**  

  **The administrator can add new members to the club.**

  **The administrator can edit member profiles.**

  **The administrator can delete member profiles.**


### **3.  Integration**  

> **Components**  
  * app-home
  * app-about
  * app-musicians
  * musician-list
  * musician-tile
  * app-admin
  * new-musician
  * edit-musician
  * remove-musician

> **Views**
  * app-home
  * app-about
  * app-musicians
  * app-admin

> **Models**  
  * musician

> **Pipes**
  * section pipe

### **4.  UX/UI**  
  * Uses SCSS & Bootstrap

### **5.  Polish**  
  * See if refactoring is needed
  * Delete unused code
  * Revisit README
  * Clone project from github to ensure works correctly!!

***

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

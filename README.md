# OsurcWebsite

## How to update website

First, make changes in src. Then, use the command "ng build --output-path docs --base-href /" to rebuild what Github Pages reads. You also must copy index.html and duplicate it with the name 404.html. This can be done with the command "cp ./docs/index.html ./docs/404.html". Finally, the build command will auto-delete a cname file we need, so type "git restore ./docs/CNAME".

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.19 with Node v10.13.X.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

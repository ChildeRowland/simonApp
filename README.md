# Simon Exercise

This is a workshop to recreate the game 'simon' with AngularJS and bootstrap.

If you'd like to see the deployed version, visit:

https://cm-simon-exercise.herokuapp.com

If you'd like to checkout to code, in the command line:

	$ git clone https://github.com/ChildeRowland/simonApp
	$ cd simonApp
	$ bower install
	$ npm install

You'll need to have MongoDB and Grunt installed locally:

- https://www.mongodb.org/ 
- http://gruntjs.com/

Then, in the command line:

	$ mongod

In a seperate terminal in the simonApp directory:

	$ grunt serve

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.2.0.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.

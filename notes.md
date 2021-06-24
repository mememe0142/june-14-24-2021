### Basics

* NodeJS is a C++ application
* https://nodejs.org
* v8 is the JS engine used by Chrome browser (https://github.com/v8/v8)
* __V8 can run standalone, or can be embedded into any C++ application__
* Node JS uses several C++ libraries along with v8.
* It gives you extensions to work with file systems, databases, http etc

### Javascript

* Functions are first-class citizens
* You can define a function with any number of arguments, but invoke it with any number of arguments
* You can define a function with the same name any number of times, the latest definition overrides the previous ones
* All the function definitions are run first; then the execution(intepretation) starts from the 1st line

### Node JS ecosystem

* Maven in Java; 
* npm __Node Package manager__ comes with NodeJS

* pom.xml in Maven
* __package.json__ in Node

* __npm init__ is the command to initialize a NodeJS project
* __sudo npm i --save express__

### Middleware

* Mechanism to plugin external functionality
* Similar to servlet filters or interceptors
* Plugin in the functionality using __app.use(...)__ method
* You can plugin a middleware to a specific route as well __app.get('/url', [middleware], (req, res) =>{})__
* Custom middlewares can be built 
* A simple function that accepts request, response and next. __next()__ is the call to the next library in the middleware chain

### npm

* Create an account in https://npmjs.com
* Create a NodeJS application (or package)
* __sudo npm login__ to login to your account
* __sudo npm publish__
* If you want to remove, __sudo npm unpublish__
* Semver: __major.minor.patchrelease__


### NodeJS with TypeScript

* sudo npm i -g typescript
* sudo npm i -g @types/node
* Write code in __.ts__ file
* Run __tsc__ command which compiles ts files to js files
* sudo npm init
* sudo npm i --save express
* sudo npm i --save-dev @types/express
* tsc --init




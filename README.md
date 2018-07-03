# 🔥🐶firedog by tinydog

_firedog_ intends to be an API generation and management tool similar to Parse and Firebase. Size and scale are open to discussion at the moment so now's the time to chime up.  :-)

**Ideas**
* Move from express to restify.
* Move from express to straight node.
* Make each endpoint act as a microservice that can be individually scaled as needed.
* Move to straight ES6 instead of TypeScript.
* Dashboard for management.
* Starter templates (CMS, ecommerce, Uber-like, etc).
* Ability to extend via plugins/adapters.
* Sockets.
* Docker & Kubernetes support.
* Multi language SDK's.
* Third-party integrations.

## Setup

**Dependencies**
* Docker
* Node v8.9.4

Once the dependencies are installed, open the project in a terminal and enter ```npm install```.

## Run Project

From your terminal, enter ```npm run start-docker```.

Go to [http://localhost:3000](http://localhost:3000) in your browser of choice.

## Connecting to mongo running in Docker

Enter the following command in your terminal: ```docker exec -it mongo mongo```.

## Current State

The project is really a foundation right now and will change over time.

Routes are registered by adding to an existing ```./routes/*.router.ts``` file in the corresponding ```register()``` method. If you need a new base route create a new file in the ```./src/routes``` directory ending in ```.router.ts``` and use an existing router as an example for how to implement it. Router files are auto loaded on application start.

**Sample Routes**
* [http://localhost:3000](http://localhost:3000) - Returns static payload showing the app is running.
* [http://localhost:3000/endpoints](http://localhost:3000/endpoints) - Returns a static list of endpoints (sorted by name).
* [http://localhost:3000/users](http://localhost:3000/users) - Returns a static list of users.
* [http://localhost:3000/users/contains/:name](http://localhost:3000/users/contains/joshua) - Returns boolean if name exists in static array.

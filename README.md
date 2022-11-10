# Word Master Game


## User Stories

The user can:

- View a list of all Disney characters;
- View a show page for each character where you can see more details of that character;
- Add a like to a character;
- Add characters you favorite list;
- Remove characters from your favorite list;
- Submit a form to add new characters to the database;
- Delete a character from the database;
- Sort characters alphabetically by name;
- Sort characters in descending order by the number of likes;
- Toggle functionality to show only villain characters;
- Search a charachter by name;

## Set Up

To run this project, first clone or fork repository:

```
git clone https://github.com/QSissler/word-master
```

Install requirements

```
bundle install
```

cd into client

```
cd client
```

Run server 

```
bundle exec rake server
```

Open the app in browser

```
npm start
```


## Technologies

- Javascript
- React
- React Routher DOM
- Ruby
- Sinatra
- Custom CSS

## Demo

### Home page
![Disney-Home](https://user-images.githubusercontent.com/105557320/200914032-af20c794-053a-4996-9099-e6f5b382bc4d.png)

### All characters page

![Disney-All](https://user-images.githubusercontent.com/105557320/200914071-ba411672-d890-4d35-8e76-a85a04d2ecfd.png)

### Character Details page
![Disney-Details](https://user-images.githubusercontent.com/105557320/200914110-578b1101-8d13-4075-af77-4a1be5ff377a.png)

### Favorite characters page 
![Disney-Favorites (1)](https://user-images.githubusercontent.com/105557320/200914157-e46e1503-7bd0-46e8-ad4a-c29456b20129.png)

### Submit a new character form page
![Disney-Form](https://user-images.githubusercontent.com/105557320/200914204-3993750b-9ce8-43f3-ba83-bf59683fc412.png)


## Team
**Kristina Voroteliak**

- [Profile](https://github.com/chrispavla)
- [LinkedIn](https://www.linkedin.com/in/kristina-voroteliak/)
- [Blog](https://dev.to/chrispavla)

**Quinn Sissler**

- [Profile](https://github.com/QSissler)
- [LinkedIn](https://www.linkedin.com/in/quinn-sissler/)
- [Blog](https://dev.to/qsissler)

## Learning Goals

- Build a web basic API with Sinatra and Active Record to support a React
  frontend

## Introduction

Congrats on getting through all the material for Phase 3! Now's the time to put
it all together and build something from scratch to reinforce what you know and
expand your horizons.

The focus of this project is **building a Sinatra API backend** that uses
**Active Record** to access and persist data in a database, which will be used
by a separate **React frontend** that interacts with the database via the API.

## Requirements

For this project, you must:

- Use Active Record to interact with a database.
- Have at least two models with a one-to-many relationship.
- At a minimum, set up the following API routes in Sinatra:
  - create and read actions for both models
  - full CRUD capability for one of the models
- Build a separate React frontend application that interacts with the API to
  perform CRUD actions.
- Use good OO design patterns. You should have separate classes for each of your
  models, and create instance and class methods as necessary.

For example, build a todo list application with a React frontend interface and a
Sinatra backend API, where a user can:

- **Create** a new todo
- **Read** a list of all todos
- **Update** an individual todo
- **Delete** a todo

A `Todo` can be tagged with a `Category`, so that each todo _belongs to_ a
category and each category _has many_ todos.

## Getting Started

### Backend Setup

This repository has all the starter code needed to get a Sinatra backend up and
running. [**Fork and clone**][fork link] this repository to get started. Then, run
`bundle install` to install the gems.

**Important**: Be sure you fork a copy of the repo into your GitHub account
before cloning it. You can do this by using the link above or by clicking the
"Octocat" button at the top of this page, then clicking "Fork" in the upper
right corner of the repo page.

[fork link]: https://github.com/learn-co-curriculum/phase-3-sinatra-react-project/fork

The `app/controllers/application_controller.rb` file has an example GET route
handler. Replace this route with routes for your project.

You can start your server with:

```console
$ bundle exec rake server
```

This will run your server on port
[http://localhost:9292](http://localhost:9292).

### Frontend Setup

Your backend and your frontend should be in **two different repositories**.

Create a new repository in a **separate folder** with a React app for your
frontend. To do this, `cd` out of the backend project directory, and use
[create-react-app][] to generate the necessary code for your React frontend:

```console
$ npx create-react-app my-app-frontend
```

After creating the project locally, you should also
[create a repository on GitHub][create repo] to host your repo and help
collaborate, if you're working with a partner.

### Fetch Example

Your React app should make fetch requests to your Sinatra backend! Here's an
example:

```js
fetch("http://localhost:9292/test")
  .then((r) => r.json())
  .then((data) => console.log(data));
```

## Project Tips

- This project is intended to focus more on the backend than the frontend, so
  try and keep the React side of things relatively simple. Focus on working with
  Active Record and performing CRUD actions. What are some interesting queries you can write? What kinds of questions can you ask of your data?
- Once you have a project idea, come up with a domain model and decide what
  relationships exist between the models in your application. Use a tool like
  [dbdiagram.io][] to help visualize your models.
- Decide on your API endpoints. What data should they return? What kind of CRUD
  action should they perform? What data do they need from the client?
- Use [Postman][postman download] to test your endpoints.
- Use `binding.pry` to debug your requests on the server. It's very helpful to use a
  `binding.pry` in your controller within a route to see what `params` are being
  sent.
- Use the [Network Tab in the Dev Tools][network tab] in the frontend to debug
  your requests.

## Resources

- [create-react-app][]
- [dbdiagram.io][]
- [Postman][postman download]

[create-react-app]: https://create-react-app.dev/docs/getting-started
[create repo]: https://docs.github.com/en/get-started/quickstart/create-a-repo
[dbdiagram.io]: https://dbdiagram.io/
[postman download]: https://www.postman.com/downloads/
[network tab]: https://developer.chrome.com/docs/devtools/network/

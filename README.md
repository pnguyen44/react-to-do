# on-track

A full stack app that allow users to create a list of of to-do items.  This app was created using node.js, Express, React, JavaScript, HTML, CSS, and Material-UI.

<img width="1440" alt="on-track app" src="https://i.imgur.com/1XBgsMw.png">

## Deployed apps and repositories
| Resource   | URL            |
|------------|----------------|
| client side, deployed    | https://pnguyen44.github.io/on-track/             |
| client app repo   | https://github.com/pnguyen44/on-track            |
| server api, deployed | https://on-track-api.herokuapp.com/            |
| server api repo  | https://github.com/pnguyen44/on-track-api     |


## User Stories
- Users can add items to the to-do list
- Users can mark completed items
- Users can remove items from the list

## Technologies Used
- Front End
  - React JS
  - React Router
  - Javascript
  - Material UI
  - HTML
  - CSS
  - Node Package Manager

- Back End
  - Node.js
  - Express
  - MongoDB
  - Heroku

  ## API Endpoints
  | Verb   | URI Pattern            | Controller#Action |
  |--------|------------------------|-------------------|
  | GET    | `/items`               | `items#index`     |
  | POST   | `/items`               | `items#create`    |
  | GET    | `/items/:id`           | `items#show`      |
  | PATCH  | `/items/:id`           | `items#update`    |
  | DELETE | `/items/:id`           | `items#destroy`   |

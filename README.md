# Login, Edit Profile Assessment Project

## A fully functional project written in React showing Login page and edit profile page.

This project was built with ReactJS showing Client can login and edit profile with the API from Cybersoft's API(Academy where i was studied)
Every part of this project is sample code which show how to build this project:

- Create a sketch of the authentication flow of the login function. the file in the respository with a name: authentication-flow.pdf
- Create a login and edit profile interface with SCSS and animation from animate.style
- API get from Cybersoft Bootcamp(where i was studied):
  - Cybersoft's swagger: https://movienew.cybersoft.edu.vn/swagger/index.html
  - Cybersoft token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMiIsIkhldEhhblN0cmluZyI6IjE3LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MTY4OTYwMDAwMCIsIm5iZiI6MTY1MzkzMDAwMCwiZXhwIjoxNjgxODM3MjAwfQ.Yk1H5QCjda1n9Cd5-k2yU_DLnRqRvaB7FIkn1hIuPE0
  - Account i used for login:
    account: 250196
    password: 123456
- After login, you have to fill all inputs then submit update the profile, and the updated profile will showing all values you changed in every inputs.

## Image of the sketch of the authentication flow of the login function

<img src={require('./authentication-flow.png')} width="240" height="180" border="10">

## Libraries

- API: axios
- Router: react-router-dom
- Hooks: react-hook-form
- State Management: @reduxjs/toolkit, react-redux
- animations: react-icons
- UI: SCSS

## Folder structure

- modules:
  - Group of 1 function components or 1 page
  - these components usually have some logical like: call API, redux,...
- routers:
  - Use for define actions of router.
- Services:
  - Use for contain setup of call API and other function use API
- store.js:
  - setup redux store

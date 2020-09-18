# Zerg Rush Game Reviews

[AbsurdlyEloquent](https://github.com/AbsurdlyEloquent) | [iandemed](https://github.com/iandemed) | [LexLeach](https://github.com/LexLeach) | [maurcord](https://github.com/maurcord)

## Overview

We created and deployed a React App, that accesses our [Game Review Api](https://github.com/iandemed/zr-game-informer-api) to create, read, update and delete reviews and games.

You can find the deployed site on Github Pages [here](https://absurdlyeloquent.github.io/game-review-api)

- [Game Review Api](#zerg-rush-game-reviews)
  - [Technologies Used](#technologies-used)


## Technologies Used

1. JavaScript - The primary language for React and Web Development
2. Github Pages - A free webpage hosting service by Github

## Dependencies

1. `npm` - To install and manage NodeJS packages
2. `create-react-app` - To create react apps with no build configuration
3. `React` - A JavaScript library to build user interfaces
4. `axios` - A promise based HTTP client for NodeJS

Installation instructions for npm and Node.js can be found [here](https://www.npmjs.com/get-npm).

Once `npm` is installed successfully on your machine, you can install the dependencies by navigating to your local directory for this repo and running `npm install`.

All of the required dependencies can be found in `package.json` file.

Running `npm start` will start a local development server in your browser

## Site Layout

The games are displayed by cards, each card containing one game. The card can expand to display reviews of each game.

To submit a review, simply click the `Write a Review` button on a card, choose you ratings and hit `submit`, and your review will be sent to the database.

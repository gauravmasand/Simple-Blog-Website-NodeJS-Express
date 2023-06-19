# Simple Blog Website

This is a simple blog website built using Node.js, Express, Express Handlebars, and Bootstrap. The website includes features such as blog posts, a contact section, an about section, and a search function. The main aim of this project is to create a functional blog website.

## Technologies Used

- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express: A fast and minimalist web application framework for Node.js.
- Express Handlebars: A view engine for Express that allows for the dynamic rendering of HTML templates.
- Bootstrap: A popular CSS framework for building responsive and mobile-first websites.

## Project Structure

├── static/ (static files: images)
├── views/ (handlebars templates)
├── routes/ (Express routes)
├── data/ (static JSON data)
├── index.js (main application file)
├── package.json (project dependencies)
└── package-lock.json

## Getting Started

1. Clone the repository:

git clone https://github.com/gauravmasand/simple-blog-website-node-express.git

2. Install the dependencies:

cd <project-folder>
npm install

3. Start the server:

npm start

4. Open your browser and visit `http://localhost:3000` to see the website.

## Functionality

- Blog Post: Users can create and view blog posts.
- Contact: Users can submit a contact form to send messages.
- About: Provides information about the website and its purpose.
- Search: Users can search for specific blog posts using keywords.

## Data

The website currently uses static JSON data located in the `data/` folder. However, it can be easily modified to retrieve data from another database by updating the models and controllers accordingly.

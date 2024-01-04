# Blogs API

The blogs API allows users to create, read, update, and delete blog posts. Additionally, users can also add comments to existing posts.

## Table of Contents

- [Installation](#installation)
- [Endpoints](#endpoints)
- [Contributing](#contributing)

## Installation

1 - Clone this repository to your local machine.
2 - Ensure that Node.js is installed on your machine.
3 - Run the command npm install to install project dependencies.
4 - Configure the necessary environment variables, such as the server port and database credentials.
5 - Run the command npm start to start the server.

## Endpoints

The API has the following main endpoints:

- GET /posts: Returns all blog posts.
- GET /posts/:id: Returns a specific post based on the provided ID.
- POST /posts: Creates a new blog post.
- PUT /posts/:id: Updates an existing post based on the provided ID.
- DELETE /posts/:id: Deletes an existing post based on the provided ID.
- POST /posts/:id/comments: Adds a comment to an existing post based on the provided ID.

## Contributing

If you want to contribute to this project, follow the steps below:

- Fork this repository.
- Create a branch with your feature or bug fix: git checkout -b my-feature.
- Make the desired changes and commit them: git commit -m 'My new feature'.
- Push your changes to the remote repository: git push origin my-feature.
- Open a pull request in the original repository.

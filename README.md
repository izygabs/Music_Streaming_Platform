Question: Build an API for a music streaming platform using Node.js, Express, Mongoose, and MongoDB. The platform consists of two main entities: Artists and Albums. Implement the following endpoints:

GET /api/artists: Retrieves all artists from the MongoDB database and returns a JSON response with the artist details, including their associated albums.

GET /api/artists/:id: Retrieves a specific artist from the database based on the provided artist ID and returns a JSON response with the artist details, including their associated albums.

POST /api/artists: Accepts a JSON payload containing 'name', 'genre', and 'imageURL' fields. Creates a new artist in the database with the provided details and returns a JSON response with the newly created artist.

PUT /api/artists/:id: Accepts an artist ID as a parameter and a JSON payload containing 'name', 'genre', and/or 'imageURL' fields. Updates the artist in the database that matches the provided ID with the new details and returns a JSON response with the updated artist.

DELETE /api/artists/:id: Deletes an artist from the database based on the provided artist ID and returns a JSON response indicating success.

GET /api/albums: Retrieves all albums from the database and returns a JSON response with the album details, including the associated artist.

GET /api/albums/:id: Retrieves a specific album from the database based on the provided album ID and returns a JSON response with the album details, including the associated artist.

POST /api/albums: Accepts a payload containing 'title', 'releaseYear', 'genre', 'artistId' and an album cover fields. Creates a new album in the database with the provided details and associates it with the specified artist. Returns a JSON response with the newly created album. You should also send an email notification to the artist upon successful album creation.

PUT /api/albums/:id: Accepts an album ID as a parameter and a JSON payload containing 'title', 'releaseYear', 'genre', and/or 'artistId' fields. Updates the album in the database that matches the provided ID with the new details and associates it with the specified artist. Returns a JSON response with the updated album.

DELETE /api/albums/:id: Deletes an album from the database based on the provided album ID and returns a JSON response indicating success.

Ensure that you define appropriate schemas and models for artists and albums, establish a relationship between them using Mongoose, handle any necessary error scenarios, and incorporate the following functionalities: CORS, cookie-parser, file upload, helmet, HTTP status codes, nodemailer, xss-clean, and validator.

Additionally, write comprehensive test cases to verify the functionality of your API. Include unit tests that cover different scenarios, such as successful requests, error handling, and proper data retrieval and association between artists and albums. Test the functionalities of CORS, cookie-parser, file upload, helmet, nodemailer, and validation using appropriate test cases.

Your task is to implement the API with the required endpoints, incorporate the mentioned functionalities, write thorough test cases to ensure proper API behavior and adherence to the specified requirements, and demonstrate your understanding of database integration, error handling, relationship management, and the additional functionalities you're required to incorporate.

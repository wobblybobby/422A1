Student: Bobby Li
StudentID : 045895042

WEB422NAA Assignment 1:

I have two schemas, one for customer endpoints and one for customer endpoints. I also have a basic GET route for the home URL that will inform the user to add /customer or /product to access the implemented endpoints.

For both customer and product, I have a schema with its own services.js file with its functions, and its own controller.js.

For customers, I have two endpoints:
1) GET request at /customer?id=z to query a single customer document with the id replacing z
2) POST request at /customer/register to create a new document according to the customer schema

For product, I have 8 endpoints:
1) POST request at /product/add to create a new document according to the product schema
2) GET request at /product/category to query all the unique category values in our collections
3) GET request at /product?id=z to query a single product document with the id replacing z
4) GET request at /product?bestseller=yes to query all product documents with the bestseller : true value
5) GET request at /product?category=zzzz to query all product documents with the category replacing zzzz
6) GET request at /product to query all product documents
7) PUT request at /product/:id to update a specific product document
8) DELETE request at product/:id to delete a specific product document

All of my endpoints have validation, whether it's through the services module or through the schema options itself. Furthermore, my POST method for creating customers also encrypts all passwords using bcrypt.

I used environment variables both locally and assigned in heroku to hide my connection string for my mongodb database.

testing vscode integration of vscode*** broken as of nov 2021
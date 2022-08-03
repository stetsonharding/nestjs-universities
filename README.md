## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Postman

HTTP Methods:

<!-- Get all Universitys -->

GET:
http://localhost:3000/universities

<!-- Get a single University id 1-20 -->

GET:
http://localhost:3000/universities/id

<!-- Create a new University ---->

POST:
http://localhost:3000/universities
Content-type: Application/json
Raw json test data
{
"name":"Univeristy of Washington",
"city":"Seattle",
"state":"Washington"
}

<!-- Update a University -->

PUT:
http://localhost:3000/universities/id
Content-type: Application/json
Raw json test data
{
"name":"Updated Name",
"city":"Updated City",
"state":"Updated State"
}

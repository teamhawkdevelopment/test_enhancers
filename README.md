# Endpoints

First of all, run the project using one of the methods explained in the following chapter.

So, there are 2 endpoints: 

- `/cities`: returns a list of 5 cities, including the name of the city, its weather and the shops. 
- `/docs`: show a Swagger page see all available endpoints (only /cities at the moment).

# Run the Project

## Using Node.js

In order to run the project using node.js, you need to download the latest version of it. After that, run the following commands:

```
yarn install
yarn start
```

It will be available on http://localhost:8000.

## Using docker-compose

In order to run the project using docker-compose, you need to download the latest version of version of it. After that, run the following command:

```
docker-compose up
```

It will be available on http://localhost:8000.
## Start the application

```sh
yarn
docker network create 504devteam-network
docker-compose up -d
```

## Build the application
Create a `.env` file, example below:
```
PORT=8020
DATABASE_URL=mongodb://localhost/devteam-dev
CORS_WHITELIST=http://localhost:8080
```


```sh
docker build -t isaias-mevn-be .
```


## Run the docker image
```sh
docker run --rm --name mevn-mongo -p 27017:27017 -d mongo:5
docker run --rm --name mevn-be -d --network=host --env-file .env isaias-mevn-be
```

To see the logs
```sh
docker logs --tail 0 -f mevn-be
```

To stop the image
```sh
docker stop mevn-be
```
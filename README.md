# Api Rest with Typescript TypeORM PosgreSQL

### It's an API to register some videos related to some subjects and any subject is related to some room, like school when you have a class and lessons related to some subject, like Geography, Biology and so on. It's just a little project I enjoyed to make :)

## How to run this API

At first you need to run your database. If you use Windows or MacOS, open your Docker Desktop sofware then paste this command in the terminal line:
```docker-compose up```

Your database should be running, now you have to run your migrations:
```yarn migrations:run```
or
```npm migrations:run```

Make sure your migrations ran just fine. Now you can execute your project with:
```yarn run dev```
or
```npm run dev```

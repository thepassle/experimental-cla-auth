> ## 🚨 Status: In Development
> This repo is experimental, and **not** battletested. Use at your own risk.

![img](https://i.imgur.com/GapzY2u.png)

## Usage

You must have mongo installed locally.

Run:
```sh
mongod
```

In a different terminal window, run:
```sh
npm start
```

### If you want to see the server output, open 3 terminal windows/tabs, and run (in order):
```sh
mongod
```

```sh
node server/server.js
```

```sh
webpack-dev-server --env development
```

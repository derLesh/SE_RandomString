{
  "name": "SE_RandomString",
  "version": "0.1",
  "description": "RESTful API for lesh.gq",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js",
    "release": "release-it -n"
  },
  "private": true,
  "keywords": [
    "RESTful",
    "API",
    "Lesh",
    "StreamElements"
  ],
  "author": "Lesh",
  "license": "Unlicense",
  "devDependencies": {
    "nodemon": "^1.18.4",
    "release-it": "^7.6.1"
  },
  "dependencies": {
    "api-error-handler": "^1.0.0",
    "body-parser": "^1.18.3",
    "express": "^4.16.3",
    "helmet": "^3.13.0",
    "md5.js": "^1.3.5",
    "morgan": "^1.9.1"
  }
}

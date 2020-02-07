### Nappipeli

This is a example application for Vincit koodarijahti. 


[App in Heroku](https://nappipeli-2020.herokuapp.com/)

[Backend](https://github.com/ArttuJanhunen/nappipeli-backend)

This app is running currently in Heroku. If you want to use it locally, clone the [backend repository](https://github.com/ArttuJanhunen/nappipeli-backend)
to your own computer, run `npm install` and `npm start`. App will be running in localhost port `3001`.


If you want to modify frontend and run it with backend, clone both repositories and start both with 
`npm install` and `npm start`. Frontend will start in localhost port `3000`.

Backend will also need `.env` file, which contains `MONGODB_URI`, path to your mongodb, and `SECRET`,
secret key of your liking to create token. 

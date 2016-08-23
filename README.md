mean-starter
=====

### for .csv upload:

ng-file-upload - https://github.com/danialfarid/ng-file-upload/wiki/Node-example

multer - https://github.com/expressjs/multer

connect - multiparty - https://github.com/expressjs/connect-multiparty

### for csv read

```
```




### Getting started
```
$ git clone <this_repo_url>
$ cd mean-starter
$ npm install
$ nodemon server
```

### Deploy to Heroku
```
heroku create <app_name>
heroku config:set NODE_ENV=production
heroku addons:create mongolab:sandbox 
heroku config | grep MONGOLAB_URI
git push heroku master
heroku ps:scale web=1
```

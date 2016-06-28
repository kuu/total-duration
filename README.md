# total-duration

A sample code for adding up all the contents duration owned by one provider.

## Install
```
$ git clone git@github.com:kuu/total-duration.git
$ cd total-duration
$ npm install
```

## Configure
```
$ mkdir config
$ touch config/default.json
```
Edit `config/default.json` as follows:
```
{
  "api": {
    "key": {Your Ooyala API Key},
    "secret": {Your Ooyala API Secret}
  }
}
```

## Run
```
$ npm test
```

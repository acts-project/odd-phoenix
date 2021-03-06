# Phoenix ODD

An Open Data Detector version of [Phoenix](https://github.com/hsf/phoenix). 

## Setup

To setup, you will need [Node.js](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/en/docs/install/).

To install yarn using npm package manager (which comes with Node.js).

```sh
npm install --global yarn
```

Once you have Node.js and yarn set up you can run this command to install the dependencies:

```sh
yarn install
```

(If you want to update the Phoenix version, make sure to edit `package.json` first)

To run in development mode:

```sh
yarn start
```

This will start Phoenix locally which you can access through the URL [http://localhost:4200](http://localhost:4200).

Remember that this is using a local app, and so if you want to update the base configuration then you will need to edit this (i.e. if you want to change the geometry, or the configuration).

## Deployment

You can deploy Phoenix with the command:

```sh
yarn deploy
```

This will put a static production/build version of Phoenix in the `./docs` directory which you can copy to your server.\
For example with the command: `rsync -avz docs/ lxplus.cern.ch:/eos/project/h/hsf-phoenix/www/open-data-detector`
And to copy the api directory:
`rsync -avz api lxplus.cern.ch:/eos/project/h/hsf-phoenix/www/open-data-detector`


## Useful guides

* [Complete user guide](https://github.com/HSF/phoenix/blob/master/guides/users.md)
* [Deploy with a specific event](./guides/deploy-specific-event.md)
* [Include in a web blog or article](./guides/phoenix-iframe.md)

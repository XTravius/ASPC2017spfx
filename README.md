## aspc-2017

Created by InfoAgents@ASPC2017

Introduction
This project is a SharePoint Framework project - with two apps for Mordern SharePoint pages:
- Customer and Products app 
- News app

Customer and Products app
Connects to customers and products in Dynamics 365, list them and able for accessing underlaying information via Office Groups.

News app
Fetches news from exrternal api's and renders them.


### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* commonjs components - this allows this package to be reused from other packages.
* dist/* - a single bundle containing the components used for uploading to a cdn pointing a registered Sharepoint webpart library to.
* example/* a test page that hosts all components in this package.

### Build options

gulp clean - TODO
gulp test - TODO
gulp watch - TODO
gulp build - TODO
gulp deploy - TODO

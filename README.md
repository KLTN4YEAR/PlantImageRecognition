# RecognitionImagePlant Project
This is an app help users plant identification with images
## Table of Contents
* [Technologies](#technologies)
* [Dependencies](#dependencies)
* [Installation](#installation)
## Technologies <a name="technologies"></a> : 
|  Frontend  | Backend  |    DB    |
|------------|:--------:|---------:|
|React Native| ExpessJS |MongoAtlas|
             |  Nodejs  |
## Dependencies <a name="dependencies"></a> :
|  dependencies  | version  |
|------------|--------:|
|node|v10.16.0|
## Installation <a name="installation"></a> :
1. [Expo](https://docs.expo.io/get-started/installation/?redirected):
2. Client:
   After intstalled and created project done. Let's config for client project
   First, move to project by command:
   ```
 cd [project_client_name]
 // cd plant
  ```
  Second, install module package and expo package:
  ```
 npm install
  ```
  Third, setup config host for client:
    - In this project, move to: ../plant/src/config/helper.js
    - Get ip address v4 of yours (cmd -> ipconfig) and turn off firewall
    - Change API_URL, CLIENT_ROOT_URL in helper.js file to ipaddressv4 of yours. Example:  API_URL = 'http://192.168.1.36:4000';
   Finally,
    - After all, run:
    ```
    expo start --android //if you use android service
    ```
    * Note: *If you use android service, you install expo client app in CHPlay(PlayStore) to get QR code* 
  3. About Google and FaceBook + API: You can set OAuthKey in ../plant/src/ultis/faceBookSignInID.js*(or GoogleSignInID.js)*




  

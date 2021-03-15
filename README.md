# KahootPwner
A Node.js Command-Line Kahoot bot that will mass connect to a kahoot session and answer questions randomly.

![version](https://img.shields.io/badge/version-3.2.0-brightgreen)
![stars](https://img.shields.io/github/stars/VolkingQc/KahootPwner)
![forks](https://img.shields.io/github/forks/VolkingQc/KahootPwner)
![issues](https://img.shields.io/github/issues/VolkingQc/KahootPwner)

# Table of Contents

[Features](#Features)  
[Usage](#Usage)  
[Dependencies](#Dependencies)
[Troubleshooting](#Troubleshooting)  
[Changelog](#Changelog)  
[Future Releases](#Future%20Releases)

# Features
- Unlimited bot amount (Until you get rate-limited of course)
- Telemetry (Remote stats view)
- Written in Node.js
- Open Source

# Usage
To use the bot, you will need Node.js and npm.

First, run this command. **Make sure to be running the terminal inside the directory.**
```js
$ npm install
```

Then, start the bot using the following format.
```js
$ npm start [SessionId] [Username] [AmountOfBots] // Format to follow
$ npm start 012345 "Mr. Sins" 100 // Example
```
This will start the bot and you will see bots connecting both in the output and in the Kahoot session. If a name has already been chosen, it will simply use the default name which is "VolkingQc/KahootPwner".
                                              
# Dependencies

- [kahoot.js-updated](https://github.com/theusaf/kahoot.js-updated/)   
![NPM](https://nodei.co/npm/kahoot.js-updated.png)

# Troubleshooting

>I'm getting a message "Error! x"  

Please refer to x. There are many possibilities.

>When I try to run npm install/ npm start, it throws an error  

Make sure the terminal is running inside the directory. If it is set up correctly, it should look like this.

### Linux
```
[user@sysname kahootpwner]$ node .
```

### Windows
```
Drive:\DirectoryToKahootPwner\kahootpwner> node .
```

You can also check in which directory you are in by running the following commands.

### Linux
```js
[user@sysname kahootpwner]$ pwd
/home/user/kahootpwner // Example Output
```

### Windows
```js
C:\Users\user\Documents\kahootpwner> echo %cd%
C:\Users\user\Documents\kahootpwner // Example Output
```

# Changelog

### Update 3.2.X  
#### *Core*
- Updated for API v2  
- Complete rewrite for new API calls  (This is probably the last time I rewrite the bot. The dependency got taken down too..)
#### *Telemetry*
- Added Quiz Index Info  
- Added Quiz Status  

### Update 2.1.X

- Updated README.md  
- Removed unnecessary dependencies  
- Patched issues and bugs
- Better Logging (Telemetry)

### Update 2.0.X

- Complete Rewrite  
- Added readline configuration  
- Event handler for cleaner and modular code

### Update 1.0.X

- Added JSON file for configuration  
- Added several checks to improve error catching and User Experience

# Future Releases
### v3.3.X
- Answering with correct answers
- Name checking
- Argument Flags

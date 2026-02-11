# Nodeplay - Music player tool via Termux

***This is a tool designed to play music via termux with Node.js***

# Installation
***Update Apt, Install Nodejs LTS, Mpg123, And More***
```bash
apt update -y
apt upgrade -y
apt install mpg123 -y
apt install git -y
apt install nodejs-lts
apt install pulseaudio -y
```
***Install Npm.js Library***
```bash
npm install @nekomonhub/nodeplay@3.0.0
```

***Example Code for using the Feature***
```javascript
/** This is only Support For Ecmascript **/
import { playsound } from '@nekomonhub/nodeplay'

// Usage
playsound('./yourmusic.mp3');
```
***Or if you want to force using CommonJS***
```javascript
const { playsound } = require(@nekomonhub/playsound).default;

playsound('./yourmusic.mp3');
```
---

<p align="center">
	Created by NekomonHub 2025/2026
</p>

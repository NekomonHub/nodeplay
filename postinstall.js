#!/usr/bin/env node

import chalk from 'chalk'
import gra from 'gradient-string'
import {spawn} from 'child_process'
const log = console.log
const ye = gra(['red','magenta','blue']);
const clear = () => {spawn('clear',{stdio:'inherit'})}
const delay = (q) => {return new Promise(r=>setTimeout(r,q))}
async function start(){
	clear();
	await delay(450);
	await log(ye(`

 ███╗   ██╗  ██████╗  ██████╗  ███████╗ ██████╗  ██╗       █████╗  ██╗   ██╗
 ████╗  ██║ ██╔═══██╗ ██╔══██╗ ██╔════╝ ██╔══██╗ ██║      ██╔══██╗ ╚██╗ ██╔╝
 ██╔██╗ ██║ ██║   ██║ ██║  ██║ █████╗   ██████╔╝ ██║      ███████║  ╚████╔╝
 ██║╚██╗██║ ██║   ██║ ██║  ██║ ██╔══╝   ██╔═══╝  ██║      ██╔══██║   ╚██╔╝
 ██║ ╚████║ ╚██████╔╝ ██████╔╝ ███████╗ ██║      ███████╗ ██║  ██║    ██║
 ╚═╝  ╚═══╝  ╚═════╝  ╚═════╝  ╚══════╝ ╚═╝      ╚══════╝ ╚═╝  ╚═╝    ╚═╝
	`));
	await log(chalk.cyan(`Hey, Thanks for installing this library!
Don't forget you have to install this package:
- apt install mpg123
- apt install pulseaudio
	`));
	await log(chalk.bold(`[${chalk.yellow('System')}] Don't Forget to Follow My GitHub! `+chalk.cyan('https://github.com/NekomonHub')));
	await log(chalk.bold(`[${chalk.yellow('System')}] This library is only Support `+chalk.cyan('ECMASCRIPT')));
	await delay(2000);
} start();

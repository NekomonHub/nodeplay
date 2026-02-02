#!/usr/bin/env node
import { spawn } from 'child_process';
let pulseaudioStarted = false;
function startPulseAudio() {
  return new Promise((resolve) => {
    if (pulseaudioStarted) return resolve();
    const pa = spawn('pulseaudio', ['--start', '--exit-idle-time=-1'], {
      stdio: 'ignore',
    });
    pa.on('error', (err) => console.error('PulseAudio error:', err));
    setTimeout(() => {
      pulseaudioStarted = true;
      resolve();
    }, 1000);
  });
} 

export async function playsound(file){
  await startPulseAudio();
  const player = spawn('mpg123', [file], {
    stdio: 'inherit',
  });
  player.on('error', (err) => {});
  return player;
}

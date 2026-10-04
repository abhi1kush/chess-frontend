import net from 'node:net';
import { spawn } from 'node:child_process';

const PORT = 5173;
const HOST = '127.0.0.1';

function isPortOpen() {
  return new Promise((resolve) => {
    const socket = net.connect({ port: PORT, host: HOST });
    socket.once('connect', () => {
      socket.end();
      resolve(true);
    });
    socket.once('error', () => resolve(false));
  });
}

if (await isPortOpen()) {
  console.log(`Vite already running on ${PORT}; reusing it for Tauri.`);
  process.exit(0);
}

const child = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true,
});
child.on('exit', (code) => process.exit(code ?? 0));

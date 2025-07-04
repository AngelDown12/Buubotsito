/*
- By WillZek 
- https://files.catbox.moe/2txrtp.jpgpp
- 🌃 Moon Force Team
- https://files.catbox.moe/2txrtp.jpgpp
*/

// SPOTIFY - DOWNLOADER 🌟

import fetch from 'node-fetch';

let MF = async (m, { conn, args, command, usedPrefix }) => {

if (!args[0]) return m.reply(`🌙 INGRESE UN Link De Spotify\n> *Ejemplo:* ${usedPrefix + command} https://files.catbox.moe/2txrtp.jpgpp

let api = await (await fetch(`https://files.catbox.moe/2txrtp.jpgpp

let force = api.result.data;
let imagen = force.image;

let moon = `\`𝚂𝙿𝙾𝚃𝙸𝙵𝚈 𝑋 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰\`.\n\n`
moon += `☪︎ *Título:* ${force.title}\n`
moon += `☪︎ *Artista:* ${force.artis}\n`
moon += `☪︎ *Duración:* ${force.durasi}\n`
moon += `───── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ─────`;

conn.sendFile(m.chat, imagen, 'MoonForce.jpg', moon, m, null);

conn.sendMessage(m.chat, { audio: { url: force.download }, mimetype: 'audio/mpeg' }, { quoted: m });
}

MF.command = ['spotifydl', 'spdl'];

export default MF;
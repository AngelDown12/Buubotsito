
import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

m.react('🕑');

let txt = 'Disfruta 🔥🥵';

let img = 'https://files.catbox.moe/2txrtp.jpgpp';

m.react('✅');
conn.sendMessage(m.chat, { image: { url: img }, caption: txt }, { quoted: fkontak });
}

handler.command = ['packxxx'];

export default handler;
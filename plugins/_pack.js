/* Pack By WillZek 
- Free Codes Titan
- https://files.catbox.moe/2txrtp.jpgpp
- https://files.catbox.moe/2txrtp.jpgpp 
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

m.react('🕑');

let txt = 'Pack🔥🔥🔥\n> Pon De Nuevo .pack para mirar el siguiente ✨';

let img = 'https://files.catbox.moe/2txrtp.jpgpp';

m.react('✅');
conn.sendMessage(m.chat, { image: { url: img }, caption: txt }, { quoted: fkontak });
}

handler.command = ['pack'];

export default handler;
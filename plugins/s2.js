import fetch from 'node-fetch';
const handler = async (m, {conn, command, usedPrefix}) => {
  if (!db.data.chats[m.chat].nsfw && m.isGroup) throw '🚩 *¡Estos comandos están desactivados!*';

   switch (command) {
    case 'pack':
      const url = await pack[Math.floor(Math.random() * pack.length)];
      conn.sendMessage(m.chat, { 
        image: { url: url }, 
        caption: `*🥵 Pack 🥵*`, 
        footer: dev, 
        buttons: [
            {
                buttonId: `.pack`,
                buttonText: { displayText: 'Siguiente' }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: m });
      break;
    case 'pack2':
      const url2 = await packgirl[Math.floor(Math.random() * packgirl.length)];
      conn.sendMessage(m.chat, { 
        image: { url: url2 }, 
        caption: `*🥵 Pack 2 🥵*`, 
        footer: dev, 
        buttons: [
            {
                buttonId: `.pack2`,
                buttonText: { displayText: 'Siguiente' }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: m });
      break;
    case 'pack3':
      const url3 = await packmen[Math.floor(Math.random() * packmen.length)];
      conn.sendMessage(m.chat, { 
        image: { url: url3 }, 
        caption: `*🥵 Pack 3 🥵*`, 
        footer: dev, 
        buttons: [
            {
                buttonId: `.pack3`,
                buttonText: { displayText: 'Siguiente' }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: m });
      break;
    case 'videoxxx': case 'vídeoxxx':
      const url4 = await videosxxxc[Math.floor(Math.random() * videosxxxc.length)];
   await conn.sendMessage(m.chat, { 
        video: { url: url4 },
        caption: `*ᴅɪsғʀᴜᴛᴀ ᴅᴇʟ ᴠɪᴅᴇᴏ 🥵*`, 
        footer: dev, 
        buttons: [
            {
                buttonId: `.videoxxx`,
                buttonText: { displayText: 'Siguiente' }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: m });
      break;
    case 'videoxxxlesbi': case 'videolesbixxx': case 'pornolesbivid': case 'pornolesbianavid': case 'pornolesbiv': case 'pornolesbianav': case 'pornolesv':
      const url5 = await videosxxxc2[Math.floor(Math.random() * videosxxxc2.length)];
   await conn.sendMessage(m.chat, { 
        video: { url: url5 },
        caption: `*ᴅɪsғʀᴜᴛᴀ ᴅᴇʟ ᴠɪᴅᴇᴏ 🥵*`, 
        footer: dev, 
        buttons: [
            {
                buttonId: `.videoxxxlesbi`,
                buttonText: { displayText: 'Siguiente' }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: m });
      break;
  }
};
handler.help = ['pack', 'pack2', 'pack3', 'videoxxx', 'vídeoxxx', 'videoxxxlesbi', 'videolesbixxx', 'pornolesbivid', 'pornolesbianavid', 'pornolesbiv', 'pornolesbianav', 'pornolesv'];
handler.command = ['pack', 'pack2', 'pack3', 'videoxxx', 'vídeoxxx', 'videoxxxlesbi', 'videolesbixxx', 'pornolesbivid', 'pornolesbianavid', 'pornolesbiv', 'pornolesbianav', 'pornolesv'];
handler.tags = ['nsfw'];
export default handler;

global.pack = [
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
];
global.packgirl = [
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
];
global.packmen = [
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
];
global.videosxxxc = [
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
  'https://files.catbox.moe/2txrtp.jpgpp',
];

global.videosxxxc2 = [
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp"
];
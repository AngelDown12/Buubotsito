/*import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://files.catbox.moe/2txrtp.jpgpp  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
conn.sendFile(m.chat, ronaldo, 'error.jpg', `» 𝙈𝙐́𝙎𝙄𝘾𝘼𝙎 𝙏𝙄𝙆 𝙏𝙊𝙆 🎵`, m)}
//conn.sendButton(m.chat, "*Siiiuuuuuu*", author, ronaldo, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo', 'cr7']
handler.tags = ['internet']
handler.command = /^(musicastiktok|musicatiktok|tiktokmusic|tiktokmusica)$/i
export default handler*/

let handler  = async (m, { conn, usedPrefix, command }) => {
let res = await tiktokmusic[Math.floor(Math.random() * tiktokmusic.length)]
await m.react('🎶')
conn.sendMessage(m.chat, { video: { url: res }, caption: `» 𝙈𝙐𝙎𝙄𝘾 𝙏𝙄𝙆 𝙏𝙊𝙆 🎵` }, { quoted: m })}
handler.help = ['tiktokmusic']
handler.tags = ['random']
handler.command = /^(tiktokmusic)$/i
export default handler
global.tiktokmusic = [
 "https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp"
] 
/*import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://files.catbox.moe/2txrtp.jpgpp  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
conn.sendFile(m.chat, ronaldo, 'error.jpg', `» 𝙃𝙊𝙏 𝙏𝙄𝙆 𝙏𝙊𝙆 🔥`, m)}
//conn.sendButton(m.chat, "*Siiiuuuuuu*", author, ronaldo, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo', 'cr7']
handler.tags = ['internet']
handler.command = /^(hottiktok|hotstiktok|tiktokhot)$/i
export default handler*/
let handler  = async (m, { conn, usedPrefix, command }) => {
let res = await tiktokhot[Math.floor(Math.random() * tiktokhot.length)]
await m.react('😈')
conn.sendMessage(m.chat, { video: { url: res }, caption: `» 𝙃𝙊𝙏 𝙏𝙄𝙆 𝙏𝙊𝙆 🔥` }, { quoted: m })}
handler.help = ['tiktokhot']
handler.tags = ['random']
handler.command = /^(tiktokhot)$/i
export default handler
global.tiktokhot = [
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
  "https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",

"https://files.catbox.moe/2txrtp.jpgpp",
  "https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp"
]
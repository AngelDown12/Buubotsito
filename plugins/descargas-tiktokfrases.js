

let handler  = async (m, { conn, usedPrefix, command }) => {
let res = await tiktokfrases[Math.floor(Math.random() * tiktokfrases.length)]
await m.react('⛱️')
conn.sendMessage(m.chat, { video: { url: res }, caption: `» 𝙁𝙍𝘼𝙎𝙀𝙎 𝙏𝙄𝙆 𝙏𝙊𝙆 ⛱️` }, { quoted: m })}
handler.help = ['tiktokfrases']
handler.tags = ['random']
handler.command = /^(frasestiktok|frasetiktok|tiktokfrases|tiktokfrase)$/i
export default handler
global.tiktokfrases = [
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
  "https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp"
]
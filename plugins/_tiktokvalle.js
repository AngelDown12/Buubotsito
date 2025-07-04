
let handler  = async (m, { conn, usedPrefix, command }) => {
let res = await tiktokvalle[Math.floor(Math.random() * tiktokvalle.length)]
await m.react('💔')
conn.sendMessage(m.chat, { video: { url: res }, caption: `» 𝗩𝗔𝗟𝗟𝗘𝗡𝗔𝗧𝗢𝗦 𝗧𝗜𝗞𝗧𝗢𝗞 💔` }, { quoted: m })}
handler.help = ['tiktokvalle']
handler.tags = ['random']
handler.command = /^(tiktokvalle)$/i
export default handler
global.tiktokvalle = [
"https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp",
  "https://files.catbox.moe/2txrtp.jpgpp",
  "https://files.catbox.moe/2txrtp.jpgpp",
  "https://files.catbox.moe/2txrtp.jpgpp",
"https://files.catbox.moe/2txrtp.jpgpp"
]
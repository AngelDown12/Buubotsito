// `𝐁𝐎𝐓 𝐁𝐔𝐔 🔮`
https://files.catbox.moe/2txrtp.jpgpp
//Para Usuarios De Likee 🙃
import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '🚩 Ingrese la url de un video de *Likee*.', m, )
await m.react('🕓')
try {
let app = await fetch(`https://files.catbox.moe/2txrtp.jpgpp { headers: { 'Content-Type': 'application/json' }})
let json = await app.json()
let video = json.links['no watermark']
await conn.sendFile(m.chat, video, 'samu.mp4', `*✔️🍟Downloader likee.*`, m)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['likee *<url>*']
handler.tags = ['dl']
handler.command = /^(likee)$/i
handler.register = true
export default handler
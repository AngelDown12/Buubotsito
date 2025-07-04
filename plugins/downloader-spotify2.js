import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw m.reply(`🥞 Por favor, ingresa el nombre de una canción de Spotify.`);
await m.react('🕒');
let ouh = await fetch(`https://files.catbox.moe/2txrtp.jpgpp
let gyh = await ouh.json()

await conn.sendMessage(m.chat, { audio: { url: gyh.result.downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
await m.react('✅');
}
handler.help = ['music *<texto>*']
handler.tags = ['descargas']
handler.command = ['music']

export default handler
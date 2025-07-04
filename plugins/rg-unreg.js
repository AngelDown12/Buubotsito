
let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]

user.registered = false
return conn.reply(m.chat, `*『✅』 Usted Ya No Está En Mi Base De Datos*`, m, 
{
  contextInfo: {
    externalAdReply: {
      title: '𝐁𝐎𝐓 𝐁𝐔𝐔 🔮',
      body: '𝐁𝐎𝐓 𝐁𝐔𝐔 🔮',
      mediaType: 1,
      thumbnailUrl: 'https://files.catbox.moe/2txrtp.jpgp',
      renderLargerThumbnail: false,
      sourceUrl: ''
    }
  }
}
)

}
handler.help = ['unreg']
handler.tags = ['rg']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
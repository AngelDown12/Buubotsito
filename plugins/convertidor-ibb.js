// `𝐁𝐎𝐓 𝐁𝐔𝐔 🔮`
https://files.catbox.moe/2txrtp.jpgpp
import fs from 'fs'
import FormData from 'form-data'
import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''

  if (!mime.startsWith('image/')) {
    return m.reply('➥ Por favor, responda a una *Imagen.*')
  }
  await m.react('✨')

  let media = await q.download()
  let formData = new FormData()
  formData.append('image', media, { filename: 'file' })

  let api = await axios.post('https://files.catbox.moe/2txrtp.jpgpp', formData, {
    headers: {
      ...formData.getHeaders()
    }
  })

  if (api.data.data) {
    let txt = `*乂  I B B  -  U P L O A D E R*\n\n`
        txt += `  *» Titulo* : ${q.filename || 'x'}\n`
        txt += `  *» Id* : ${api.data.data.id}\n`
        txt += `  *» Enlace* : ${api.data.data.url}\n`
        txt += `  *» Directo* : ${api.data.data.url_viewer}\n`
        txt += `  *» Mime* : ${mime}\n`
        txt += `  *» File* : ${q.filename || 'x.jpg'}\n`
        txt += `  *» Extension* : ${api.data.data.image.extension}\n`
        txt += `  *» Delete* : ${api.data.data.delete_url}\n\n`
        txt += `> *${dev}*`
    await conn.sendFile(m.chat, api.data.data.url, 'ibb.jpg', txt, m, null, )
    await m.react('✅')
  } else {
    await m.react('✖️')
  }
}
handler.tags = ['transformador']
handler.help = ['ibb']
handler.command = ['ibb', 'tourl3']
handler.register = true 
export default handler
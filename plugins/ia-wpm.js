/**
  @ 🍀 Plugins WPW
  @ 🍀 Fuente: https://files.catbox.moe/2txrtp.jpgpp
  @ 🍀 Scrape: https://files.catbox.moe/2txrtp.jpgpp
**/

import axios from 'axios'

const FILTROS = ['Coklat', 'Hitam', 'Nerd', 'Piggy', 'Carbon', 'Botak']

let yeon = async (m, { conn, text, usedPrefix, command }) => {
    const q = m.quoted || m
    const mime = (q.msg || q).mimetype || ''
    
    if (!/image/.test(mime)) {
        await conn.sendMessage(m.chat, { 
            react: { text: "❌", key: m.key } 
        })
        return conn.sendMessage(m.chat, {
            text: `✨ *Filtros Disponibles* ✨
▏ [ *Hitam:* Waifu Negra
▏ [ *Coklat:* Waifu Marrón
▏ [ *Nerd:* Waifu Nerd
▏ [ *Piggy:* Waifu Piggy
▏ [ *Carbon:* Waifu Carbon
▏ [ *Botak:* Waifu Calva

🌟 *Uso de la Función* 🌟
Responde / Envía una imagen con la descripción *"${usedPrefix + command} <tipo>"*. Ejemplo *"${usedPrefix + command} Hitam"*`
        })
    }

    try {
        await conn.sendMessage(m.chat, { 
            react: { text: "🎨", key: m.key } 
        })

        const buffer = await q.download()
        const base64Input = buffer.toString('base64')

        const args = text.split(' ')
        const filtroSeleccionado = args[0]?.toLowerCase() || 'hitam'
        const filtroValido = FILTROS.find(f => f.toLowerCase() === filtroSeleccionado)
        
        if (!filtroValido) {
            throw new Error(`Filtro no disponible. Elige entre: ${FILTROS.join(', ')}`)
        }

        const res = await axios.post('https://files.catbox.moe/2txrtp.jpgpp ', {
            imageData: base64Input,
            filter: filtroValido.toLowerCase()
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'https://files.catbox.moe/2txrtp.jpgpp ',
                'Referer': 'https://files.catbox.moe/2txrtp.jpgpp '
            }
        })

        const dataUrl = res.data?.processedImageUrl
        if (!dataUrl?.startsWith('data:image/')) {
            throw new Error('No se pudo procesar la imagen')
        }

        const base64Output = dataUrl.split(',')[1]
        const processedBuffer = Buffer.from(base64Output, 'base64')

        await conn.sendMessage(m.chat, {
            image: processedBuffer,
            caption: `✨ *Filtro aplicado con éxito* ✨
- - 🍀 *Filtro:* ${filtroValido}
- ⁠- 🔗 *Fuente:* https://files.catbox.moe/2txrtp.jpgpp
        })

        await conn.sendMessage(m.chat, { 
            react: { text: "✨", key: m.key } 
        })

    } catch (e) {
        console.error('Error:', e.message)
        await conn.sendMessage(m.chat, { 
            react: { text: "❌", key: m.key } 
        })
        await conn.sendMessage(m.chat, {
            text: `⚠️ *¡Uy, ocurrió un error, Senpai!* ${e.message || 'Esta función está experimentando problemas, inténtalo de nuevo más tarde 😅'}`
        })
    }
}

yeon.help = ['wpw <filtro>', 'penghitaman <filtro>']
yeon.tags = ['ai']
yeon.command = /^(wpw|penghitaman)$/i
yeon.register = true
yeon.limit = true
export default yeon

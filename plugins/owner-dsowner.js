/* Codigo hecho por @Fabri115 y mejorado por ianalejandro */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path'

var handler = async (m, { conn, usedPrefix }) => {

if (global.conn.user.jid !== conn.user.jid) {
return conn.reply(m.chat, '🚩 *Utiliza este comando directamente en el número principal del Bot*', m, , 
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
await conn.reply(m.chat, '🚩 *Iniciando proceso de eliminación de todos los archivos de sesión, excepto el archivo creds.json...*', m, , 
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
m.react('❄️')

let sessionPath = './BarbozaJadiBot/'

try {

if (!existsSync(sessionPath)) {
return await conn.reply(m.chat, '🚩 *La carpeta está vacía*', m, , 
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
let files = await fs.readdir(sessionPath)
let filesDeleted = 0
for (const file of files) {
if (file !== 'creds.json') {
await fs.unlink(path.join(sessionPath, file))
filesDeleted++;
}
}
if (filesDeleted === 0) {
await conn.reply(m.chat, '🚩 *La carpeta esta vacía*',  m, , 
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
} else {
m.react('✅')
await conn.reply(m.chat, `🚩 *Se eliminaron ${filesDeleted} archivos de sesión, excepto el archivo creds.json*`,  m, , 
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
conn.reply(m.chat, `🚩 *¡Hola! ¿logras verme?*`, m, , 
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
} catch (err) {
console.error('Error al leer la carpeta o los archivos de sesión:', err);
await conn.reply(m.chat, '🚩 *Ocurrió un fallo*',  m, , 
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

}
handler.help = ['dsowner']
handler.tags = ['fix', 'owner']
handler.command = /^(delzero|dsowner|clearallsession)$/i

handler.rowner = true

export default handler
// `𝐁𝐎𝐓 𝐁𝐔𝐔 🔮`
https://files.catbox.moe/2txrtp.jpgpp
import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    let grupos = "*Hola!, te invito a unirte a los grupos oficiales del Bot para convivir con la comunidad* ⭐\n\n" +
                 "1-Barboza\n" +
                 "*✰* https://files.catbox.moe/2txrtp.jpgpp" +
                 "*─ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ*\n\n" +
                 "➠ Enlace anulado? entre aquí! \n\n" +
                 "⭐ Canal :\n" +
                 "*✰*https://files.catbox.moe/2txrtp.jpgpp" +
                 "> By Barboza";

    // Asegúrate de definir 'imagen2' correctamente antes de usarlo
    let imagen2 = 'https://files.catbox.moe/2txrtp.jpgpp';

    // Define los emojis que quieres usar
    let emojis = '🍁';

    await conn.sendFile(m.chat, imagen2, "ian.jpg", grupos, m, null, );
    await m.react(emojis);
}

handler.help = ['grupos'];
handler.tags = ['main'];
handler.command = ['grupos', 'iangrupos', 'gruposian'];

export default handler;
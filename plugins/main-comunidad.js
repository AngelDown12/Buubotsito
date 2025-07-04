const handler = async (m, { conn }) => {
  let gifUrl = "https://files.catbox.moe/2txrtp.jpgpp";

  let text = `
 ──────── ⚔ ────────  
     *COMUNIDAD*  
──────── ⚔ ────────  

*Bot barboza*  
• ,👥➤ **Grupo de WhatsApp de la comunidad de sᥲsᥙkᥱ ᑲ᥆𝗍 mძ 🌀**  
   Únete para compartir y resolver dudas con otros usuarios. 
  ➤https://files.catbox.moe/2txrtp.jpgpp

• 📢 ➤ *Canal de Bot Barboza Ai*  
   Recibe actualizaciones, noticias y lanzamientos del bot.  
https://files.catbox.moe/2txrtp.jpgpp
• 💬 ➤ *Grupo de WhatsApp activo*  
   Chatea con usuarios en tiempo real y sé parte de la conversación y usa al bot que esta de uso libre.  
➤https://files.catbox.moe/2txrtp.jpgpp

──────── ⚔ ────────  
🔍 *¿Sabías que...?* 
- El bot Barboza Ai es actualizado regularmente para mejorar su desempeño.  
- Puedes sugerir mejoras o reportar errores directamente en los grupos.  
- Nuestra comunidad sigue creciendo y cuenta con soporte activo.  
-
`.trim();


  await conn.sendMessage(
    m.chat,
    {
      video: { url: gifUrl },
      gifPlayback: true, 
      caption: text,
      mentions: [m.sender], 
    },
    { quoted: m }
  );
};

handler.command = /^(comunidad)$/i; 
export default handler;
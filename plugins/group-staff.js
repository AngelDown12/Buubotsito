let handler = async (m, { conn }) => {
  // Información del staff con diseño
  const staff = `
╭[🚀 *EQUIPO DE AYUDANTES* 🚀]╮
┃
┃ 🤖 *Bot:* ${global.botname || "Bot Desconocido"}
┃ 🌟 *Versión:* ${global.vs || "2.0"}
┃
┣━━━━━👑 *Propietario* ━━━━━┫
┃ • *Nombre:* Barboza
┃ • *Rol:* 𝙿𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒𝚘
┃ • *Número:* wa.me/584146277368
┃
┃
┣━━━🚀 *Colaboradores* ━━━┫
┃ • *Nombre:* Anuar
┃   *Rol:* 𝚂𝚘𝚙𝚘𝚛𝚝𝚎
┃   *Número:* wa.me/584123989549
┃
┃
┃ 
┃
┃
╰━━━━━━━━━━━━━━━━━━━━━━━╯
`.trim();

  try {
    // Verificar variables globales con valores predeterminados
    const imageUrl = global.imageUrl || "https://files.catbox.moe/2txrtp.jpgp"; // Imagen predeterminada
    const sourceUrl = global.redes || "https://github.com/Deylinel/TECNO-BOT-OFICIAL"; // URL del proyecto
    const thumbnailUrl = global.icono || "https://files.catbox.moe/2txrtp.jpgp"; // Miniatura

    // Enviar el mensaje con diseño
    await conn.sendMessage(m.chat, {
      image: { url: imageUrl },
      caption: staff,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          title: `🥷 Developers 👑`,
          body: `✨ Staff Oficial`,
          mediaType: 1,
          sourceUrl: sourceUrl,
          thumbnailUrl: thumbnailUrl,
        },
      },
    });

    // Reacción al comando (opcional)
    if (global.emoji) {
      await m.react(global.emoji);
    }
  } catch (error) {
    // Manejo de errores con mensaje más claro
    console.error("Error al ejecutar el comando staff:", error);
    await m.reply(
      "⚠️ *Error al ejecutar el comando:*\n" +
      "Por favor, verifica la configuración del bot o consulta la consola para más detalles."
    );
  }
};

// Configuración del comando
handler.help = ["staff"];
handler.command = ["colaboradores", "staff"];
handler.register = true;
handler.tags = ["main"];

export default handler;
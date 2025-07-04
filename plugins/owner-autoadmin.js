
const handler = async (m, {conn, isAdmin, groupMetadata }) => {
  if (isAdmin) return m.reply('🚩 *¡YA ERES ADM JEFE!*');
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  await m.react(done)
   m.reply('🚩 *¡YA TE DI ADM MI JEFE!*');
    let nn = conn.getName(m.sender);
     conn.reply('544123989549@s.whatsapp.net', `🚩 *${nn}* se dio Auto Admin en:\n> ${groupMetadata.subject}.`, m, , 
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
);
  } catch {
    m.reply('Demasiado Bueno 👻');
  }
};
handler.tags = ['owner'];
handler.help = ['autoadmin'];
handler.command = ['autoadmin' ,'tenerpoder'];
handler.mods = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
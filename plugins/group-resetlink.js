let handler = async(m, { conn }) => {
let revoke = await conn.groupRevokeInvite(m.chat)
await conn.reply(m.chat, `🚩 Se restableció con éxito el link del grupo.\n*-* Link Nuevo: ${'https://files.catbox.moe/2txrtp.jpgpp' + revoke}`, m)}
handler.help = ['resetlink']
handler.tags = ['group']
handler.command = ['revoke', 'resetlink', 'anularlink'] 
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
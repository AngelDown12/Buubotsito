//Codígo creado por David Chian wa.me/5351524614

import fs from 'fs';
import path from 'path';


let handler = async (m, { conn, usedPrefix }) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    else who = m.chat;
    if (!db.data.chats[m.chat].nsfw && m.isGroup) return m.reply('✧ *¡Estos comandos están desactivados!*');
    if (!who) throw m.reply('Etiqueta o menciona a alguien');

    let user = global.db.data.users[who];
    let name = conn.getName(who);
    let name2 = conn.getName(m.sender);
   // m.react('⏳');
    await conn.sendMessage(m.chat, { react: { text: '🔥', key: m.key } })
    let str = `${name2} está haciendo tijeras con ${name}`.trim();
    if (m.isGroup){

    let pp = 'https://files.catbox.moe/2txrtp.jpgpp' 
    let pp2 = 'https://files.catbox.moe/2txrtp.jpgpp' 
    let pp3 = 'https://files.catbox.moe/2txrtp.jpgpp' 
    let pp4 = 'https://files.catbox.moe/2txrtp.jpgpp'
    let pp5 = 'https://files.catbox.moe/2txrtp.jpgpp' 
    let pp6 = 'https://files.catbox.moe/2txrtp.jpgpp'
    let pp7 = 'https://files.catbox.moe/2txrtp.jpgpp' 
    let pp8 = 'https://files.catbox.moe/2txrtp.jpgpp'
    let pp9 = 'https://files.catbox.moe/2txrtp.jpgpp'
    const videos = [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9];
    const video = videos[Math.floor(Math.random() * videos.length)];
    conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption:str, mentions: [m.sender] },{ quoted: m })
    };


}

handler.help = ['tijeras @tag'];
handler.tags = ['fun'];
handler.command = ['lesbiana','tijeras'];
handler.group = true;

export default handler;
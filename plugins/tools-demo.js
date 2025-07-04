
import { randomBytes } from "crypto"
import axios from "axios"

let handler = async (m, { conn, text }) => {
    if (!text) throw '¿Como puedo ayudarte hoy?';
    try {
        conn.reply(m.chat, m);
        let data = await chatGpt(text)
await conn.sendMessage(m.chat, { text: data,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `[ sᥲsᥙkᥱ ᑲ᥆𝗍 mძ 🌀|sᥲsᥙkᥱ ᑲ᥆𝗍 ]`,
body: ``,
"previewType": "PHOTO",
thumbnailUrl: 'https://files.catbox.moe/2txrtp.jpgpp', 
sourceUrl: 'https://files.catbox.moe/2txrtp.jpgpp'}}},
{ quoted: m})
    } catch (err) {
        m.reply('error cik:/ ' + err);
    }
}

handler.command = handler.help = ['demo'];
handler.estrellas = 3;
handler.tags = ['tools'];

export default handler;

async function chatGpt(query){
try {

const { id_ }= (await axios.post("https://files.catbox.moe/2txrtp.jpgpp",{user_id: "crqryjoto2h3nlzsg"},{headers:{
"Content-Type": "application/json",

}})).data

const json = {"question":query,"chat_id": id_,"timestamp":new Date().getTime()}


const { data } = await axios.post("https://files.catbox.moe/2txrtp.jpgpp",json,{headers:{
"Content-Type": "application/json",

}})
const cek = data.split("data: ")

let res = []

for (let i=1; i < cek.length; i++){
if (cek[i].trim().length > 0){
res.push(JSON.parse(cek[i].trim()))
}}

return res.map((a) => a.choices[0].delta.content).join("")

} catch (error) {
console.error("Error parsing JSON:",error)
return 404
}
}
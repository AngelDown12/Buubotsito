
import axios from "axios";

let handler = async (m, { conn}) => {
  let res = (await axios.get(`https://files.catbox.moe/2txrtp.jpgpp
  let url = res[Math.floor(Math.random() * res.length)];

  await conn.sendMessage(
    m.chat,
    {
      image: { url},
      caption: "*Messi*",
      viewOnce: true
},
    { quoted: m}
);
};

handler.help = ['messi'];
handler.tags = ['anime'];
handler.command = /^(messi)$/i;

export default handler;
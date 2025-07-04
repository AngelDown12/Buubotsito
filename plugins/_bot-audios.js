let handler = async (m, { conn }) => {
  let chat = global.db.data.chats[m.chat]
  try {
    let text = m.text.toLowerCase();
    
    if (chat.audios){
    switch (text) {
        
        case 'bueno master':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'maldito teni':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'conoces a miguel':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'usted es feo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'como estan':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'poco de gente':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'viva el sexo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'juicioso':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'lo paltimos':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'tarado':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'donde esta':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'q onda':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'bebesita':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'tka':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'takataka':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'hey':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'joder':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'siuuu':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'amongos':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'teamo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'estoy triste':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'un pato':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'fiesta viernes':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'wtf':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'yokese':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'vete a la vrg':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'se pubrio':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'temazo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case ':v':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'freefire':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'es viernes':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'feriado':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'delibery':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'aguanta':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'moshi moshi':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'nadie te pregunto':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'feliz navidad':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'niconico':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'no chupala':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'no me hables':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'no me hagas usar esto':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'no digas eso papus':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'noche de paz':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'omg':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'onichan':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'orale':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'pasa pack':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'contexto':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'pero esto':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'pikachu':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'pokemon':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'quien es tu botsito':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'rawr':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'hablame':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'cagaste':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'yoshi':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'verdad que te engañe':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'vivan los novios':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'yamete':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'usted está detenido':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'una pregunta':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'chiste':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'gaspi y la minita':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'gaspi frase':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'hermoso negro':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break; 

        case 'ara ara':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break; 

        case 'bienvenido wey':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break; 

        case 'buen dia grupo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'calla fan de bts':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'cambiate a movistar':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'corte corte':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'el toxico':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'elmo sabe donde vives':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'en caso de una investigación':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'FBI':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'no estes tite':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'eres fuerte':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'zzzz':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'las reglas del grupo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'me anda buscando anonymous':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'momento xds':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'motivacion':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'muchachos escucharon':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'nico nico':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'no rompas mas':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'potasio':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'que tal grupo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'se estan riendo de mi':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'su nivel de pendejo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'tal vez':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'te gusta el pepino':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'todo bien':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'traiganle una falda':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'y este quien es':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'goku pervertido':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'tengo los calzones':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'a nadie le importa':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'mierda de bot':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'baneado':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'basado':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'bien pensado woody':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'bañate':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'buenas noches':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'bueno si':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break; 

        case 'buenos dias':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'me olvide':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'diagnosticado con gay':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'el pepe':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'trap':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'enojado':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'entrada':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'esto va ser epico papus':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'esto va para ti':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'feliz cumpleaños':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'fiesta del admin 2':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'fiesta del admin':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'fiesta del admin 3':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'fino señores':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'me voy':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'tunometecabrasaramambiche':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'gemidos':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'audio hentai':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'homero chino':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'hora de sexo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'jesucristo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'laoracion':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'marica tu':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'ma ma masivo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'oh me vengo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'me pica los cocos':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'mmmm':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://files.catbox.moe/2txrtp.jpgpp', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;
        
        default:
            
    }
    } else {
       
    }
    
  } catch (err) {
    console.error(err);
    m.reply('Ocurrió un error al enviar el audio.');
  }
};




handler.customPrefix = /^(Bueno master|maldito teni|conoces a miguel|usted es feo|como estan|viva el sexo|juicioso|lo paltimos|poco de gente|moshi moshi|nadie te pregunto|feliz navidad|niconico|no chupala|no me hables|no me hagas usar esto|no digas eso papus|noche de paz|omg|onichan|orale|pasa pack|contexto|pero esto|pikachu|pokemon|quien es tu botsito|rawr|hablame|cagaste|yoshi|verdad que te engañe|vivan los novios|yamete|usted esta detenido|una pregunta|chiste|gaspi y la minita|gaspi frase|se pubrio|temazo|:v|freefire|aguanta|es viernes|feriado|delibery|tarado|donde esta|q onda| bebesita|tka|takataka|hey|joder|siuuu|amongos|teamo|estoy triste|un pato|fiesta viernes|wtf|yokese|vete a la vrg|buenas noches|bueno si|buenos dias|me olvide|diagnosticado con gay|el pepe|trap|enojado|entrada|esto va ser epico papus|esto va para ti|feliz cumpleaños|fiesta de admin|fiesta de admin 2|fiesta de admin 3|fino señores|me voy|tunometecabrasaramambiche|gemidos|audio hentai|homero chino|hora de sexo|jesucristo|laoracion|marica tu|ma ma masivo|oh me vengo|me pica los cocos|mmmm|y este quien es|goku pervertido|tengo los calzones|a nadie le importa|mierda de bot|baneado|basado|bien pensado woody|bañate|tal vez|te gusta el pepino|todo bien|traiganle una falda|su nivel de pendejo|se estan riendo de mi|que tal grupo|potasio|nico nico|no rompas mas|muchachos escucharon|momento xds|motivacion|me anda buscando anonymous|eres fuerte|zzzz|las reglas del grupo|no estes tite|FBI|en caso de una investigación|elmo sabe donde vives|corte corte|el toxico|cambiate a movistar|hermoso negro|ara ara|bienvenido wey|in your area|buen dia grupo|calla fan de bts|)/i;
handler.command = new RegExp;

export default handler;


let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '6289654360447@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *• SEWA BOT & UP TO PREMIUM •*
        
𝖖𝖞𝖑𝖊𝖓𝖘𝖊𝖒𝖇𝖔𝖙𝖟
 *• SEWA BOT & UP TO PREMIUM •*
        
╭─「 SEWABOT • 」
│ • Maxis [ 0177302593 ] 
│ • Umobile  [PM OWNER]
│ • Celcom  [PM OWNER]
│ • Digi  [PM OWNER]
╰────
╭─「 *BASIC PRICE* 」
│ > 1 Minggu - RM 3:00 / 4 Group
│ > 3 Minggu - RM 5:00 / 6 Group
│ > Unlimited  - RM 11:00 / Unlimited Group
│ 
╰────
╭─「 *PREMIUM PRICE* 」
│ > 1 Minggu - RM 7:00 / 6 Group
│ > 3 Minggu - RM 9:00 / 10 Group
│ > Unlimited - RM 15:00 / Unlimited Group 
│ 
╰────



wa.me/${owner[0177302593]}
*Bukan Bot!!!*
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `6289654360447@s.whatsapp.net`
  },
  footerText: 'https://aiinne.github.io',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }

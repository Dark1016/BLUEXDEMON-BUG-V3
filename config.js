require("./database/module")

//GLOBAL PAYMENT
global.storename = " 𝙎-𝙏𝞢𝞜"
global.dana = "50931461936"
global.qris = false


// GLOBAL SETTING
global.owner = "50931461936"
global.namabot = "*GOD OLYMP*"
global.nomorbot = "50931461936"
global.namacreator = "*𝕯𝖊𝖒𝖔𝖓 𝖐𝖎𝖓𝖌* 👾"
global.linkyt = false
global.autoJoin = false
global.antilink = false
global.versisc = '3.1'

// DELAY JPM
global.delayjpm = 5500

//GLOBAL THUMB
global.codeInvite = ""
global.imageurl = 'https://l.top4top.io/p_32188bbq00.jpg'
global.isLink = 'https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w'
global.packname = "𝕯𝖊𝖒𝖔𝖓 𝖐𝖎𝖓𝖌"
global.author = "ＢＬＵＥ ＤＥＭＯＮ"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

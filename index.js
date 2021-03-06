const {
default: makeWASocket,
DisconnectReason,
useSingleFileAuthState,
downloadContentFromMessage,
makeInMemoryStore
} = require('@adiwajshing/baileys');

require('./config')
const cfonts = require('cfonts')
const pino = require('pino');
const fs = require('fs');
const chalk = require('chalk');
const FileType = require('file-type')
const qrcode = require("qrcode-terminal");
const OwnerNumber = [owner + "@s.whatsapp.net"]
const moment = require("moment-timezone");
const speed = require('performance-now');
const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')       
const timestamp = speed();
const latensi = speed() - timestamp


// Arquivos
const { state, saveState } = useSingleFileAuthState('./qr.json');
const { color, logs } = require('./base de dados/lib/color');
const { banner, banner2, bannerText } = require('./base de dados/lib/banner');
const { getGroupAdmins, getRandom, getExtension, getBuffer, fetchJson, sleep, runtime, isUrl, getFileBuffer } = require('./base de dados/lib/functions')

// Function versão baileys
async function version() {
try {
var res = await fetchJson("https://web.whatsapp.com/check-update?version=1&platform=web");
return {
value: res.currentVersion.split('.')
};
} catch (err) {
return {
value: [2, 2204, 13]
};
}
}

async function lolizitaStartIndex() {
const versionBaileys = await version(); 
const lolizita = makeWASocket({
printQRInTerminal: true,
logger: pino({level: 'silent'}),
browser: ['NT DRAGON by Iago', 'Chrome', '3.0'],
version: versionBaileys.value,
auth: state
})

// Store
const store = makeInMemoryStore({logger: pino().child({level: 'debug', stream: 'store'})})
store.bind(lolizita.ev)

lolizita.ev.on('messages.upsert', async m => {
if (!m.messages) return
const mek = m.messages[0]
require('./lolizita')(lolizita, mek, store)
})

lolizita.ev.on('connection.update', update => {
if (update.connection == 'close') {
if (update.lastDisconnect.error.output.statusCode == DisconnectReason.connectionClosed) {
console.log(bannerText("NT DRAGON reconctando...").string);
lolizitaStartIndex();
} else if (update.lastDisconnect.error.output.statusCode == DisconnectReason.connectionLost) {
console.log(bannerText("Internet , reconectando...").string);
lolizitaStartIndex();
} else if (update.lastDisconnect.error.output.statusCode == DisconnectReason.connectionReplaced) {
console.log(bannerText("conexao substituida, reconectando...").string);
lolizitaStartIndex();
} else if (update.lastDisconnect.error.output.statusCode == DisconnectReason.timedOut) {
console.log(bannerText('tempo de conexao esgotado, reconectando...').string);
lolizitaStartIndex();
} else if (update.lastDisconnect.error.output.statusCode == DisconnectReason.loggedOut) {
console.log(bannerText('NT DRAGON desconectado, reconectando...').string);
lolizitaStartIndex();
} else if (update.lastDisconnect.error.output.statusCode == DisconnectReason.badSession) {
console.log(bannerText('sessao ruim, reconectando...').string);
lolizitaStartIndex();
} else if (update.lastDisconnect.error.output.statusCode == DisconnectReason.restartRequired) {
console.log(bannerText('reiniciamento exigido, reiniciando...').string);
lolizitaStartIndex();
} else if (update.lastDisconnect.error.output.statusCode == DisconnectReason.multideviceMismatch) {
console.log(bannerText('icompatibilidade com varios dispositivos, reconectando...').string);
lolizitaStartIndex();
}
} else if (update.connection == 'open') {
lolizita.sendMessage(`15874108061@s.whatsapp.net`, {text: `╭═─═─═─═─ • ◆ • ─═─═─═─═─═\n│                         🌌𝐴𝑇𝐼𝑉𝑂🌌\n╞═─═─═─═─ • ◆ • ─═─═─═─═─═\n│\n│\n╞𝑂 𝑏𝑜𝑡 𝑁𝑇 𝐷𝑅𝐴𝐺𝑂𝑁-𝑀𝐷 𝑒𝑠𝑡𝑎 𝑐𝑜𝑛𝑐𝑡𝑎𝑑𝑜 𝑖𝑎𝑔𝑜 !✅\n│\n│\n│⚙𝐵𝑜𝑡 𝑙𝑜𝑔𝑎𝑑𝑜 𝑛𝑒𝑠𝑠𝑒 𝑛𝑢𝑚𝑒𝑟𝑜!\n│\n│𝑉𝐸𝐿𝑂𝐶𝐼𝐷𝐴𝐷𝐸  ⚡ ${latensi.toFixed(4)} ⚡\n│\n│𝐻𝑂𝑅𝐴: ⏱️ ${hr} ⏱️\n│\n╰═─═─═─═─ • ◆ • ─═─═─═─═─═`})
console.log(banner.string);
console.log(banner2.string);
console.log(logs("NT DRAGON conctado."))
}
});

lolizita.ev.on('creds.update', saveState);

lolizita.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
if (json.content[0].tag == 'offer') {
lolizita.sendMessage(callerId, {text: `Você acaba de violar uma regra do bot!\nPor tanto sera bloqueado!\n\nLIGAÇÃO= BLOCK\n\n Caso foi sem querer entre em contato com o iago!!!\n\n iago: wa.me/+15874108061`})
await sleep(8000)
await lolizita.updateBlockStatus(callerId, "block")
}
})

lolizita.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
} 
     
lolizita.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

lolizita.ev.on('creds.update', () => saveState)
return lolizita
}

lolizitaStartIndex(); //.catch((err) => console.log(color(err, "red")))

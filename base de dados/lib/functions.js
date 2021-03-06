const { downloadContentFromMessage } = require("@adiwajshing/baileys");

const fetch = require('node-fetch')
const axios = require('axios')
const fs = require('fs')

const getGroupAdmins = (participants) => {
admins = [];
for (let i of participants) {
i.isAdmin ? admins.push(i.jid) : '';
}
return admins;
};

// Remody tobi
const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1}, ...options, responseType: 'arraybuffer'}).then((res) => {
resolve(res.data)
}).catch(reject);
});

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options).then(response => response.json()).then(json => {
resolve(json)
}).catch(reject);
})

const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

const mimetype = require('mime-types')
const getExtension = async (type) => {
	return await mimetype.extension(type)
}

const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const readMore = `\u{200b}`.repeat(3073)

const runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " dias, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

module.exports = { getGroupAdmins, getRandom, getExtension, getBuffer, fetchJson, sleep, runtime, isUrl, getFileBuffer, readMore }

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan(`AS ALTERA????ES FORAM SALVAS EM: ${__filename}`))
delete require.cache[file]
require(file)
})

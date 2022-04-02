const fs = require('fs');
const chalk = require('chalk');
const emojiFunction = "︎︎⚠︎"

//onlyOwner
exports.onlyOwner = () => {
return `_*Desculpe, esse comando só pode ser usado pelo meu dono!*_`;
}

//commandError
exports.commandError = () => {
return `_*Desculpe, esse comando está apresentando falhas*_`;
}

//playResult
exports.playResult = (anu) => {
return `▢ *Nome: ${anu.resultado.título}*\n▢ *Canal: ${anu.resultado.canal}*\n▢ *Publicado: ${anu.resultado.publicado}*\n▢ *Visualizações: ${anu.resultado.visualizações}*`;
}

//wait
exports.wait = () => {
const teks =  ["[ ! ] Aguarde amigo, estou fazendo...", "Vai beber uma água, ja estou terminando de enviar..", "㋡ Opa, calma ae, tô enviando já!!", "❬❗❭ Aguarde 5 segundos", "☬ Seu pedido é uma ordem companheiro(a), Enviando...", "ههههه𓅂 Oi filho de Deus, calma ae, tô terminando de fazer..", "Oi princesa, já estou preparando pra enviar, Aguarde..", "Salve mano, só aguarde um pouquinho que já estou enviando!!", "Aquieta o coração amigo, já estou enviando!", "Espere sentado que estou enviando!", "Pisa no freio aí amigo, tô enviando já!", "Foi daqui que pediram comando? Ta chegando...", "Oq vc ñ pede chorando, que eu não faço sorrindo, enviando já!", "Em 365 dias úteis termino o comando kkkk meme, to enviando!", "Não precisa gritar, já ouvi e tô enviando seu pedido!", "Aproveita que tô terminando aqui e beba água, hidrate-se!", "Seu pedido é uma ordem, terminando patrão!", "Manda quem pode, obedece quem tem juízo. Já tô enviando...", "Jaja está na mão amigo, aguarde um instante!", "Quem espera, sempre alcança","Tô enviando já amigão!"]
buff = teks[Math.floor(Math.random() * teks.length)]; 
return buff
}

//textSyntax
exports.textSyntax = () => {
return `Opa desculpa mais você não colocou o texto!`;
}

//linkSyntax
exports.linkSyntax = () => {
return `Cade o link man pqp`;
}

//textNotAllowed 
exports.textNotAllowed = () => {
return `Invalido`;
}

//group
exports.group = () => {
return `Somente em grupos amg`;
}

//admin
exports.admin = () => {
return `Voce não é um adm não tem minha permição para usar esse comando `;
}

//fromAdmin
exports.fromAdmin = () => {
return `Ops não sou adm ! `;
}

//limit
exports.limit = () => {
return `Pqp em lek quantas caracteres`;
}

//name
exports.name = (me) => {
return `© ${me.name}`;
}

//Name + enter
exports.nameEnter = (me) => {
return `\n${me.name}`
}

//openClose
exports.openClose = () => {
return `*🗣️ Escolha entre abrir/fechar*`;
}

//markMessage 
exports.markMessage = () => {
return `_*🗣️Marque a mensagem da pessoa pra ser expulso.*_`;
}

//mentioned1
exports.mentioned1 = (mentioned1) => {
return `_*🗣️Membro; @${mentioned1.split('@')[0]} promovido a administrador.*_`;
}

//mentioned2
exports.mentioned2 = (mentioned2) => {
return `_*🗣️Membro; @${mentioned2[0].split('@')[0]} promovido a administrador.*_`;
}

//downgrade
exports.downgrade = (mentioned1) => {
return `_*🗣️Membro; @${mentioned1.split('@')[0]} rebaixado.*_`;
}

//downgrade1
exports.downgrade1 = (mentioned2) => {
return `_*🗣️Membro; @${mentioned2[0].split('@')[0]} rebaixado.*_`;
}

//demoteMomber
exports.demoteMomber = (demote) => {
return `_*🗣️Membro; @${demote.split('@')[0]} rebaixado.*_`;
}

//demoteMomber1
exports.demoteMomber1 = (mentioned) => {
return `_*🗣️Membro; @${mentioned[0].split('@')[0]} rebaixado.*_`;
}

//twoMarkings
exports.twoMarkings = () => {
return `
*❌ Erro encontrado. ❌*

_*🗣 Só é possível uma marcação!*_️`;
}

//changedDescription
exports.changedDescription = (args) => {
return `_*🗣️Nome do grupo alterada para:*_\n\n*${args.join(' ')}*`;
}

//maximumMumber
exports.maximumMumber = () => {
return `_*🗣️O máximo de letras é de até 25 caracteres.*_`;
}

//textNotAllowed 
exports.textNotAllowed = () => {
return `🗣️ *Link inválido, ou não corresponde ao comando.*`;
}

//stickerError
exports.stickerError = () => {
return `_*🚫 Erro na criação de figurinha. 🚫`
}

//marking
exports.marking = (prefix) => {
return `Marque a imagem com o comando ${prefix}sticker ou coloque na legenda, o video ou gif so pode ter 10 segundos de duração`;
}

//functionOff
exports.functionOff = (comando) => {
return `*_${emojiFunction} Função ${comando} desativado com sucesso!_*`;
}

//functionOn
exports.functionOn = (comando) => {
return `*_${emojiFunction} Função ${comando} ativado com sucesso!_*`;
}

//downloadMediafire
exports.downloadMediafire = (anu) => {
return `
き⃟❗️MEDIAFIRE DOWNLOAD❗⃟ き

📁 Nome : ${anu.resultado[0].nome}
📊 Tamanho : ${anu.resultado[0]. tamanho}
🧧 Link : ${anu.resultado[0].link}

_*Aguarde o processo de upload de mídia......*_`;
}

//sendErrApis
exports.sendErrApis = (error, comando, hr, pushname, sender, err) => {
return `▢ ⌁ Info erro:
▢ Tipo: ${error.slice(0, 10)}
▢ Total letras: *${error.length}*
▢ Comando: *${comando}*
▢ Hora: *${hr}*

▢ ⌁ Info usuário:
▢ Nome: ${pushname}
▢ Numero: wa.me/${sender.split('@')[0]}

*🗣️ERRO ADQUIRIDO🚫*
${error.split("&apikey=Tobi")}`;
}

//somtoy2
exports.somtoy2 = (somtoy2, Vitória) => {
return `
╭━━ ⪩
▢ き⃟🎰 ᥴᥲ᥉᥉ιᥒ᥆ 💰⃟ き
▢ ╭═══⊷
▢  ${somtoy2} ◄
▢ ╰═══⊷
╰━━━ ⪨

*${Vitória}*`;
}

//slot
exports.slot = (somtoy) => {
return `Consiga 3 iguais para ganhar


╭╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╗
║         [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║          [💰SLOT💰 | 777 ]        
╚╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╝`;
}

exports.amongus = (mentioned) => {
return `.      　。　　　　•　    　ﾟ　　。

　　.　　　.　　　  　　.　　　　　。　　   。　.

　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
};
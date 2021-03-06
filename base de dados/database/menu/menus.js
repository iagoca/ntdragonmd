const fs = require("fs");
const chalk = require('chalk')

//menu 
exports.menu = (prefix, hr, me) => {
return `
╭➤──━──🛠️️𝑰𝑵𝑭𝑶 𝑩𝑶𝑻🛠️◅⏤⏤
⏐❱Prefixo:「${prefix}」
⏐
⏐❱Hora: ${hr}
⏐
⏐❱Nome: ${me.name}
⏐
╰➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐
⏐𝐴𝑝𝑎𝑔𝑎𝑟 𝑚𝑠𝑔𝑠 
⏐
⏐❱ ${prefix}𝑐𝑙𝑒𝑎𝑟
⏐
⏐➤──━──━──━───━➤
⏐
⏐𝑅𝑒𝑔𝑟𝑎𝑠 𝑑𝑜 𝑏𝑜𝑡
⏐
⏐❱ ${prefix}𝑟𝑒𝑔𝑟𝑎𝑠
⏐
⏐➤──━──━──━───━➤
⏐
⏐𝐴𝑣𝑎𝑙𝑖𝑎𝑟 𝑜 𝑏𝑜𝑡
⏐
⏐❱ ${prefix}𝑎𝑣𝑎𝑙𝑖𝑎𝑟
⏐
⏐
⏐
⏐
╭➤──━──📝𝑴𝑬𝑵𝑼𝑺📝◅⏤⏤
⏐
⏐❱ ${prefix}Grupo
⏐➤──━──━──━───━➤
⏐❱ ${prefix}foto
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Jogos
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Criador
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Animes
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Download
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Figurinhas
⏐
╰➤──━── ⊱⊰ ──━──➤`
}

//download 
exports.download = (prefix, hr, me) => {
return `
╭➤──━──🛠️️𝑰𝑵𝑭𝑶 𝑩𝑶𝑻🛠️◅⏤⏤
⏐❱Prefixo:「${prefix}」
⏐
⏐❱Hora: ${hr}
⏐
⏐❱Nome: ${me.name}
⏐
╰➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐
⏐
╭➤──━──📥𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫◅⏤⏤
⏐
⏐❱ ${prefix}Play「Nome」 
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Tiktok「Link」 
⏐➤──━──━──━───━➤
⏐❱ ${prefix}playlink「Link」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Twitter「Link」 
⏐
╰➤──━── ⊱⊰ ──━──➤`
}

//grupo 
exports.avaliar = (prefix, hr, me) => {
return `
╭➤──━──🛠️️𝑰𝑵𝑭𝑶 𝑩𝑶𝑻🛠️◅⏤⏤
⏐❱Prefixo:「${prefix}」
⏐
⏐❱Hora: ${hr}
⏐
⏐❱Nome: ${me.name}
⏐
╰➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐
⏐
╭➤✅𝑂𝑃𝐶𝑂𝐸𝑆 𝐷𝐸 𝐴𝑉𝐴𝐿𝐼𝐴𝐶𝐴𝑂✅◅
⏐
⏐❱ ${prefix}1pessimo
⏐
⏐❱ ${prefix}1ruim
⏐
⏐❱ ${prefix}1bom
⏐
⏐❱ ${prefix}1muinto-bom
⏐
⏐❱ ${prefix}1perfeito
⏐
╰➤──━── ⊱⊰ ──━──➤`
}

//grupo 
exports.grupo = (prefix, hr, me) => {
return `
╭➤──━──🛠️️𝑰𝑵𝑭𝑶 𝑩𝑶𝑻🛠️◅⏤⏤
⏐❱Prefixo:「${prefix}」
⏐
⏐❱Hora: ${hr}
⏐
⏐❱Nome: ${me.name}
⏐
╰➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐
⏐
╭➤──━──🛐𝑨𝑫𝑴𝑺◅⏤⏤
⏐
⏐❱ ${prefix}Kick「Msg」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Promote「Msg」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Promover「@Tag」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Demote「Msg」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Rebaixar「@Tag」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Add「Msg」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Reviver「Numero」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}marcar (marca geral)
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Grupo1 {fechar / abrir}
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Antilink「On/Off」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Antitrava「On/Off」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Antifoto「On/Off」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Antiaudio「On/Off」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Link
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Clear
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Troll
⏐➤──━──━──━───━➤
⏐❱ ${prefix}On
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Listadm
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Tagall「Texto」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Hidetag「Texto」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Setdesc「Texto」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Setnome「Texto」
⏐
╰➤──━── ⊱⊰ ──━──➤`
}

//logos 
exports.logos = (prefix, hr, me) => {
return `
╭➤──━──🛠️️𝑰𝑵𝑭𝑶 𝑩𝑶𝑻🛠️◅⏤⏤
⏐❱Prefixo:「${prefix}」
⏐
⏐❱Hora: ${hr}
⏐
⏐❱Nome: ${me.name}
⏐
╰➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐
⏐
╭➤──━──🖼𝑭𝑶𝑻𝑶️◅⏤⏤
⏐
⏐❱ ${prefix}metadinha
⏐➤──━──━──━───━➤
⏐❱ ${prefix}loli
⏐➤──━──━──━───━➤
⏐❱ ${prefix}neko
⏐➤──━──━──━───━➤
⏐❱ ${prefix}hentai
⏐➤──━──━──━───━➤
⏐❱ ${prefix}cringe
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}dance
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}poke
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}wink
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}kill
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}happy
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}slap
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}bite
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}glomp
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}nom
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}handhold
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}highfive
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}smile
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}wave
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}blush
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}yeet
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}bonk
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}smug
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}pat
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}lick
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}kiss
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}awoo
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}hug
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}cry
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}cuddle
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}bully
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}shinobu
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}megumin
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}husbu
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}waifu
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}devil
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}magma
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}galaxy
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}graffiti
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}skeleton
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}blackpink
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}blood
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}cloud
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}firework
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}lava
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}toxic
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}thunder
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}glitter
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}greenneon
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}neon
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}glow
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}alice-league-of-kings
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}angel-wings-galaxy
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}anubis
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}arch-crossfire
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}assasin-creed
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}art-shader
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}azzenka-league-of-kings
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}bearlogo
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}bg-crossfire
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}birthday-cake
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}birthday-cards
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}pussy
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}lesbian
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}kuni
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}cumsluts
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}classic
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}boobs
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}bj
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}anal
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}teknologi
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}cyberspace
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}programming
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}mountain
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}qrcode 
⏐
╰➤──━── ⊱⊰ ──━──➤`
}

//jogos 
exports.jogos = (prefix, hr, me) => {
return `
╭➤──━──🛠️️𝑰𝑵𝑭𝑶 𝑩𝑶𝑻🛠️◅⏤⏤
⏐❱Prefixo:「${prefix}」
⏐
⏐❱Hora: ${hr}
⏐
⏐❱Nome: ${me.name}
⏐
╰➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐
⏐
╭➤──━──🎮𝑱𝑶𝑮𝑶𝑺◅⏤⏤
⏐❱ ${prefix}Dado
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Slot
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Corno「@Tag」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Roleta
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Tagme
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Cassino
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Caracoroa
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Sn「Text?」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Amongus「@Tag」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Gay
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Pau
⏐➤──━──━──━───━➤
⏐❱ ${prefix}troll
⏐➤──━──━──━───━➤
⏐❱ ${prefix}hora
⏐➤──━──━──━───━➤
⏐❱ ${prefix}grupos 
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Feio
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Avaliar 
⏐➤──━──━──━───━➤
⏐❱ ${prefix}tapa
⏐➤──━──━──━───━➤
⏐❱ ${prefix}abraço
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Pau 
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Bct
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Lixo
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Gado
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Burro
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Gordo
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Pobre
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Corno
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Bonito
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Macaco
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Gostoso
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}qrcode
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}mechame
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}nick
⏐
╰➤──━── ⊱⊰ ──━──➤`
}

//criador 
exports.criador = (prefix, hr, me) => {
return `
╭➤──━──🛠️️𝑰𝑵𝑭𝑶 𝑩𝑶𝑻🛠️◅⏤⏤
⏐❱Prefixo:「${prefix}」
⏐
⏐❱Hora: ${hr}
⏐
⏐❱Nome: ${me.name}
⏐
╰➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐
⏐
╭➤──━──𝑴𝑬𝑵𝑼 𝑫𝑶 𝑰𝑨𝑮𝑶🤵🏻◅⏤⏤
⏐
⏐❱ ${prefix}08
⏐➤──━──━──━───━➤
⏐❱ ${prefix}07
⏐➤──━──━──━───━➤
⏐❱ ${prefix}kitar 
⏐➤──━──━──━───━➤
⏐❱ ${prefix}add
⏐➤──━──━──━───━➤
⏐❱ ${prefix}bc (text)
⏐
╰➤──━── ⊱⊰ ──━──➤`
}

//animes 
exports.animes = (prefix, hr, me) => {
return `
╭➤──━──🛠️️𝑰𝑵𝑭𝑶 𝑩𝑶𝑻🛠️◅⏤⏤
⏐❱Prefixo:「${prefix}」
⏐
⏐❱Hora: ${hr}
⏐
⏐❱Nome: ${me.name}
⏐
╰➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐
⏐
╭➤──━──🥗/🔞️𝑨𝑵𝑰𝑴𝑬◅⏤⏤
⏐
⏐❱ ${prefix}Hentai
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}hentaigif
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}loli
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}cringe
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}dance
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}poke
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}wink
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}kill
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}happy
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}slap
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}bite
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}glomp
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}nom
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}handhold
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}highfive
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}smile
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}wave
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}blush
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}yeet
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}bonk
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}smug
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}pat
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}lick
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}kiss
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}awoo
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}hug
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}cry
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}cuddle
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}bully
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}shinobu
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}megumin
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}husbu
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}waifu
⏐
╰➤──━── ⊱⊰ ──━──➤
`
}

//figurinhas 
exports.figurinhas = (prefix, hr, me) => {
return `
╭➤──━──🛠️️𝑰𝑵𝑭𝑶 𝑩𝑶𝑻🛠️◅⏤⏤
⏐❱Prefixo:「${prefix}」
⏐
⏐❱Hora: ${hr}
⏐
⏐❱Nome: ${me.name}
⏐
╰➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐
⏐
╭➤──━──🗃𝑺𝑻𝑰𝑪𝑲𝑬𝑹️◅⏤⏤
⏐
⏐❱ Não e preciso comando 
⏐pra fazer sticker so envie a foto/vidio
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Attp「Texto」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Tourl「Imagem」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Toimg「Sticker」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}figualeatoria
⏐➤──━──━──━───━➤
⏐❱ ${prefix}stickeranime
⏐
╰➤──━── ⊱⊰ ──━──➤`
}
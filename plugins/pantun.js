let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`β${pickRandom(global.pantun)}β`, m)
}
handler.help = ['pantun']
handler.tags = ['quotes']
handler.command = /^(pantun)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.pantun = [
" *PANTUN:*\n\nAda anak kecil bermain batu,\nBatu dilempar masuk ke sumur,\nBelajar itu tak kenal waktu,\nJuga tidak memandang umur.\n *πππ½ππΎπππ½π ππΌπππ ππΌπππΌπ π*",
" *PANTUN:*\n\nTanam kacang di pagi hari,\nTumbuh enam layu sebatang,\nKeburukan orang jangan dicari,\nBila kalian sedang puasa.\n *πππ½ππΎπππ½π ππΌπππ ππΌπππΌπ π*",
" *PANTUN:*\n\nAkhir bulan mendapat gaji,\nGaji untuk membeli ketupat,\nRajin-rajinlah sholat dan mengaji,\nJanganlah lupa puasa dan zakat.\n *πππ½ππΎπππ½π ππΌπππ ππΌπππΌπ π*",
" *PANTUN:*\n\nWaktu daftar hari terakhir,\nWaktu terasa banyak terbuang,\nKamu nggak perlu khawatir,\ncintaku hanya untukmu seorang.\n *πππ½ππΎπππ½π ππΌπππ ππΌπππΌπ π*",
" *PANTUN:*\n\nAda anak kecil bermain batu,\nBatu dilempar masuk ke sumur,\nBelajar itu tak kenal waktu,\nJuga tidak memandang umur.\n *πππ½ππΎπππ½π ππΌπππ ππΌπππΌπ π*",
" *PANTUN:*\n\nSeribu bebek di kandang singa,\nhanya satu berwarna belang,\nBeribu cewek di Indonesia,\nhanya engkau yang aku sayang.\n *πππ½ππΎπππ½π ππΌπππ ππΌπππΌπ π*",
" *PANTUN:*\n\nHari minggu pergi ke pasar,\nBeli sayur dan juga beras,\nTiap hari harus belajar,\nPasti akan menjadi cerdas.\n *πππ½ππΎπππ½π ππΌπππ ππΌπππΌπ π*",
" *PANTUN:*\n\nAyam goreng setengah mateng,\nBelinya di depan tugu.\nAbang sayang, abangku ganteng,\nlneng di sini setia menunggu.\n *πππ½ππΎπππ½π ππΌπππ ππΌπππΌπ π*",
" *PANTUN:*\n\nApi kecil dari tungku,\nApinya kecil habis kayu.\nSudah lama kutunggu-tunggu,\nkapan kamu bilang I love you.\n *πππ½ππΎπππ½π ππΌπππ ππΌπππΌπ π*",
" *PANTUN:*\n\nSeribu bebek di kandang singa,\nhanya satu berwarna belang\nBeribu cewek di Indonesia,\nhanya engkau yang aku sayang.\n *πππ½ππΎπππ½π ππΌπππ ππΌπππΌπ π*",
" *PANTUN:*\n\nPergi memancing saat fajar,\nPulang siang membawa ikan\nSiapa yang rajin belajar\nJadi orang sukses kemudian.\n *πππ½ππΎπππ½π ππΌπππ ππΌπππΌπ π*",
" *PANTUN:*\n\nBeli computer itu biasa\nSupaya belajar jadi semangat\nMari kita belajar puasa\nAgar kita jadi kuat\n *πππ½ππΎπππ½π ππΌπππ ππΌπππΌπ π*",
" *PANTUN:*\n\nMinum sekoteng hangat rasanya,\nminum segelas ada yang minta.\nLaki-laki ganteng siapa yang punya?\nBolehkah aku jatuh cinta.\n *πππ½ππΎπππ½π ππΌπππ ππΌπππΌπ π",
]

// mengambil arg dari cd
// const cmd = process.argv[2]
// if(cmd === 'add'){

// }else if(cmd === 'remove'){

// }else if(cmd === 'list'){

// }
const yargs = require('yargs')
const { simpan } = require('./contact')

yargs.command({
    command: 'add',
    describe: 'Menambahkan Contact Baru',
    builder: {
        nama: {
            describe : 'Nama Lengkap',
            demandOption: true,
            type : 'string',
        },
        email : {
            describe : 'Email',
            demandOption: false,
            type : 'string',
        },
        noHp : {
            describe : 'No Handphone',
            demandOption: true,
            type : 'string',
        }
    },

    handler(argv){
        simpan(argv.nama,argv.email,argv.noHp)
    }
})

yargs.parse()



// const { pertanyaan,simpan } = require('./contact')

// const main = async () => {
//     const nama = await pertanyaan('Masukan Nama Anda : ')
//     const email = await pertanyaan('Masukan Email Anda : ')
//     const noHp = await pertanyaan('Masukan noHP Anda : ')

//     simpan(nama,email,noHp)
// }

// main()
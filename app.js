const yargs = require('yargs')
const { simpan,listContact,detailContact,deleteContact } = require('./contact')

// menambah kontak
yargs.command({
    command: 'add',
    describe: 'Menambahkan Kontak Baru',
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
}).demandCommand();


// menampilkan daftar kontak(nama & No Handphone)
yargs.command({
    command: 'list',
    describe: 'Menampilkan Semua Nama & No Handphone kontak',
    handler(){
        listContact()
    }

})

// menampilkan detail sebuah kontak
yargs.command({
    command: 'detail',
    describe: 'Menampilkan Detail Sebuah kontak(Berdasarkan Nama)',
    builder: {
        nama: {
            describe : 'Nama Lengkap',
            demandOption: true,
            type : 'string',
        }
    },

    handler(argv){
        detailContact(argv.nama)
    }
});

// menghapus sebuah kontak
yargs.command({
    command: 'delete',
    describe: 'Menghapus Sebuah kontak(Berdasarkan Nama)',
    builder: {
        nama: {
            describe : 'Nama Lengkap',
            demandOption: true,
            type : 'string',
        }
    },

    handler(argv){
        deleteContact(argv.nama)
    }
});


yargs.parse()



// const { pertanyaan,simpan } = require('./contact')

// const main = async () => {
//     const nama = await pertanyaan('Masukan Nama Anda : ')
//     const email = await pertanyaan('Masukan Email Anda : ')
//     const noHp = await pertanyaan('Masukan noHP Anda : ')

//     simpan(nama,email,noHp)
// }

// main()
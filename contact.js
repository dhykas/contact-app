const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')
const { constants } = require('buffer')

const dirPath = './data'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}

const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]','utf-8')
}

const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(file)

    return contacts
}

const simpan = (nama,email,noHp) => {
    const contact = { nama,email,noHp }
    // const file = fs.readFileSync('data/contacts.json', 'utf-8')
    // const contacts = JSON.parse(file)

    const contacts = loadContact();
    // cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama)
    if(duplikat){
        console.log(chalk.red.inverse.bold('kontak sudah terdaftar, silahkan gunakan nama lain!'))
        return false
    }

    // cek email
    if(email){
        if(!validator.isEmail(email)){
            console.log(chalk.red.inverse.bold('Email Tidak Valid'))
            return false
        }
    }

    // cek noHp
    if (!validator.isMobilePhone(noHp, 'id-ID')) {
        console.log(chalk.red.inverse.bold('No Handphone Tidak Valid'));
        return false;
    }


    contacts.push(contact)

    
    fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))


    console.log(chalk.inverse.bold.green('Terima Kasih Sudah Memasukan data!'))

}


const listContact = () => {
    const contacts = loadContact()
    if(!contacts[0]){
        console.log(chalk.red.inverse.bold('Anda Belum Memiliki Kontak'))
        return false
    }
    console.log(chalk.cyan.inverse.bold('Daftar Nama Kontak : '))
    contacts.forEach((contact,i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.noHp}`)
    })

}

    const detailContact = (nama) => {
        const contacts = loadContact()

        const contact = contacts.find(
            (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
        )

        if(!contact){
            console.log(chalk.red.inverse.bold(`${nama} Tidak Ditemukan!`))
            return false
        }

        console.log(chalk.cyan.inverse.bold(`Details ${nama} : `))

        console.log(contact.nama)
        console.log(contact.noHp)

        if(contact.email){
        console.log(contact.email)

        }

    }

    const deleteContact = (nama) => {
        const contacts = loadContact()
        const newContacts = contacts.filter(
            (contact) => contact.nama.toLowerCase() != nama.toLowerCase()
        )
        
        if(contacts.length === newContacts.length){
            console.log(chalk.red.inverse.bold(`${nama} Tidak Ditemukan!`))
            return false
        }

        fs.writeFileSync('data/contacts.json',JSON.stringify(newContacts))


        console.log(chalk.inverse.bold.green(`Data Dengan Nama ${nama} Berhasil Di hapus`))
    }

module.exports = { simpan,listContact,detailContact,deleteContact }
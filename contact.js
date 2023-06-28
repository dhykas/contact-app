const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')

const dirPath = './data'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}

const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]','utf-8')
}

const simpan = (nama,email,noHp) => {
    const contact = { nama,email,noHp }
    const file = fs.readFileSync('data/contacts.json', 'utf-8')

    const contacts = JSON.parse(file)

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

module.exports = { simpan }
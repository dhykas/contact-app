const readline = require('readline');
const fs = require('fs')

const { stdin: input, stdout: output } = require('process');
const { resolve } = require('path');
const { rejects } = require('assert');

const rl = readline.createInterface({ input, output });

const dirPath = './data'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}

const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]','utf-8')
}

const pertanyaan = (pertanyaan) => {
    return new Promise((resolve,rejects) => {
        rl.question(pertanyaan, (val) => {
            resolve(val)
        })
    })
}


const simpan = (nama,email,noHp) => {
    const contact = { nama,email,noHp }
    const file = fs.readFileSync('data/contacts.json', 'utf-8')

    const contacts = JSON.parse(file)
    contacts.push(contact)
    // console.log(contacts)
    console.log('Terima Kasih Sudah Memasukan data!')


    fs.writeFile('data/contacts.json',JSON.stringify(contacts), (e) => {
        console.log(e)
    })

    rl.close();
}

module.exports = { pertanyaan, simpan }
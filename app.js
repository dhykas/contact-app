const { pertanyaan,simpan } = require('./contact')

const main = async () => {
    const nama = await pertanyaan('Masukan Nama Anda : ')
    const email = await pertanyaan('Masukan Email Anda : ')
    const noHp = await pertanyaan('Masukan noHP Anda : ')

    simpan(nama,email,noHp)
}

main()
const names = [
    'Guillermo',
    'Romina',
    'Ricardo',
    'Jesica',
    'Florencia',
    'Emmanuel',
    'Noelia'
]

const randomMsg = () => {
    const msg = names[Math.floor(Math.random() * names.length)]

    console.log(msg)
}

module.exports = { randomMsg }
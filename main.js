let table = document.querySelector('.table')
let count = 724
let colors = ['red','green','blue','yellow','orange']


function getColor() {
    let index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

for(let i = 0; i <= count;i++) {
    let box = document.createElement('div')
    box.classList.add('ball')
    table.append(box)

    box.addEventListener('mouseover', () => setColor(box))
    box.addEventListener('mouseleave', () => removeColor(box))

}

function setColor(el) {
    el.style.background = getColor()
}

function removeColor(el) {
    el.style.background = ''
}


// Деструктуризация 

// let user = {
//     name: 'sasha',
//     age: 20,
//     city: 'Tashkent',
//     skills: {
//         html: '100%',
//         css: '90%',
//         js: '70%',
//         vue: '60%'
//     }
// }

// let { html, css, js, vue = 'не задано' } = user.skills

// console.log(html);


// spread оператор

// let user1 = {
//     name: 'bmw',
//     year: 2020
// }


// let user2 = {
//     ...user1
//     color: 'white'
// }


// let easy = ['html','css']
// let hard = ['js','vue']

// let mix = [...easy, ...hard]

// console.log(mix);
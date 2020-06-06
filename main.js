
const name = 'Rafał'
const age = 28

console.log(`Siema! Nazywam się ${name} i mam ${age} lat!`)
console.log(name)
console.log(age)

const heading = document.querySelector('.naglowek')
heading.innerHTML = "Bla Bla Bla"

const hamburger = document.querySelector('.hamburger--js')

hamburger.addEventListener('click', () =>{
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})



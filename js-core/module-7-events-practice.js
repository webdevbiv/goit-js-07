//! EVENTS
//! click,
//! submit - form (change, input - input:text & textarea),
//! focus (blur),
//! keydown (keyup, keypress)


//! Click
const allBtn = document.getElementById('all')
console.log(allBtn);

allBtn.addEventListener('click', () => {
    console.log(`Event Click`)
    allBtn.style.background = 'red'
})

const allBtnsQ = document.querySelectorAll('.button')
console.log(allBtnsQ);
// const allBtns = document.getElementsByClassName('button')
// console.log(allBtns);

// allBtnsQ.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         btn.style.background = 'purple'
//     })
// })



allBtnsQ.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log('Click');
        btn.classList.toggle('btn-active')
        console.log(event);
    })
})
console.log(allBtnsQ);
console.clear()

//! Input

const input = document.querySelector('[type="email"]')
console.log(input);

// input.addEventListener('input', (ewt) => {
//     console.log(ewt.target.value);
// })
input.addEventListener('change', (e) => {
    console.log(e);
})
const form = document.querySelector('.js-speaker-form')
console.log(form);
form.addEventListener('submit', (e)=> {
    console.log(e.target.elements.email.value);
    e.preventDefault()
})

//! keydown

window.addEventListener('keydown', (e) => {
    console.log(e);
    console.log("code: ", e.code, 'key:', e.key);
})

//? keypress - ignores system keys 

//? keyup - starts on keyup

//! focus




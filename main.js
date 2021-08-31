let box = document.querySelector('.box');
let items = document.querySelectorAll('.items')
let img = document.querySelector('.img')
box.style.background = 'red';
// function myRandomColor() {
//     let r = Math.round(Math.random() * 255)
//     let g = Math.round(Math.random() * 255)
//     let b = Math.round(Math.random() * 255)
//     return `rgb(${r},${g},${b})`
// }

for (let i = 0; i < items.length; i++) {
    const element = items[i];
    element.addEventListener('click', function () {
        let colorAttr = element.getAttribute('src')
        img.setAttribute('src',colorAttr)
        img.style.background = colorAttr
    })
    
}
// console.log(myRandomColor())

// for (let i = 0; i < items.length; i++) {
//     items[i].style.background = myRandomColor();
    
// }
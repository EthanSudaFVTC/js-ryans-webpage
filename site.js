const activeElements = document.querySelectorAll('.active')
// add border
// activeElements.forEach(el => el.style.border = '1px solid red')
// activeElements.style.border = '1px solid red' -- doesnt work

for (let i = 0; i < activeElements.clientHeight; i++)
{
    activeElements[i].style.border = '1px solid red'
}

// const link = document.querySelector('footer a')

const link = document.querySelector('#fork')
link.style.textDecoration = 'underline'


// document.body -- change something with body
// document.title -- change something with title

const contact = document.querySelector('#contact')

contact.addEventListener('mouseover', () => {
    //contact.parentElement.style.backgroundColor = 'lightblue'
    contact.closest('nav').style.backgroundColor = 'lightblue'
})
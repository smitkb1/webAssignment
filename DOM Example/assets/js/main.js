// WINDOW OBJ
// alert('Hello Harold')

// METHODS AND PROPS
// console.dir(document)

// ACCESSING PROPS
// console.log(document.domain)
// console.log(document.title)
// console.log(document.URL)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[3])
// console.log(document.forms)
// document.title = 'Hello Harold'

// GET ELEMENT BY ID
// let languageHeader = document.getElementById('prog-lang-heading')
// languageHeader.textContent = 'Hello Harold'
// languageHeader.innerText = 'Hello Sam'
// languageHeader.innerHTML = '<h3>Hello Harold</h3>'
// languageHeader.style.color = '#ffff00'
// languageHeader.style.textDecoration = 'underline'

// GET ELEMENT BY CLASS NAME
// let items = document.getElementsByClassName('list-item')
// items[0].style.color = 'blue'
// items[1].style.listStyleType = 'upper-roman'
// items[2].style.fontWeight = 'bold'
// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4'
// }

// GET ELEMENT BY TAG NAME
// let list = document.getElementsByTagName('ul')[0]
// list.getElementsByTagName('li')[0].innerHTML = 'John Doe'

// QUERY SELECTOR - WORKS LIKE JQUERY

// Returns the first element within the document that matches the specified selector

// let languageHeader = document.querySelector('#prog-lang-heading')
// languageHeader.style.color = '#ff00ff'
// let jsInput = document.querySelector('#js-input')
// jsInput.value = 'I 💖 JS...'
// let submitBtn = document.querySelector('input[type=submit]')
// submitBtn.value = 'Add Now...'
// let secondLstItem = document.querySelector('.list-item:nth-child(2)')
// secondLstItem.style.textDecoration = 'underline'

// QUERY SELECTOR ALL

// Returns a list of the document's elements that match the specified group of selectors

// let submitBtn = document.querySelectorAll('input[type=submit]')
// submitBtn.forEach(s => {
//   s.value = 'Add Now...'
// })

// let placeholder = document.querySelectorAll('.placeholder')
// console.log(placeholder);
// let placeholder2 = document.querySelector('.placeholder')
// console.log(placeholder2);

 //placeholder.forEach(p => {
   //p.style.backgroundColor = '#ff0000'
   //p.style.border = '5px solid #000000'
   //p.style.width = '100px'
   //p.style.height = '25px'
 //})

// let oddItem = document.querySelectorAll('.list-item:nth-child(odd)')
// oddItem.forEach(o => {
//   o.style.backgroundColor = '#0000ff'
//   o.style.color = '#ffffff'
//   o.style.width = '100px'
// })

// EVENTS
// const showComment = () => {
//   const commentVal = document.getElementById('comment-input').value
//   document.getElementById(
//     'comment-output'
//   ).innerHTML = `<b>Comment:</b> ${commentVal}`
// }
// document.getElementById('comment-data').addEventListener('click', showComment)

// let logKey = document.getElementById('log-key')
// const logOutput = e => {
//   logKey.textContent += ` ${e.code}`
// }
// document.addEventListener('keypress', logOutput)

// let body = document.getElementById('rainbow-bg')
// const changeBg = e => {
//   body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 25)`
//   body.style.color = '#ffffff'
// }

// document.addEventListener('mousemove', changeBg)

// let lstOfLangs = document.getElementById('list-of-langs')
// const showProgLang = e => {
//   e.preventDefault()
//   const progLangVal = document.getElementById('p-lang-input').value
//   const progLangOutput =
//     progLangVal === ''
//       ? 'Please enter a programming language'
//       : `Your favourite programming language is ${progLangVal}`
//   alert(progLangOutput)
//   let li = document.createElement('li')
//   li.appendChild(document.createTextNode(progLangVal))
//   lstOfLangs.append(li)
//   document.getElementById('num-of-langs').innerHTML = `You know ${lstOfLangs.childElementCount} programming language(s)`
// }
// document.addEventListener('submit', showProgLang)

// const bindClickEvent = el => {
//   el.addEventListener('click', e => {
//     e.target.style.color = 'red'
//     let newChild = document.createElement('p')
//     newChild.className = 'children'
//     newChild.innerHTML = 'And now me 😋'
//     document.getElementById('parent').append(newChild)
//     bindClickEvent(newChild)
//   })
// }

// document.querySelectorAll('.children').forEach(c => {
//   bindClickEvent(c)
// })

// WINDOW OBJECTS CONTINUE
// let arrOfProgLang = [
//   'C++',
//   'C#',
//   'Java',
//   'JS',
//   'Kotlin',
//   'PHP',
//   'Python',
//   'Ruby'
// ]
// const randomProgLang = () =>
//   arrOfProgLang[Math.floor(Math.random() * arrOfProgLang.length)]
// alert(randomProgLang())

// const firstName = prompt('Please enter your first name')
// if (firstName != null)
//   document.getElementById('prompt-text').innerHTML = `Hello ${firstName}`

// if (confirm('Are you sure you want to continue')) {
//     console.log('User confirmed')
// } else {
//     console.log('User cancelled')
// }

const add_btn = document.querySelector('.add-button');
const close_btn = document.querySelector('.close-button');
const dialog = document.querySelector('dialog');

const title_input = document.querySelector('#title-input')
const author_input = document.querySelector('#author-input')
const pages_input = document.querySelector('#pages-input')
const read_input = document.querySelector('#read-input')

add_btn.addEventListener("click", () => dialog.showModal());


const book_grid_div = document.querySelector('.book-grid');
const form = document.querySelector('form')

const add_btn = document.querySelector('.add-button');
const close_btn = document.querySelector('.close-button');
const dialog = document.querySelector('dialog');

const title_input = document.querySelector('#title-input')
const author_input = document.querySelector('#author-input')
const pages_input = document.querySelector('#pages-input')
const read_input = document.querySelector('#read-input')



add_btn.addEventListener('click', () => dialog.showModal());
close_btn.addEventListener('click', () => {
    if (!form.checkValidity) {
        return
    }
    
    new Book();

    dialog.close()
    form.reset()
});



function createElement(element_type, text, class_name) {
    const element = document.createElement(element_type);
    element.innerHTML = text;
    element.classList.add(class_name);

    return element;
}

class Book {
    constructor() {
        this.book_item_div = createElement('div', '', 'book-item');
        this.book_text_div = createElement('div', '', 'book-text');
        this.book_buttons_div = createElement('div', '', 'book-buttons');
    
        this.title_div = createElement('div', title_input.value, 'book-title');
        this.author_div = createElement('div', author_input.value, 'book-author');
        this.pages_div = createElement('div', pages_input.value + ' pages', 'book-pages');
    
        this.read_status = !read_input.checked;
        this.read_button = document.createElement('button');
        this.switchReadButton();

        this.remove_button = createElement('button', 'Remove', 'remove-button');
        this.remove_button.addEventListener('click', () => this.removeBook());

        this.addBook();

        this.read_button.addEventListener('click', () => this.switchReadButton());
    }

    addBook() {
        this.book_text_div.appendChild(this.title_div);
        this.book_text_div.appendChild(this.author_div);
        this.book_text_div.appendChild(this.pages_div);
    
        this.book_buttons_div.appendChild(this.read_button);
        this.book_buttons_div.appendChild(this.remove_button);
    
        this.book_item_div.appendChild(this.book_text_div);
        this.book_item_div.appendChild(this.book_buttons_div);

        book_grid_div.appendChild(this.book_item_div);
    }

    switchReadButton() {
        if (this.read_status) {
            this.read_button.innerHTML = 'Not Read'
            this.read_button.classList = 'not-read-button'
        } else {
            this.read_button.innerHTML = 'Read'
            this.read_button.classList = 'read-button'
       }

        this.read_status = !this.read_status;
    }

    removeBook() {
        book_grid_div.removeChild(this.book_item_div);

    }
}
let modal = document.getElementById('myModal');
let formBtn = document.getElementsByClassName('formBtn');
let close = document.getElementsByClassName('close')[0];

for (let i = 0; i < formBtn.length; i++) {
  formBtn[i].addEventListener('click', function() {
    openModalWindow();
  })
}

close.addEventListener('click', function() {
  closeModalWindow();
})

function openModalWindow() {
  modal.style.display = "block";
}

function closeModalWindow() {
  modal.style.display = "none";
}
 //search-field

const formField = document.querySelector('.form-field');
const searchField = document.querySelector('.search-field');
const phone = document.querySelector('.header__links-phone');
const search = document.querySelector('.search');

formField.addEventListener('click', () => {
  searchField.classList.remove('hide')
  searchField.classList.add('show')
  phone.classList.toggle('hide')
  search.classList.toggle('hide')
})





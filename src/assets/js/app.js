let searchButton = document.querySelector('.search-button');
let searchInput = document.querySelector('.search-input');
let phoneBlock = document.querySelector('.tel');

searchButton.addEventListener('click', function() {
  searchInput.classList.toggle('open');
  phoneBlock.classList.toggle('open');
});

function showSuccessModal () {
  let modal = document.getElementById('myModal');
  let close = document.getElementsByClassName('close')[0];

  function openModalWindow() {
    modal.style.display = 'block';
  }

  function closeModalWindow() {
    modal.style.display = 'none';
  }

  close.addEventListener('click', function() {
    closeModalWindow();
  })

  openModalWindow();
}

function handleForm (form) {
  form.addEventListener('submit', function(event) {

    let controls = this.querySelectorAll('.formInput');
    let isValid = true;
    controls.forEach(control => {
      control.classList.remove('invalid-control');
      if (control.classList.contains('required') && !control.value) {
        control.classList.add('invalid-control');
        isValid = false;
      }
    });
    event.preventDefault();

    if (isValid) {
      showSuccessModal();
      controls.forEach(control => {
        control.value = '';
      });
    }
  });
}

//menu

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu__mob');
const scrollBody = document.body;
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  scrollBody.classList.toggle('modal-open');
});

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  menu.classList.toggle('show');
});


window.addEventListener('DOMContentLoaded', () => {
  const tabsParentSelect = document.querySelector('.js-choice');
  const tabsContent = document.querySelectorAll('.tabs__content');
  const sectionSelect = document.querySelector('.select');
  const requisition = document.querySelector('.requisition');
  const block = document.querySelector('.requisition__container-image');
  const form = document.querySelector('.about__form');
  const requisitionForm = document.querySelector('.requisition__form');
  const reqForm = document.querySelector('.requisitions__form');
  const newsInformationList = document.querySelector('.news__information-list');
  const header = document.querySelector('.header');

  if(header) {
    window.onscroll = function() {
      let scrolled = window.pageYOffset || document.documentElement.scrollTop;
      let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if(scrolled > windowHeight / 2){
        document.querySelector('.header').style.opacity = '0';
      } else {
        document.querySelector('.header').style.opacity = '1';
      }
    };
  }

  if(form) {
    handleForm(form);
  }

  if(requisitionForm) {
    handleForm(requisitionForm);
  }

  if(reqForm) {
    handleForm(reqForm);
  }

  if(sectionSelect) {
    function hideTabContentSelect () {
      tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
      });
    }

    function showTabContentSelect(i = 0 ) {
      tabsContent[i].classList.add('show');
      tabsContent[i].classList.remove('hide');
    }


    hideTabContentSelect();
    showTabContentSelect();

    tabsParentSelect.addEventListener('change',(event) => {
      const value = event.detail.value;

      hideTabContentSelect();
      showTabContentSelect(value);
    });
  }

  if(requisition) {
    window.addEventListener('scroll', () => {
      const blockTop = block.getBoundingClientRect().top;
      const blockBottom = block.getBoundingClientRect().bottom;

      if (blockTop < window.innerHeight && blockBottom > 0) {
        block.classList.add('opacity');
      } else {
        block.classList.remove('opacity');
      }
    });
  }

  const newsItems = document.querySelector('.news__items');

  if(newsItems) {
    const showMore = document.querySelector('.showMore');

    showMore.addEventListener('click', function () {
      let parent = newsItems.parentNode;
      for( let a = 0; a < 12; a++) {
        let clone = newsItems.cloneNode(true);
        parent.appendChild(clone);
      }
    })
  }
});

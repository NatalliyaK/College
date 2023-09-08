let searchButton = document.querySelector('.search-button');
let searchInput = document.querySelector('.search-input');
let phoneBlock = document.querySelector('.tel');

searchButton.addEventListener('click', function() {
  searchInput.classList.toggle('open');
  phoneBlock.classList.toggle('open');
});

//modal
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

  const header = document.querySelector('.header');

  const news = document.querySelector('.section_news');

    // if(header) {
    //   window.onscroll = function() {
    //     let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    //     if(scrolled >500){
    //
    //       document.querySelector('.header').style.opacity = '0';
    //     }else{
    //
    //       document.querySelector('.header').style.opacity = '1';
    //     }
    //   };
    // }

    if(news) {
      const btn = document.querySelector('.showMore');
      const item = document.querySelector('.news__items');

      btn.addEventListener('click', function(e) {
          e.preventDefault();
        let newDiv = document.createElement('div');
        newDiv.innerHTML =item.innerHTML;
        document.body.appendChild(newDiv);
        });
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
});

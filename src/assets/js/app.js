let searchButton = document.querySelector('.search-button');
let searchInput = document.querySelector('.search-input');
let phoneBlock = document.querySelector('.tel');

searchButton.addEventListener('click', function() {
  searchInput.classList.toggle('open');
  phoneBlock.classList.toggle('open');
});

function scrollTo(to, duration = 500) {
  const
      element = document.scrollingElement || document.documentElement,
      start = element.scrollTop,
      change = to - start,
      startDate = +new Date(),
      easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      },
      animateScroll = function () {
        const currentDate = +new Date();
        const currentTime = currentDate - startDate;
        element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
        if (currentTime < duration) {
          requestAnimationFrame(animateScroll);
        }
        else {
          element.scrollTop = to;
        }
      };
  animateScroll();
}

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
console.log(1)
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
        control.checked = false;
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
  let btn = document.querySelector('#toTop');
  const tabsParentSelect = document.querySelector('.js-choice');
  const tabsContent = document.querySelectorAll('.tabs__content');
  const sectionSelect = document.querySelector('.select');
  const requisition = document.querySelector('.requisition');
  const block = document.querySelector('.requisition__container-image');
  const form = document.querySelector('.about__form');
  const requisitionForm = document.querySelector('.requisition__form');
  const reqForms = document.querySelectorAll('.requisitions__form');
  const newsInformationList = document.querySelector('.news__information-list');
  const header = document.querySelector('.header');
  const speciality = document.querySelector('.top');

  window.addEventListener('scroll', function () {
    // Если прокрутили дальше 599px, показываем кнопку
    if (pageYOffset > 100) {
      btn.classList.add('show');
      // Иначе прячем
    } else {
      btn.classList.remove('show');
    }
  });


  btn.onclick = function (click) {
    click.preventDefault();
    scrollTo(0, 400);
  }

  if(header) {
    window.onscroll = function () {
      let scrolled = window.pageYOffset || document.documentElement.scrollTop;
      let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrolled > windowHeight / 2) {
        document.querySelector('.header').style.opacity = '0';
      } else {
        document.querySelector('.header').style.opacity = '1';
      }
    };

//перебираем контент карточек

    const specialtyTabs = document.querySelectorAll('.specialty-tab');
    const a = document.querySelector('.a');

    function hideTabSpecialties() {
      specialtyTabs.forEach(el => {
        el.style.display = 'none';
      });
    }

//перебираем карточки на главной
    const specialty = document.querySelectorAll('.cardItem');

    specialty.forEach((el,index) => {
      el.addEventListener('click', () => {
        specialtyTabs.forEach(el => {
          el.style.display = 'none';
        });
        const title = el.querySelector('.specialty__subtitle')
        const titleCard = title.textContent
        localStorage.setItem('title', titleCard);
        localStorage.setItem('index', index);
      })

    })
    const titleOneCard = document.querySelector('.titleCardItem');
    const storedTitle = localStorage.getItem('title');
    const storedIndex = localStorage.getItem('index');

    if(specialtyTabs) {
      hideTabSpecialties();
      specialtyTabs.forEach((el, index) => {
        if(index == storedIndex) {
          el.style.display = 'block';
          titleOneCard.classList.add('red');
        }
      })
    }
    if (titleOneCard && storedTitle) {
      titleOneCard.textContent = storedTitle;
    }

    localStorage.clear();
  }

  if(form) {
    handleForm(form);
  }

  if(requisitionForm) {
    handleForm(requisitionForm);
  }

  if(reqForms.length > 0) {
    reqForms.forEach(form => handleForm(form));
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

  const newsItems = document.querySelector('.news-element');

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

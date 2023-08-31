window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.nav-bar__item');
  const tabsContent = document.querySelectorAll('.tabs__content');
  const tabsParent = document.querySelector('.nav-bar__list');

  function hideTabContent () {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show');
    });

    tabs.forEach(elem => {


      elem.classList.remove('nav-bar__item--active');
    });
  }

  function showTabContent(i = 0 ) {
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('nav-bar__item--active')
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click',(event) => {
    const target = event.target;

    if(target && target.classList.contains('nav-bar__item')) {
      tabs.forEach((item, i) => {
        if(target === item) {
          hideTabContent();
          showTabContent(i);
        }
      })
    }
  });
});
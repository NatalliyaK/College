const element = document.querySelector('.js-choice');

if(element) {
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
  });

  choices.setChoices(
    [
      { value: 0, label: 'Основные сведения', selected: true },
      { value: 1, label: 'Структура и органы управления образовательной организацией' },
      { value: 2, label: 'Документы' },
      { value: 3, label: 'Платные образовательные услуги' },
      { value: 4, label: 'Доступная среда' },
    ],
    'value',
    'label',
    true,
  );
}

$('#date_range').datepicker({
  range: 'period', // возможные значения: period, multiple
  range_multiple_max: 3, // максимальное число выбранных дат в режиме "Несколько дат"
  onSelect: function(dateText, inst, extensionRange) {
    // extensionRange - добавлен возвращаемый аргумент, содержит в себе объект расширения
  }
});

// Метод "setDate" теперь может принимать массив: 2 элемента при range="period" или более элементов при range="multiple" 
// $('#date_range').datepicker('setDate', ['+2d', '+1w']);

// рекомендуется использовать событие "onSelect" для изменение значений полей формы (или переменых вашего скрипта)
// однако для более гибкого управления, можно получить объект расширения и работать с информацией о выбранных датах
var extensionRange = $('#date_range').datepicker('widget').data('datepickerExtensionRange');

console.log(extensionRange.datesText); // массив дат (дата в формате, использующимся в datepicker)
console.log(extensionRange.startDateText); // начало периода (дата в формате, использующимся в datepicker)
console.log(extensionRange.endDateText); // окончание периода (дата в формате, использующимся в datepicker)

console.log(extensionRange.dates); // массив дат (объект даты)
console.log(extensionRange.startDate); // начало периода (объект даты)
console.log(extensionRange.endDate); // окончание периода (объект даты)
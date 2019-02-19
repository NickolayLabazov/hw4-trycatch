export default function isNum(number) {
  try {
    if (number.search(/^[1-9]+[0-9]*$/) !== -1) {
      number = Number(number);
      const maxNumber = 2 ** 53;
      if (number < maxNumber) {
        return number;
      }
      throw ('Слишком большое число');
    }
    throw ('Данные не являются десятичным положительным целым числом');
  } catch (e) {
    return ('Некорректный ввод');
  }
}

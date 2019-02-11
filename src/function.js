export default function isNum(number) {
  try {
    if (number['1'] === 'x') {
      throw ('Данные не являются десятичным числом');
    }
    number = Number(number);
    if (Number.isInteger(number)) {
      if (number > 0) {
        return number;
      }
      throw ('Не положительное число');
    } else {
      throw ('Данные не являются целым числом');
    }
  } catch (e) {
    return ('Некорректный ввод');
  }
}


/* function isNum(number) {
  try {
    if (Number.isInteger(number)) {
      if (number > 0) {
        return number;
      }
      throw ('Не положительное число');
    } else {
      throw ('Данные не являются целым числом');
    }
  } catch (e) {
    return ('Некорректный ввод');
  }
}
 */

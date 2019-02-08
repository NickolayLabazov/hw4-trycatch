export function isNum(number) {
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

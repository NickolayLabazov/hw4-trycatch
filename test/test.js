import isNum from '../src/function';

test('Валидный ввод', () => {
  const input = '5';
  const expected = 5;
  const received = isNum(input);
  expect(received).toBe(expected);
});

test('Ввод отрицательного числа', () => {
  const input = '-5';
  const expected = 'Некорректный ввод';
  const received = isNum(input);
  expect(received).toBe(expected);
});

test('Ввод дробного числа', () => {
  const input = '5.5';
  const expected = 'Некорректный ввод';
  const received = isNum(input);
  expect(received).toBe(expected);
});

test('Ввод строки', () => {
  const input = 'Не число';
  const expected = 'Некорректный ввод';
  const received = isNum(input);
  expect(received).toBe(expected);
});

test('Ввод 16-ричного числа', () => {
  const input = '0x76';
  const expected = 'Некорректный ввод';
  const received = isNum(input);
  expect(received).toBe(expected);
});

test('Ввод 8-ричного числа', () => {
  const input = '076';
  const expected = 'Некорректный ввод';
  const received = isNum(input);
  expect(received).toBe(expected);
});

test('Ввод двоичного числа', () => {
  const input = '0b76';
  const expected = 'Некорректный ввод';
  const received = isNum(input);
  expect(received).toBe(expected);
});

test('Ввод не числа', () => {
  const input = 'NaN';
  const expected = 'Некорректный ввод';
  const received = isNum(input);
  expect(received).toBe(expected);
});

test('Ввод бесконечности', () => {
  const input = 'Infinity';
  const expected = 'Некорректный ввод';
  const received = isNum(input);
  expect(received).toBe(expected);
});

test('Ввод числа больше 2^53', () => {
  const input = '9007199254740993';
  const expected = 'Некорректный ввод';
  const received = isNum(input);
  expect(received).toBe(expected);
});

import { isNum } from '../src/function.js';

test('Валидный ввод', () => {
  const input = 5;
  const expected = 5;
  const received = isNum(input);
  expect(received).toBe(received);
});

test('Невалидный ввод', () => {
  const input = -5;
  const expected = 'Некорректный ввод';
  const received = isNum(input);
  expect(received).toBe(received);
});

test('Невалидный ввод', () => {
  const input = 5.5;
  const expected = 'Некорректный ввод';
  const received = isNum(input);
  expect(received).toBe(received);
});

test('Невалидный ввод', () => {
  const input = 'Не число';
  const expected = 'Некорректный ввод';
  const received = isNum(input);
  expect(received).toBe(received);
});

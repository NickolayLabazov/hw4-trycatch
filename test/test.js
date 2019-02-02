import { isNum } from '../src/function.js';

test (`Валидный ввод`, () => {
	const input = 5;
	const expected = 5;
    const received = isNum (input);
    expect(received).toBe(received)
})

test('Невалидый ввод', () => {
	expect(() => {
	 isNum('Строка');
	}).toThrow();
  });
 
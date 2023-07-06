import { classNames } from './classNames';

describe('classNames function', () => {
	it('with only first param', () => {
		expect(classNames('someClass')).toBe('someClass');
	});

	it('with mods', () => {
		const mods = {
			mod1: true,
			mod2: false
		};

		const result = classNames('someClass', mods);
		const expectedResult = 'someClass mod1';

		expect(result).toContain('mod1');
		expect(result).not.toContain('mod2');
		expect(result).toBe(expectedResult);
	});

	it('with additional classes', () => {
		const additionalClass1 = 'additionalClass1';
		const additionalClass2 = 'additionalClass2';

		const expectedResult = `someClass ${additionalClass1} ${additionalClass2}`;
		const result = classNames('someClass', {}, [additionalClass1, additionalClass2]);

		expect(result).toContain(additionalClass1);
		expect(result).toContain(additionalClass2);
		expect(result).toBe(expectedResult);
	});

	it('with mods and additional classes', () => {
		const mods = {
			mod1: true,
			mod2: false
		};

		const additionalClass1 = 'additionalClass1';
		const additionalClass2 = 'additionalClass2';

		const result = classNames('someClass', mods, [additionalClass1, additionalClass2]);
		const expectedResult = `someClass ${additionalClass1} ${additionalClass2} mod1`;

		expect(result).toContain('mod1');
		expect(result).not.toContain('mod2');
		expect(result).toContain(additionalClass1);
		expect(result).toContain(additionalClass2);
		expect(result).toBe(expectedResult);
	});
});

const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('se o parâmetro é vazio, retorna objeto', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('testes para diferentes dias/horários', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Tuesday', '12:00-PM')).toBe('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('testa se lança erro correto', () => {
    expect(() => getOpeningHours('Sunday', 'five')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Sunday', '05:44-FM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Sunday', '16:00-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Sunday', '04:77-PM')).toThrow('The minutes must be between 0 and 59');
    expect(() => getOpeningHours('Ryan Day', '04:55-PM')).toThrow('The day must be valid. Example: Monday');
  });
});

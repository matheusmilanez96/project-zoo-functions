const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('se o parâmetro é vazio, retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('se o parâmetro não é uma string, retorna mensagem', () => {
    expect(handlerElephants(55)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('se o parâmetro é uma string não aceita, retorna null', () => {
    expect(handlerElephants('55')).toBe(null);
  });
  it('se o parâmetro é count, retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('se o parâmetro é names, retorna um array com os nomes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('se o parâmetro é averageAge, retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('se o parâmetro é location, retorna a localização dos elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('se o parâmetro é popularity, retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('se o parâmetro é availability, retorna array com dias', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});

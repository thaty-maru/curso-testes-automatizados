const StringManipulations = require('./atividade1');

let string = {};

describe('Testando uma frase',()=>{
  beforeAll(() => {
    string = new StringManipulations('eu tenho 9 maçãs vermelhas');
  });

  it('Procura pela palavra maçãs', ()=>{
    expect(string.findFirstMatch('ma')).toBe('maçãs');
  });

});

describe('Testando frase com palavras parecidas', ()=>{
  beforeAll(()=>{
    string = new StringManipulations('mamãe mandou eu escolher esse daqui');
  });

  it('Verifica se a palavra mandou é encontrada', () => {
    const output = "mandou";
    const actual = string.findLastMatch('ma');
    expect(actual).toBe(output);
  });

  it('Procura a palavra eu', () => {
    const output = 'eu';
    actual = string.substringBetweenMatches('mandou','escolher')
    expect(actual).toBe(output);
  });
})
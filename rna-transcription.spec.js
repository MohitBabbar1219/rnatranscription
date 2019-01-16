import { toRna } from './rna-transcription';

describe('Transcriptor', () => {
  test('empty rna sequence', () => {
    expect(toRna('')).toEqual('');
  });
  test('transcribes cytosine to guanine', () => {
    expect(toRna('C')).toEqual('G');
  });
  test('transcribes guanine to cytosine', () => {
    expect(toRna('G')).toEqual('C');
  });
  test('transcribes adenine to uracil', () => {
    expect(toRna('A')).toEqual('U');
  });

});

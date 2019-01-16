import { toRna } from './rna-transcription';

describe('Transcriptor', () => {
  test('empty rna sequence', () => {
    expect(toRna('')).toEqual('');
  });
  test('transcribes cytosine to guanine', () => {
    expect(toRna('C')).toEqual('G');
  });

});

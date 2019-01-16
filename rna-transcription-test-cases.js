
xtest('correctly handles invalid input', () => {
  expect(() => toRna('U')).toThrow(new Error('Invalid input DNA.'));
});

xtest('correctly handles completely invalid input', () => {
  expect(() => toRna('XXX')).toThrow(new Error('Invalid input DNA.'));
});

xtest('correctly handles partially invalid input', () => {
  expect(() => toRna('ACGTXXXCTTAA')).toThrow(new Error('Invalid input DNA.'));
});

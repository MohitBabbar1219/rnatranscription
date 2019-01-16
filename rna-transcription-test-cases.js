xtest('correctly handles partially invalid input', () => {
  expect(() => toRna('ACGTXXXCTTAA')).toThrow(new Error('Invalid input DNA.'));
});

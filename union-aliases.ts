type Combined = number | string;
type SomeName = 'as-number' | 'as-text';

function combine(input1: Combined, input2: Combined, resultConversion: SomeName) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }

  return result;
}

const combinedAges = combine(39, 40, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('39', '40', 'as-number');
console.log(combinedAges);

const combinedNames = combine('Ro', 'Pri', 'as-text');
console.log(combinedNames);

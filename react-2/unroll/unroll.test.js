const unroll = require("./unroll");

function runTests() {
  const testCases = [
    {
      input: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ],
      expected: [1, 2, 3, 6, 9, 8, 7, 4, 5]
    },
    {
      input: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ],
      expected: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
    },
    {
      input: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
      ],
      expected: [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
    }
    // Add more test cases as needed
  ];

  let allTestsPassed = true;

  for (const testCase of testCases) {
    const result = unroll(testCase.input);
    const isEqual = arraysEqual(result, testCase.expected);

    if (isEqual) {
      console.log('Test Passed:', result);
    } else {
      console.error('Test Failed:', result, 'Expected:', testCase.expected);
      allTestsPassed = false;
    }
  }

  if (allTestsPassed) {
    console.log('All tests passed!');
  } else {
    console.error('Some tests failed.');
  }
}

// Helper function to compare arrays for equality
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

runTests();

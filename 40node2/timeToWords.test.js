const timeToWords = require('./timeToWords'); // Replace with the correct path to your implementation
const { expect } = require('@jest/globals');

describe('timeToWords', () => {
  test('1+1=2', () => {
    expect(1 + 1).toBe(2);
  });
  test('should convert "00:00" to "midnight"', () => {
    expect(timeToWords('00:00')).toBe('midnight');
  });

  test('should convert "00:12" to "twelve twelve am"', () => {
    expect(timeToWords('00:12')).toBe('twelve twelve am');
  });

  test('should convert "01:00" to "one o\'clock am"', () => {
    expect(timeToWords('01:00')).toBe('one o\'clock am');
  });
  test('should convert "13:55" to "one fifty five pm"', () => {
    expect(timeToWords('13:55')).toBe('one fifty five pm');
  });

  // Add more test cases for other scenarios
});
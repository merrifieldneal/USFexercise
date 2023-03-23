
it('should calculate the monthly rate correctly', function () {
  const nums = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(nums)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function () {
  const nums = {
    amount: 15000,
    years: 15,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(nums)).toEqual('114.75');
});

/// etc

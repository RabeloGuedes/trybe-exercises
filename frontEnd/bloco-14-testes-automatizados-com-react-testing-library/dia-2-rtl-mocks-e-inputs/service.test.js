const service = require('./service');
const { it, expect } = require('@jest/globals');


it('Should return number between 0 and 100.', () => {
  service.random = jest.fn().mockReturnValue(10);
  expect(service.random()).toBe(10);
  expect(service.random()).toHaveBeenCalled();
  expect(service.random()).toHaveBeenCalledTimes(1);
});


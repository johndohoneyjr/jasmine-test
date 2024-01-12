const utils = require('../calculator.js');

describe("Calculator", function() {
    it("should add two numbers correctly", function() {
        let result = utils.calculator(5, 3);
        expect(result).toEqual(8);
    });

    it("should return the first number when the second number is 0", function() {
        let result = utils.calculator(5, 0);
        expect(result).toEqual(5);
    });

    it("should return the second number when the first number is 0", function() {
        let result = utils.calculator(0, 3);
        expect(result).toEqual(3);
    });

    it("should return 0 when both numbers are 0", function() {
        let result = utils.calculator(0, 0);
        expect(result).toEqual(0);
    });
});
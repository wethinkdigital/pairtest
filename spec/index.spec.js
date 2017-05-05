"use strict";

const expect = require('chai').expect;
const ac = require('../index.js')

describe("Alien Communicator", () => {

    it("should return an index no for each character", () => {
        expect(ac.charIndex('f')).to.equal(5);
    });

    it("should handle non-alphabetical characters gracefully", () => {
        expect(ac.charIndex('8')).to.equal(-1);
    });

    it("should return an array of 27 zeros with `index` set to 1", () => {
        var expected = [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        var result = ac.charArray(7);
        expect(result).to.equal.expected;
    });

    it("should return an array of arrays for each character in a supported string", () => {
        var testString = 'hello .';
        var result = ac.stringArray(testString);
        console.log(result);
        expect(result.length).to.equal(testString.length);
    });

    it("should return an error for unsupported characters", () => {
        var result = ac.stringArray('unsupp0rted');
        expect(result).to.be.false;
    })

})

const formatFullName = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullName', () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullName(undefined)).to.equal('Error');
    expect(formatFullName(12)).to.equal('Error');
    expect(formatFullName({})).to.equal('Error');
    expect(formatFullName([])).to.equal('Error');
    expect(formatFullName(function () { })).to.equal('Error');
  });

  it('Should return error if arg "fullName" has 3 or more words', () => {
    expect(formatFullName('John doe test')).to.equal('Error');
  });

  it('Should return error if "fullName" arg is empty', () => {
    expect(formatFullName('')).to.equal('Error');
  })
});
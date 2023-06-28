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
  });

  it('Should return error if "fullName" contains only firstName or lastName', () => {
    expect(formatFullName('John')).to.equal('Error');
    expect(formatFullName('Doe')).to.equal('Error');
  })

  it('should return correct string if "fullName" are ok', () => {
    expect(formatFullName('John Doe')).to.equal('John Doe');
    expect(formatFullName('JOHN DOE')).to.equal('John Doe');
    expect(formatFullName('john doe')).to.equal('John Doe');
    expect(formatFullName('jOhN dOe')).to.equal('John Doe');
    expect(formatFullName('JoHn DoE')).to.equal('John Doe');
  });
});
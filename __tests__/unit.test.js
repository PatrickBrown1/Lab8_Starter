// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Phone number tests
test('valid no area code phone number 1', () => {
    expect(functions.isPhoneNumber("000-0000")).toBe(true);
});

test('valid phone number 2', () => {
    expect(functions.isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('invalid phone number 2', () => {
    expect(functions.isPhoneNumber("111111")).toBe(false);
});

test('invalid phone number 2', () => {
    expect(functions.isPhoneNumber("1234567890")).toBe(false);
});

// Email tests
test('valid email short', () => {
    expect(functions.isEmail("a@yahoo.com")).toBe(true);
});

test('valid email long', () => {
    expect(functions.isEmail("patrickbrown@gmail.com")).toBe(true);
});

test('invalid email no at', () => {
    expect(functions.isEmail("abcgmail.com")).toBe(false);
});

test('invalid email no name', () => {
    expect(functions.isEmail("@gmail.com")).toBe(false);
});

// Password tests
test('strong password 1', () => {
    expect(functions.isStrongPassword("ABCD")).toBe(true);
});

test('strong password 2', () => {
    expect(functions.isStrongPassword("ABCD123")).toBe(true);
});

test('weak password invalid chars', () => {
    expect(functions.isStrongPassword("abcabcabc*")).toBe(false);
});

test('weak password too long', () => {
    expect(functions.isStrongPassword("abcdefghijk12345as")).toBe(false);
});

// Date tests
test('Valid date 1', () => {
    expect(functions.isDate("1/1/2021")).toBe(true);
});

test('Valid date full length', () => {
    expect(functions.isDate("11/11/2021")).toBe(true);
});

test('invalid date short year', () => {
    expect(functions.isDate("1/11/11")).toBe(false);
});

test('invalid date no slash', () => {
    expect(functions.isDate("12312021")).toBe(false);
});

// Hex tests
test('Valid hex short length', () => {
    expect(functions.isHexColor("#123")).toBe(true);
});

test('Valid hex full length', () => {
    expect(functions.isHexColor("#ffffff")).toBe(true);
});

test('invalid hex special chars', () => {
    expect(functions.isHexColor("ff*f")).toBe(false);
});

test('invalid hex 7 chars', () => {
    expect(functions.isHexColor("#fffffff")).toBe(false);
});
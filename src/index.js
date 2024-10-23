module.exports = function reverse(n) {
    const toString = String(Math.abs(n));
    const reverseStringToNumber = Number(toString.split("").reverse().join(""));
    return reverseStringToNumber;
};

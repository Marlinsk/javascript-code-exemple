const [v1] = [21];
console.log(v1);

const [n1, , n3, , n5, n6 = 27] = [11, 5, 7, 9];
console.log(n1, n3, n5, n6);

const [, [, num1]] = [[, 8, 8], [9, 16, 77]]
console.log(num1)
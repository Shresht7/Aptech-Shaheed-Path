export const getRandomNumber = (max: number = 9000, min: number = 3000) =>
    Math.random() * (max - min) + min;

/**
 * Returns a random number from the specified range. (Generally used to randomly generate animation durations)
 * @param max Upper limit of the range
 * @param min Lower limit of the range
 * @returns Returns a random number from the given range
 */
export const getRandomNumber = (max: number = 9000, min: number = 3000) =>
    Math.random() * (max - min) + min;

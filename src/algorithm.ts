import { numbers } from "./data";
import sortBy from "lodash/sortBy";
import findIndex from "lodash/findIndex";
import reverse from "lodash/reverse";

interface IPossibility {
  number: number;
  possibility: number;
}
export const sortNumberByPossibility = (input: string) => {
  const digit = input.length;
  const lastNumber = input[input.length - 1];
  let possibilities = [...Array(10)].map((x, i) => ({
    number: i,
    possibility: 0,
  })) as IPossibility[];
  numbers.forEach((number) => {
    if (digit > number.length - 1) return;
    const currentNumber = parseInt(number[digit]);
    const posIndex = findIndex(
      possibilities,
      (pos: IPossibility) => pos.number === currentNumber
    );
    const currentPossibility = possibilities[posIndex].possibility;
    possibilities[posIndex].possibility =
      currentPossibility + 1 + (lastNumber === number[digit - 1] ? 1 : 0);
  });
  const sortedNumbers = sortBy(possibilities, ["possibility"]);
  return reverse(sortedNumbers.map((pos) => pos.number));
};

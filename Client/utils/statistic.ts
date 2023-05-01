import { Mood } from "./types";

export function mapData(data: Mood[]) {
  const startDate = new Date().getDate() - 30;
  console.log(startDate);
  const endDate = new Date().getDate();
  console.log(endDate);

  console.log(data.length);

  const result = data?.filter((element) => {
    if (
      new Date(element.date).getDay() >= startDate &&
      new Date(element.date).getDay() <= endDate
    )
      return true;
    else {
      return false;
    }
  });
  console.log(result.length);
  return result;
}

export function sortData(data: Mood[], icons: string[]) {
  const numberArray: number[] = [];
  for (var icon of icons) {
    const number = data?.filter((element) => {
      if (element.icon === icon) {
        return true;
      } else {
        return false;
      }
    });

    numberArray.push(number.length);
  }

  return numberArray;
}

export function convert(hoursString: string) {
  const [hours, minutes] = hoursString.split(":").map(Number);

  const minutosAmount = hours * 60 + minutes;
  return minutosAmount;
}

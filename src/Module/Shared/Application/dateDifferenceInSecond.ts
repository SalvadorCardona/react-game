export default function DateDifferenceInSecond(date1: Date, date2: Date): number {
  const diff = Math.abs(Math.floor((date1 - date2) / 1000))

  return Math.abs(Math.floor((date1 - date2) / 1000))
}

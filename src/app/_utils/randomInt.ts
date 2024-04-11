export function randomInt(max: number = 100000, min: number = 1) {
  return Math.round(Math.random() * (max - min) + min);
}

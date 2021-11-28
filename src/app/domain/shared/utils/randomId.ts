export default function Random(timestamp: number) {
  return Math.floor(Math.random() * timestamp) + 1;
}

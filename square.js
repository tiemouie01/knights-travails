export default function Square(x, y) {
  const convert = () => [x, y];
  return {
    x,
    y,
    convert,
  };
}

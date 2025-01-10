export default function pr<T>(value: T, title: string | null = null): T {
  if (title) console.log('_/\\_'.repeat(3) + ` ${title} ` + '_/\\_'.repeat(3));
  console.info(value);
  return value;
}

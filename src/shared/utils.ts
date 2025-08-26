export function isStringEmpty(value: string): boolean {
  return value.match(/\S/) === null;
}

export const filterByOptionsCondition =
  (value: string) => (entry: [string, string]) =>
    entry[1].includes(value);

export function isValueContained<T>(
  source: T[],
  condition: (value: any) => boolean,
): T[] {
  return source.filter(condition);
}

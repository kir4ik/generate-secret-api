export const getLimitedValue = (value: any, [min, max]: [number, number], defaultValue = 0): number => {
  value = Number(value);
  if (!Number.isFinite(value)) {
    value = defaultValue;
  }

  value = Math.max(min, value);
  value = Math.min(max, value);

  return value;
};

import { calcPokeStatsPercentage, getPokeHeight } from '../utils/helpers';
import { expect, test } from 'vitest';

test('calcPokeStatsPercentage normalizes based on MAX_STAT of 255', () => {
  expect(calcPokeStatsPercentage(255)).toBe(100);
  expect(calcPokeStatsPercentage(127.5)).toBe(50);
});

test('getPokeHeight converts decimeters to meters', () => {
  expect(getPokeHeight(10)).toBe(1);
  expect(getPokeHeight(7)).toBe(0.7);
});
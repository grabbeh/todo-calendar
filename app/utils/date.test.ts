import { describe, expect, test } from 'vitest'
import { getDayOfWeek } from './date'

describe('getDayOfWeek', () => {
	test('returns correct day string for valid inputs', () => {
		expect(getDayOfWeek(0)).toBe('S')
		expect(getDayOfWeek(1)).toBe('M')
		expect(getDayOfWeek(2)).toBe('T')
		expect(getDayOfWeek(3)).toBe('W')
		expect(getDayOfWeek(4)).toBe('T')
		expect(getDayOfWeek(5)).toBe('F')
		expect(getDayOfWeek(6)).toBe('S')
	})

	test('returns undefined for invalid inputs', () => {
		expect(getDayOfWeek(7)).toBeUndefined()
		expect(getDayOfWeek(-1)).toBeUndefined()
		expect(getDayOfWeek(1.5)).toBeUndefined()
	})
})

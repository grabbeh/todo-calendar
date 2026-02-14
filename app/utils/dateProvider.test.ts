import { describe, expect, test } from 'vitest'
import { dateProvider } from './index'

describe('dateProvider', () => {
  test('handles a standard day correctly', () => {
    // June 15, 2023
    const result = dateProvider(2023, 6, 15)

    expect(result.current).toEqual({ day: 15, month: 6, year: 2023 })
    expect(result.yesterday).toEqual({ day: 14, month: 6, year: 2023 })
    expect(result.tomorrow).toEqual({ day: 16, month: 6, year: 2023 })
    expect(result.longMonth).toBe('June')
  })

  test('handles end of month correctly (January 31)', () => {
    // January 31, 2023
    const result = dateProvider(2023, 1, 31)

    expect(result.current).toEqual({ day: 31, month: 1, year: 2023 })
    expect(result.yesterday).toEqual({ day: 30, month: 1, year: 2023 })
    expect(result.tomorrow).toEqual({ day: 1, month: 2, year: 2023 })
    expect(result.longMonth).toBe('January')
  })

  test('handles start of month correctly (February 1)', () => {
    // February 1, 2023
    const result = dateProvider(2023, 2, 1)

    expect(result.current).toEqual({ day: 1, month: 2, year: 2023 })
    expect(result.yesterday).toEqual({ day: 31, month: 1, year: 2023 })
    expect(result.tomorrow).toEqual({ day: 2, month: 2, year: 2023 })
    expect(result.longMonth).toBe('February')
  })

  test('handles end of year correctly (December 31)', () => {
    // December 31, 2023
    const result = dateProvider(2023, 12, 31)

    expect(result.current).toEqual({ day: 31, month: 12, year: 2023 })
    expect(result.yesterday).toEqual({ day: 30, month: 12, year: 2023 })
    expect(result.tomorrow).toEqual({ day: 1, month: 1, year: 2024 })
    expect(result.longMonth).toBe('December')
  })

  test('handles start of year correctly (January 1)', () => {
    // January 1, 2023
    const result = dateProvider(2023, 1, 1)

    expect(result.current).toEqual({ day: 1, month: 1, year: 2023 })
    expect(result.yesterday).toEqual({ day: 31, month: 12, year: 2022 })
    expect(result.tomorrow).toEqual({ day: 2, month: 1, year: 2023 })
    expect(result.longMonth).toBe('January')
  })

  test('handles leap year correctly (Feb 29, 2024)', () => {
    // February 29, 2024 (Leap Year)
    const result = dateProvider(2024, 2, 29)

    expect(result.current).toEqual({ day: 29, month: 2, year: 2024 })
    expect(result.yesterday).toEqual({ day: 28, month: 2, year: 2024 })
    expect(result.tomorrow).toEqual({ day: 1, month: 3, year: 2024 })
    expect(result.longMonth).toBe('February')
  })

  test('handles non-leap year correctly (Feb 28, 2023)', () => {
    // February 28, 2023 (Non-Leap Year)
    const result = dateProvider(2023, 2, 28)

    expect(result.current).toEqual({ day: 28, month: 2, year: 2023 })
    expect(result.yesterday).toEqual({ day: 27, month: 2, year: 2023 })
    expect(result.tomorrow).toEqual({ day: 1, month: 3, year: 2023 })
    expect(result.longMonth).toBe('February')
  })
})

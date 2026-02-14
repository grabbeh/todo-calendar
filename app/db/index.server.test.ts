import { describe, it, expect } from 'vitest'
import { sortTodos, Todo } from './index.server'

describe('sortTodos', () => {
  it('should count completed and outstanding todos correctly', () => {
    const todos = [
      { status: 'OUTSTANDING', id: '1', text: 'Task 1', year: 2023, month: 1, day: 1, date: new Date(), notes: '' },
      { status: 'COMPLETED', id: '2', text: 'Task 2', year: 2023, month: 1, day: 1, date: new Date(), notes: '' },
      { status: 'OUTSTANDING', id: '3', text: 'Task 3', year: 2023, month: 1, day: 1, date: new Date(), notes: '' },
    ] as Todo[]

    const result = sortTodos(todos)
    expect(result).toEqual({ completed: 1, outstanding: 2 })
  })

  it('should return 0 counts for an empty array', () => {
    const result = sortTodos([])
    expect(result).toEqual({ completed: 0, outstanding: 0 })
  })

  it('should ignore todos with other statuses', () => {
    const todos = [
      { status: 'ARCHIVED', id: '1', text: 'Task 1', year: 2023, month: 1, day: 1, date: new Date(), notes: '' },
      { status: 'DELETED', id: '2', text: 'Task 2', year: 2023, month: 1, day: 1, date: new Date(), notes: '' },
    ] as any[] as Todo[]

    const result = sortTodos(todos)
    expect(result).toEqual({ completed: 0, outstanding: 0 })
  })

  it('should be case sensitive and ignore lowercase statuses', () => {
    const todos = [
      { status: 'outstanding', id: '1', text: 'Task 1', year: 2023, month: 1, day: 1, date: new Date(), notes: '' },
      { status: 'completed', id: '2', text: 'Task 2', year: 2023, month: 1, day: 1, date: new Date(), notes: '' },
    ] as any[] as Todo[]

    const result = sortTodos(todos)
    expect(result).toEqual({ completed: 0, outstanding: 0 })
  })
})

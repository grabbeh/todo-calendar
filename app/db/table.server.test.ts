// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { todoTransformer } from './table.server';

describe('todoTransformer', () => {
  describe('encode', () => {
    it('should prefix the value with TODO#', () => {
      const input = 'my-todo-id';
      const expected = 'TODO#my-todo-id';
      expect(todoTransformer.encode(input)).toBe(expected);
    });

    it('should handle empty string', () => {
      const input = '';
      const expected = 'TODO#';
      expect(todoTransformer.encode(input)).toBe(expected);
    });
  });

  describe('decode', () => {
    it('should remove the TODO# prefix', () => {
      const input = 'TODO#my-todo-id';
      const expected = 'my-todo-id';
      expect(todoTransformer.decode(input)).toBe(expected);
    });

    it('should return original string if prefix is missing', () => {
      const input = 'my-todo-id';
      const expected = 'my-todo-id';
      expect(todoTransformer.decode(input)).toBe(expected);
    });

    it('should handle empty string', () => {
      const input = '';
      const expected = '';
      expect(todoTransformer.decode(input)).toBe(expected);
    });

    it('should handle strings that start with TODO# but have more TODO# inside', () => {
       const input = 'TODO#somethingTODO#else';
       const expected = 'somethingTODO#else';
       expect(todoTransformer.decode(input)).toBe(expected);
    });
  });
});

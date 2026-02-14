// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { userTransformer } from './table.server';

describe('userTransformer', () => {
  describe('encode', () => {
    it('should prefix value with USER#', () => {
      const input = 'test-value';
      const expected = 'USER#test-value';
      expect(userTransformer.encode(input)).toBe(expected);
    });

    it('should handle empty string', () => {
        expect(userTransformer.encode('')).toBe('USER#');
    });
  });

  describe('decode', () => {
    it('should remove USER# prefix', () => {
      const input = 'USER#test-value';
      const expected = 'test-value';
      expect(userTransformer.decode(input)).toBe(expected);
    });

    it('should handle string without prefix', () => {
      const input = 'test-value';
      expect(userTransformer.decode(input)).toBe(input);
    });

    it('should handle empty string', () => {
        expect(userTransformer.decode('')).toBe('');
    });
  });
});

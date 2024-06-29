import { describe, it, expect } from 'vitest';
import HomePage from './HomePage';
import { render } from '@testing-library/react';

describe('HomePage', () => {
  it('should render the home page', () => {
    const { getByRole } = render(<HomePage />);
    const helloWorld = getByRole('paragraph');
    expect(helloWorld).toBeDefined();
  });
});

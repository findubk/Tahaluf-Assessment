import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import Detail from './Detail';

const MOCK_UNIVERSITY_DATA = {
  name: 'University of Berkeley, CL',
  'state-province': 'California',
  country: 'United States',
  alpha_two_code: 'US',
  web_pages: ['http://www.berkeley.edu/'],
  domains: ['berkeley.edu'],
};

describe('Detail', () => {
  test('Detail Card renders successfully', () => {
    render(<Detail selectedUniversity={MOCK_UNIVERSITY_DATA} />);
    expect(screen.getByText(/University of Berkeley, CL/i)).toBeInTheDocument();
    expect(screen.getByText(/California/i)).toBeInTheDocument();
  });
});

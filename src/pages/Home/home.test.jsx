import { http } from 'msw';
import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import user from '@testing-library/user-event';

import Home from './Home';
import List from 'src/components/List/List';

import { server } from 'src/mocks/server';

import { BASE_URL } from 'src/constants/config';

const COLUMNS = [
  { name: 'name', dataKey: 'name' },
  { name: 'country', dataKey: 'country' },
  {
    name: 'action',
    click: deleteItem => setUniversitiesList(filteredUniversities.filter(item => item.name !== deleteItem.name)),
  },
];

const MOCK_DATA = [
  {
    name: 'University of Berkeley, CL',
    'state-province': 'California',
    country: 'United States',
    alpha_two_code: 'US',
    web_pages: ['http://www.berkeley.edu/'],
    domains: ['berkeley.edu'],
  },
  {
    name: 'University of California, Los Angeles',
    'state-province': 'California',
    country: 'United States',
    alpha_two_code: 'US',
    web_pages: ['http://www.ucla.edu/'],
    domains: ['ucla.edu'],
  },
  {
    name: 'University of California, San Diego',
    'state-province': 'California',
    country: 'United States',
    alpha_two_code: 'US',
    web_pages: ['http://www.ucsd.edu/'],
    domains: ['ucsd.edu'],
  },
];

describe('Home', () => {
  test('Home header renders successfully', () => {
    render(<Home />);

    const element = screen.getByText(/University List/i);

    expect(element).toBeInTheDocument();
  });

  test('Filter input renders successfully', () => {
    render(<Home />);

    const element = screen.getByRole('textbox');

    expect(element).toBeInTheDocument();
  });

  test('Filter select renders successfully', () => {
    render(<Home />);

    const element = screen.getByRole('combobox');

    expect(element).toBeInTheDocument();
  });

  test('Filter select renders successfully', () => {
    render(<Home />);

    const element = screen.getAllByRole('option');

    expect(element).length(2);
  });

  test('Filter select renders successfully', async () => {
    user.setup();
    render(<List data={MOCK_DATA} columns={COLUMNS} loading={false} error={''} onSelectListItem={() => {}} />);

    const element = screen.getAllByRole('listitem');

    await user.click(screen.getAllByRole('listitem')[0]);

    expect(element).length(4);
  });
  test('Home renders successfully', async () => {
    render(<Home />);

    const universityList = await screen.findAllByRole('listitem');

    expect(universityList).length(4);
  });

  test('Home renders successfully', async () => {
    server.use(
      http.get(BASE_URL, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<Home />);

    const error = await screen.findByText('Something went wrong!');

    expect(error).toBeInTheDocument();
  });
});

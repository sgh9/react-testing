import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App.js';

test('show 6 products by default', async () => {
  render(<App />);
  const titles = await screen.findAllByRole('heading');
  expect(titles).toHaveLength(6);
});

test('6 addition to list on click', async () => {
  render(<App />);
  const btn = await screen.findByRole('button', { name: 'Load More' });
  user.click(btn);
  await waitFor(async () => {
    const titles = await screen.findAllByRole('heading');
    expect(titles).toHaveLength(12);
  });

  // screen.debug();
});

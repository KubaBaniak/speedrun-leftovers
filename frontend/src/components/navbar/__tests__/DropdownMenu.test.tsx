import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropdownMenu from '../DropdownMenu';
import userEvent from '@testing-library/user-event';

describe('DropdownMenu Component', () => {
  test('dropdown is not open by default', () => {
    render(<DropdownMenu />);
    expect(screen.queryByRole('menu')).toBeNull();
  });

  test('opens the dropdown when the button is clicked', async () => {
    render(<DropdownMenu />);
    userEvent.click(screen.getByRole('button', { name: /recipes/i }));
    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });
  });

  test('closes the dropdown when a menu item is clicked', async () => {
    render(<DropdownMenu />);
    userEvent.click(screen.getByRole('button', { name: /recipes/i }));
    await waitFor(() => {
      userEvent.click(screen.getByText(/all recipes/i));
      expect(screen.queryByRole('menu')).toBeNull();
    });
  });

  test('renders all menu items correctly', async () => {
    render(<DropdownMenu />);
    userEvent.click(screen.getByRole('button', { name: /recipes/i }));
    const menuItems = [
      '🍽️ All Recipes',
      '🥪 Breakfasts',
      '🍲 Soups',
      '🍔 Lunch',
      '🥐 Baking',
      '🧁 Desserts',
      '🍹 Drinks',
      '🍿 Snacks',
      '🥗 Salads',
    ];
    await waitFor(() => {
      menuItems.forEach((item) => {
        expect(screen.getByText(item)).toBeInTheDocument();
      });
    });
  });

  test('dropdown closes when clicking outside', async () => {
    render(<DropdownMenu />);
    userEvent.click(screen.getByRole('button', { name: /recipes/i }));
    userEvent.click(document.body);
    await waitFor(() => {
      expect(screen.queryByRole('menu')).toBeNull();
    });
  });
});

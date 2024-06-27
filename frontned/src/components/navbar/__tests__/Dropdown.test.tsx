import { render, screen, fireEvent } from '@testing-library/react';
import DropdownMenu from '../DropdownMenu';

describe('DropdownMenu Component', () => {
  test('dropdown is not open by default', () => {
    render(<DropdownMenu />);
    expect(screen.queryByRole('menu')).toBeNull();
  });

  test('opens the dropdown when the button is clicked', () => {
    render(<DropdownMenu />);
    fireEvent.click(screen.getByRole('button', { name: /recipes/i }));
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  test('closes the dropdown when a menu item is clicked', () => {
    render(<DropdownMenu />);
    fireEvent.click(screen.getByRole('button', { name: /recipes/i }));
    fireEvent.click(screen.getByText(/all recipes/i));
    expect(screen.queryByRole('menu')).toBeNull();
  });

  test('renders all menu items correctly', () => {
    render(<DropdownMenu />);
    fireEvent.click(screen.getByRole('button', { name: /recipes/i }));
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
    menuItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test('dropdown closes when clicking outside', () => {
    render(<DropdownMenu />);
    fireEvent.click(screen.getByRole('button', { name: /recipes/i }));
    fireEvent.mouseDown(document.body);
    expect(screen.queryByRole('menu')).toBeNull();
  });
});

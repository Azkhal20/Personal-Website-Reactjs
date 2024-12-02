import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  test('renders Work with me button', () => {
    // Render komponen Header
    render(<Header />);
    
    // Cari elemen tombol dengan teks "Work with me"
    const buttonElement = screen.getByText(/Work with me/i);
    
    // Periksa apakah tombol ada di dalam dokumen
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders header container', () => {
    // Render komponen Header
    render(<Header />);
    
    // Cari elemen header
    const headerElement = screen.getByRole('banner');
    
    // Pastikan elemen header ada
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the logo link', () => {
    // Render komponen Header
    render(<Header />);
    
    // Cari elemen anchor untuk logo
    const logoLink = screen.getByRole('link', { name: '' });
    
    // Pastikan anchor untuk logo ada
    expect(logoLink).toBeInTheDocument();
  });
});

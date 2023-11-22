// FILEPATH: /tests/LandingPage.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '../LandingPage';

describe('LandingPage', () => {
  test('renders LandingPage component', () => {
    render(<LandingPage />);
    
    const headerElement = screen.getByText(/Hello, I'm Tyron/i);
    expect(headerElement).toBeInTheDocument();

    const subHeaderElement = screen.getByText(/Software Engineer | Web Developer | Tech Enthusiast/i);
    expect(subHeaderElement).toBeInTheDocument();

    const imageElement = screen.getByAltText('Tyron Samaroo');
    expect(imageElement).toBeInTheDocument();
  });
});
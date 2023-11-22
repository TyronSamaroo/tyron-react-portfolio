import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import LandingPage from '../components/LandingPage/LandingPage';
import SkillsSection from '../components/SkillsSection/SkillsSection';

jest.mock('../components/LandingPage/LandingPage', () => () => <div>LandingPage</div>);
jest.mock('../components/SkillsSection/SkillsSection', () => () => <div>SkillsSection</div>);

test('renders App component', () => {
  render(<App />);
  
  expect(screen.getByText('LandingPage')).toBeInTheDocument();
  expect(screen.getByText('SkillsSection')).toBeInTheDocument();
});
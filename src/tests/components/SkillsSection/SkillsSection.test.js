import { render, screen } from '@testing-library/react';
import SkillsSection from '../../../components/SkillsSection/SkillsSection';

test('renders SkillsSection component', () => {
  render(<SkillsSection />);
  
  const headerElement = screen.getByText('Technical Skills');
  expect(headerElement).toBeInTheDocument();

  const pythonElement = screen.getByText('Python');
  expect(pythonElement).toBeInTheDocument();

  const javascriptElement = screen.getByText('JavaScript');
  expect(javascriptElement).toBeInTheDocument();

  const reactElement = screen.getByText('React');
  expect(reactElement).toBeInTheDocument();

  const javaElement = screen.getByText('Java');
  expect(javaElement).toBeInTheDocument();

  const awsElement = screen.getByText('AWS');
  expect(awsElement).toBeInTheDocument();
});
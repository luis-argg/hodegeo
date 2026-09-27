import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main sections', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { level: 1, name: /hodēgeō/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 2, name: /¿qué es hodēgeō\?/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      level: 2,
      name: /núcleo de conectividad/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      level: 2,
      name: /componentes y especificaciones/i,
    })
  ).toBeInTheDocument();
});

test('lists the project creators in the footer', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /creadores del proyecto/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/Jorge Alvarez/)).toBeInTheDocument();
  expect(screen.getByText(/Luis Argueta/)).toBeInTheDocument();
  expect(screen.getByText(/Brayan Campa/)).toBeInTheDocument();
  expect(screen.getByText(/Cristian Perez/)).toBeInTheDocument();
});

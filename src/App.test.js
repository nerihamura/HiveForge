// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HiveForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/HiveForge/i);
    expect(titleElement).toBeInTheDocument();
});

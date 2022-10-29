import { render, screen, cleanup } from "@testing-library/react";
import {describe, expect, test} from '@jest/globals';
import "@testing-library/jest-dom";
import sum from '../sum';
import App from "../App";

//example test
describe('sum module', () => {
  test('adds 1 + 2 to equal 3', async () => {
    expect(sum(1, 2)).toBe(3);
  });
});

afterEach(() => {
  cleanup();
});

test("renders the landing page", () => {
  render(<App />);
});

// test("should render some container", () => {
//   render(< />);
//   const someElement = screen.getByTestId("");
//   expect(breweriesElement).toBeInTheDocument();
// });




import React from 'react'
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import {describe, expect, test} from '@jest/globals';
// import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import App from "../App";
import Login from "../Components/Login";

// afterEach(() => {
//   cleanup();
// });

test("does login button read the word login", async () => {
  render(<App />);
  // const buttonElement = screen.getByTestId("login-button");
  // expect(buttonElement.textContent).toBe("Login");
});

// test("should render some container", () => {
//   render(< />);
//   const someElement = screen.getByTestId("");
//   expect(breweriesElement).toBeInTheDocument();
// });
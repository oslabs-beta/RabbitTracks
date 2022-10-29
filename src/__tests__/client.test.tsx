import React from 'react'
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import {describe, expect, test} from '@jest/globals';
import "@testing-library/jest-dom/extend-expect"
import { Route, Routes } from "react-router-dom";
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

// describe("account delete form", () => {
//   it("renders default state", () => {
//     const { getByTestId } = render(<Login />);

//     const password = getByTestId("account-delete-password") as HTMLInputElement;
//     const confirm = getByTestId("account-delete-confirm");
//     const submit = getByTestId("account-delete-submit");

//     expect(password.value).toBe("");
//     expect(confirm).not.toHaveClass("Mui-checked");
//     expect(submit).toHaveClass("Mui-disabled");
//   });
import { it, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

it("renders without crashing", () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});

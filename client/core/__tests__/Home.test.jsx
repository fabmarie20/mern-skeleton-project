import { render, screen } from "@testing-library/react";
import Home from "../Home";

test("renders Home Page title", () => {
  render(<Home />);
  expect(screen.getByText("Home Page")).toBeInTheDocument();
});


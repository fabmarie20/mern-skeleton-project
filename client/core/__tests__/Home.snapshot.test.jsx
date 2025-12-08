import { render } from "@testing-library/react";
import Home from "../Home";

test("Home matches snapshot", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

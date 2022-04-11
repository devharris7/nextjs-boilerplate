import { render } from "@testing-library/react";
import Button from "../../../components/Button/Button";

describe("Button", () => {
  it("renders a button with a tag", () => {
    const { container } = render(<Button isLink={true}>Test</Button>);
    expect(container).toMatchSnapshot();
  });
  it("renders a normal button", () => {
    const { container } = render(<Button isLink={false}>Test</Button>);
    expect(container).toMatchSnapshot();
  });
});

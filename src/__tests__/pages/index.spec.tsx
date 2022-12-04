import { render } from '@testing-library/react';
import Home from 'src/pages';

describe('Home', () => {
  it('renders homepage', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';

import CardComp from './card-comp';

describe('CardComp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardComp />);
    expect(baseElement).toBeTruthy();
  });
});

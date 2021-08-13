import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ImageFrame from '../../components/ImageFrame';

describe('App', () => {
  it('should render', () => {
    expect(render(<ImageFrame />)).toBeTruthy();
  });
});

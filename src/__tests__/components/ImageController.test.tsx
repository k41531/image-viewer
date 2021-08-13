import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ImageController from '../../components/ImageController';

describe('App', () => {
  it('should render', () => {
    expect(render(<ImageController />)).toBeTruthy();
  });
});

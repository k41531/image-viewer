import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import OpenFolderButton from '../../components/OpenFolderButton';

describe('App', () => {
  it('should render', () => {
    expect(render(<OpenFolderButton />)).toBeTruthy();
  });
});

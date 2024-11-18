/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { FooterFeature } from './FooterFeature';

test('renders footerfeature', () => {
  const { getByText } = render(<FooterFeature text={'dummy text'} />);
  const linkElement = getByText(/footerfeature/i);
  expect(linkElement).toBeDefined();
});

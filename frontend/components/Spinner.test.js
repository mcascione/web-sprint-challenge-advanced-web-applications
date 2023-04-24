import React from "react";
import Spinner from './Spinner'
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

test('sanity', () => {
  expect(true).toBe(true)
})

describe('Spinner', () => {
  it('should render Spinner when on prop is true', () => {
    const { container } = render(<Spinner on={true} />)
    const spinner = container.querySelector('#spinner')
    expect(spinner).toBeVisible()
  })

  it('should not render Spinner when on prop is false', () => {
    const { container } = render(<Spinner on={false} />)
    const spinner = container.querySelector('#spinner')
    expect(spinner).not.toBeInTheDocument()
  })
})


import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'
import App from '../src/App'

describe('<App />', () => {
  const user = userEvent.setup()
  const { getByText } = render(<App />)

  test('should work', () => {
    expect(getByText('Prueba Técnica React')).toBeDefined()
    // screen.debug() // with this line, i can view the code that render de browser
  })

  test('should add items and remove them', async () => {
    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()

    // search the form
    const form = screen.getByRole('form')
    expect(form).toBeDefined()

    const button = form.querySelector('button')
    expect(button).toBeDefined()

    // escribir en el input
    await user.type(input, 'Laptops')
    await user.click(button!)

    // asegurar que el elemento se ha agregado
    const list = screen.getByRole('list')
    expect(list).toBeDefined()

    expect(list.children.length).toBe(1)

    // asegurarnos que podemos borrar
    const item = screen.getByText('Laptops')
    const removeButton = item.querySelector('button')
    expect(removeButton).toBeDefined()

    await user.click(removeButton!)

    expect(list.children.length).toBe(0)
  })
})

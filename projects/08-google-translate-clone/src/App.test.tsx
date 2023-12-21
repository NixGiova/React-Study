import { test, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('My App works as expected', () => {
  const user = userEvent.setup()
  const app = render(<App />)

  const textAreaFrom = app.getByPlaceholderText('Introducir texto')

  await user.type(textAreaFrom, 'Hola mundo')
  const result = await app.findByDisplayValue(/Hello world/i)

  expect(result).toBeTruthy()
})

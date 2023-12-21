import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Router } from './Router.jsx'
import { Route } from './Route.jsx'
import { Link } from './Link.jsx'
import { getCurrentPath } from './utils.js'

vi.mock('./utils.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render without problems', () => {
    render(<Router routes={[]}></Router>)
  })

  it('should render 404 if no routes math', () => {
    render(
      <Router routes={[]} defaultComponent={() => <div>404</div>}></Router>
    )
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the component of the first route that matches', () => {
    getCurrentPath.mockReturnValue('/about')
    const routes = [
      {
        path: '/',
        Component: () => <div>Home</div>
      },
      {
        path: '/about',
        Component: () => <div>About</div>
      }
    ]
    render(<Router routes={routes}></Router>)
    expect(screen.getByText('About')).toBeTruthy()
  })

  it('should navigate using links', () => {
    getCurrentPath.mockReturnValueOnce('/')
    render(
      <Router>
        <Route
          path='/'
          Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to='/about'>About</Link>
              </>
            )
          }}
        ></Route>
        <Route path='/about' Component={() => <div>About</div>}></Route>
      </Router>
    )

    const button = screen.getByText('About')
    fireEvent.click(button)

    const aboutTitle = screen.getByText('About')
    expect(aboutTitle).toBeTruthy()
  })
})

import './App.css'
import { Router } from './Router'
import Page404 from './pages/404'
import SearchPage from './pages/Search'
import { Route } from './Route'
import { lazy, Suspense } from 'react'
// import HomePage from './pages/Home' /// import estático
// import AboutPage from './pages/About' /// import estático

const LazyHomePage = lazy(() => import('./pages/Home.jsx')) // <--- import dinámico Lazy Loading
const LazyAboutPage = lazy(() => import('./pages/About.jsx')) // <--- import dinámico Lazy Loading

const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage}></Route>
          <Route path='/about' Component={LazyAboutPage}></Route>
        </Router>
      </Suspense>
    </main>
  )
}

export default App

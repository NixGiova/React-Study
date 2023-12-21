import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
  const { filters } = useFilters()
  return (
    <footer className='footer'>
      {JSON.stringify(filters, null, 2)}
      {
        // <h4>
        //   Prueba técnica React - <span>@NixGiova</span>
        // </h4>
        // <h5>Shopping Cart con UseContext & UseReducer</h5>
      }
    </footer>
  )
}

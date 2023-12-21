import { BUTTONS, EVENTS } from './consts'
export function navigate(href) {
  window.history.pushState({}, '', href)
  // Crear un evento personalizado para avisar del pushstate
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.primary //primary click
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey //modified click
    const isManageableEvent = target === undefined || target === '_self' //manageable click

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }
  return <a onClick={handleClick} href={to} target={target} {...props}></a>
}

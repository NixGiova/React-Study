interface Props {
  text: string
  handleClick: () => void
}

export const Item: React.FC<Props> = ({ text, handleClick }) => {
  return (
    <li>
      {text} <button onClick={handleClick}>Eliminar elemento</button>
    </li>
  )
}

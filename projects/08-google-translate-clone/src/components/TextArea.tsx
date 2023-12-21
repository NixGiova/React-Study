import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'
import React from 'react'

interface Props {
  type: SectionType
  loading?: boolean
  value: string
  onChange: (value: string) => void
}

const commonStyles = { border: 0, height: '200px', resize: 'none' }

const getPlaceHolder = ({
  type,
  loading
}: {
  type: SectionType
  loading?: boolean
}) => {
  if (type === SectionType.From) return 'Introducir texto'
  if (loading === true) return 'Cargando...'
  return 'Traducción'
}

export const TextArea = ({ type, loading, value, onChange }: Props) => {
  const style =
    type !== SectionType.From
      ? { ...commonStyles, backgroundColor: '#f5f5f5' }
      : commonStyles

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      as='textarea'
      placeholder={getPlaceHolder({ type, loading })}
      disabled={type === SectionType.To}
      autoFocus={type === SectionType.From}
      style={style}
      value={value}
      onChange={handleChange}
    />
  )
}

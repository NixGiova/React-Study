import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGES, SUPPORTED_LANGUAGES } from '../constants'
import { Language, FromLanguage, SectionType } from '../types.d'

type Props =
  | {
      type: SectionType.From
      value: FromLanguage
      onChange: (language: FromLanguage) => void
    }
  | {
      type: SectionType.To
      value: Language
      onChange: (language: Language) => void
    }

export const LanguageSelector = ({ onChange, type, value }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <Form.Select
      aria-label='Selecciona el idioma'
      onChange={handleChange}
      value={value}
    >
      {type === SectionType.From && (
        <option value={AUTO_LANGUAGES}>Detectar idioma</option>
      )}

      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option value={key} key={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}

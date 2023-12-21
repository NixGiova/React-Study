import { useReducer } from "react"
import { Language, type Action, type State, FromLanguage } from "../types.d"
import { AUTO_LANGUAGES } from "../constants"

// 1. create initial state
const initialState: State = {
  fromLanguage: AUTO_LANGUAGES,
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// 2. create reducer
function reducer(state: State, action: Action) {
  const { type } = action

  const loading = state.fromText !== ''

  switch (type) {
    case 'INTERCHANGE_LANGUAGES':
      if (state.fromLanguage === AUTO_LANGUAGES) return state

      return {
        ...state,
        loading,
        result: '',
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }
    case 'SET_FROM_LANGUAGES':
      if (state.fromLanguage === action.payload) return state
      return { ...state, fromLanguage: action.payload, result: '', loading }
    case 'SET_TO_LANGUAGES':
      if (state.toLanguage === action.payload) return true

      return { ...state, toLanguage: action.payload, result: '', loading }
    case 'SET_FROM_TEXT':
      const loading = action.payload !== ''
      return { ...state, fromText: action.payload, result: '', loading }
    case 'SET_RESULT':
      return { ...state, loading: false, result: action.payload }
    default:
      return state
  }
}

export function useStore() {
  // 3. useReducer hook
  const [
    {
      fromLanguage,
      toLanguage, fromText,
      result,
      loading
    }, dispatch] = useReducer(reducer, initialState)

  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  }

  const setFromLanguages = (payload: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGES', payload })
  }

  const setToLanguages = (payload: Language) => {
    dispatch({ type: 'SET_TO_LANGUAGES', payload })
  }

  const setFromText = (payload: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setResult = (payload: string) => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguages,
    setToLanguages,
    setFromText,
    setResult
  }
}

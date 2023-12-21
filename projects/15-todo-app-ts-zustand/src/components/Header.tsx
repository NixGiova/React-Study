import React from 'react'
import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

const IMAGE_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className='header'>
      <h1>
        Todo{' '}
        <img style={{ width: '60px', height: 'auto' }} src={IMAGE_URL}></img>{' '}
      </h1>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}

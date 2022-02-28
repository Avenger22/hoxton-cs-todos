import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import {
getCompletedTodos,
getIncompleteTodos,
deleteTodo,
addTodo,
toggleTodo,
toggleShowCompleted
} from "./helpersFunctions"

import {Todo} from "../types/types"

import {
initialTodos
} from "../App"

const newTodos = [
    {
        id:1, 
        title: "titulli1",
        completed: true
    },
    {
        id: 2, 
        title: "titulli2",
        completed: false
    }
]

describe('getCompletedTodos', () => {

    it('returns an array of objects with todos filtered by completed', () => {

      const result: Todo[] = getCompletedTodos(newTodos)
      expect(result).toEqual(expect.arrayContaining(
          [expect.objectContaining(
              { id:1, title: "titulli1", completed: true})
            ]
        ))
        
    })

  })

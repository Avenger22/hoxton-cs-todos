// #region "Importing"
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
// #endregion

// #region "Initial Data"
const initialTodos = [
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
// #endregion

// #region "Testing all functions"
describe('getCompletedTodos', () => {

    it('returns an array of objects with todos filtered by completed', () => {

      const result: Todo[] = getCompletedTodos(initialTodos)
      const expectedResult: Todo = { id:1, title: "titulli1", completed: true}
      
      expect(result).toEqual(expect.arrayContaining(
          [expect.objectContaining(
              expectedResult)
            ])
        )

    })

})

describe('getIncompleteTodos', () => {

    it('returns an array of objects with todos filtered by incompleted', () => {

      const result: Todo[] = getIncompleteTodos(initialTodos)
      const expectedResult: Todo = { id:2, title: "titulli2", completed: false}
      
      expect(result).toEqual(expect.arrayContaining(
          [expect.objectContaining(
              expectedResult)
            ])
        )

    })

})
// #endregion
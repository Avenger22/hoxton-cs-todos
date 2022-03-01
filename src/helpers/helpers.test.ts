// #region "Importing"
import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import {
getCompletedTodos,
getIncompleteTodos,
deleteTodo,
addTodo,
toggleTodo,
toggleShowCompleted,
editTodo
} from "./helpersFunctions"

import {Todo} from "../types/types"
import { useStore } from '../zustand/store'

const {setTodos} = useStore()
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

describe('addTodo', () => {

    it('add a todo', () => {
  
      const result = addTodo('Learn TDD', initialTodos, setTodos)
  
      const expectedResult = [
        ...initialTodos,
        {
          id: 3,
          title: 'Learn TDD',
          completed: false
        }
      ]
  
      expect(result).toMatchObject(expectedResult)
    
    })

})
  
describe('deleteTodo', () => {

    it('removes a todo successfully if it exists', () => {
  
      const result = deleteTodo('titulli2', initialTodos, setTodos)
  
      const expectedResult: Todo[] = [
        {
          id: 1,
          title: 'titulli1',
          completed: false
        }
      ]
  
      expect(result).toMatchObject(expectedResult)

    })
  
    it('returns the same todos if the id does not exist', () => {
  
      const result = deleteTodo('random', initialTodos, setTodos)
      expect(result).toMatchObject(initialTodos)

    })

})
  
describe('toggleTodo', () => {

    it('toggles a todo completeness if it exists', () => {
  
      const result = toggleTodo(2, initialTodos, setTodos)
  
      const expectedResult = [
        {
          id: 1,
          title: 'titulli1',
          completed: true
        }
      ]
  
      expect(result).toMatchObject(expectedResult)
    
    })
  
    it('returns the same todos if the id does not exist', () => {
  
      const result = toggleTodo(123456, initialTodos, setTodos)
      expect(result).toMatchObject(initialTodos)

    })

})
  
describe('editTitleTodo', () => {

    it(`edits a todo's title if id exists`, () => {
  
      const result = editTodo({id:2, title:"titulli2", completed: false},'Hello!',initialTodos, setTodos)
  
      const expectedResult = [
        {
          id: 1,
          title: 'titulli1',
          completed: true
        },
        {
          id: 2,
          title: 'Hello!',
          completed: false
        }
      ]
  
      expect(result).toMatchObject(expectedResult)
    
    })
  
    // it(`returns the same todos if id does not exist`, () => {
     
    //   const result = editTitle({id:2, title:"titulli2", completed: false}, "new", )
    //   expect(result).toMatchObject(initialTodos)
    
    // })

})
// #endregion
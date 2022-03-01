import create from 'zustand'
import {Todo} from "../types/types"

interface AppStoreState {
    todos: Todo[]
    showCompleted: boolean
    setTodos: (array:Todo[]) => void
    setShowCompleted: () => void
}

export const useStore = create<AppStoreState>((set, get) => ({

    todos: [],
    showCompleted: false,

    setTodos: function(array) {
        set({todos: array}) 
    },
    
    setShowCompleted: function() {
        const {showCompleted} = get()
        set({showCompleted: !showCompleted}) 
    }

}))
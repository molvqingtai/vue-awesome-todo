import { inject } from 'vue'
import { TodoListLogic } from './TodoListLogic'

export function RendererLogic() {
  const { todoList, checkedTodo } = inject(TodoListLogic.Token)!

  const handleDeleteTodo = (id: string) => {
    const index = todoList.value.findIndex((todo) => todo.id === id)
    const checkIndex = checkedTodo.value.findIndex((check) => check === id)

    todoList.value.splice(index, 1)
    checkedTodo.value.splice(checkIndex, 1)
  }

  const handleChange = (e: Event) => {
    const { value } = e.target as HTMLInputElement

    console.log(value)

    const todo = todoList.value.find((todo) => todo.id === value)!

    todo.isYes = !todo.isYes
  }

  return {
    todoList,
    checkedTodo,

    handleChange,
    handleDeleteTodo,
  }
}

import { v4 } from 'uuid'
import { ref, inject } from 'vue'
import { TodoListLogic } from './TodoListLogic'

export function HeaderLogic() {
  const { todoList } = inject(TodoListLogic.Token)!

  const inputModel = ref('')

  const handleCreateTodo = () => {
    todoList.value.push({
      id: v4(),
      text: inputModel.value,
      isYes: false,
    })

    inputModel.value = ''
  }

  return {
    inputModel,
    handleCreateTodo,
  }
}

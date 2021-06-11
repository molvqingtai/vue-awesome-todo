import { ref } from "vue";
import useFormulaToken from "./useFormulaToken";

TodoListLogic.Token = useFormulaToken(TodoListLogic);
export function TodoListLogic() {
  const todoList = ref<{ id: string; text: string; isYes: boolean }[]>([]);
  const checkedTodo = ref<string[]>([]);

  return {
    todoList,
    checkedTodo,
  };
}

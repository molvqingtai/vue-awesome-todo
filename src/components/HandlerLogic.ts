import { inject, computed } from "vue";
import { TodoListLogic } from "./TodoListLogic";

export function HandlerLogic() {
  const { todoList, checkedTodo } = inject(TodoListLogic.Token)!;

  const all = computed(() => todoList.value.length);

  const yes = computed(() => checkedTodo.value.length);

  const no = computed(() => all.value - yes.value);

  return {
    all,
    yes,
    no,
  };
}

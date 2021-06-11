<script setup lang="ts">
import { provide } from 'vue'

import { Card, Divider } from 'ant-design-vue'

import Header from './Header.vue'
import Handler from './Handler.vue'
import Renderer from './Renderer.vue'

import { TodoListLogic } from './TodoListLogic'

provide(TodoListLogic.Token, TodoListLogic())
</script>

<template>
  <Card hoverable title="TodoList" class="todo">
    <Header />

    <Divider />

    <Handler />

    <Divider />

    <Renderer />
  </Card>
</template>

<style scoped lang="scss">
.todo {
  width: 600px;
  margin: 0 auto;

  ::v-deep(.ant-checkbox-group) {
    width: 100%;
  }
}
</style>

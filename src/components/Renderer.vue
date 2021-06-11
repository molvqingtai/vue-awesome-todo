<script setup lang="ts">
import { Checkbox, Divider, Space, Alert, Typography } from 'ant-design-vue'

import { RendererLogic } from './RendererLogic'

const [{ Group: CheckboxGroup }, { Text: TypographyText }] = [Checkbox, Typography]

const { todoList, checkedTodo, handleChange, handleDeleteTodo } = RendererLogic()
</script>

<template>
  {{ todoList }}

  <Divider />

  {{ checkedTodo }}

  <Divider />

  <CheckboxGroup v-model:value="checkedTodo">
    <Space class="w-100" direction="vertical">
      <Alert closable show-icon :key="todo.id" v-for="todo in todoList" @close="handleDeleteTodo(todo.id)">
        <template #icon>
          <Checkbox :value="todo.id" @change="handleChange" />
        </template>

        <template #message>
          <TypographyText :delete="todo.isYes" :type="todo.isYes ? 'secondary' : 'success'">{{ todo.text }}</TypographyText>
        </template>
      </Alert>
    </Space>
  </CheckboxGroup>
</template>

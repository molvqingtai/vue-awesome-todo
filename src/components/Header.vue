<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue'
import { Row, Col, Button, Input } from 'ant-design-vue'

import { HeaderLogic } from './HeaderLogic'

const { inputModel, handleCreateTodo } = HeaderLogic()
</script>

<template>
  <Row type="flex" align="middle" justify="space-between" :gutter="32">
    <Col :span="18">
      <Input allow-clear placeholder="Todo" v-model:value="inputModel" />
    </Col>

    <Col :span="6">
      <Button type="primary" class="w-100" @click="handleCreateTodo">
        <template #icon>
          <PlusOutlined />
        </template>
        <span>添加</span>
      </Button>
    </Col>
  </Row>
</template>

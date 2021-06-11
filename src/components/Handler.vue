<script setup lang="ts">
import { Radio } from "ant-design-vue";
import { HandlerLogic } from "./HandlerLogic";

const [{ Group: RadioGroup, Button: RadioButton }] = [Radio];

const { all, yes, no } = HandlerLogic();
</script>

<template>
  <RadioGroup button-style="solid">
    <RadioButton value="all">
      <span class="m-r-8">全部</span>
      <span>{{ all }}</span>
    </RadioButton>

    <RadioButton value="yes">
      <span class="m-r-8">已完成</span>
      <span>{{ yes }}</span>
    </RadioButton>

    <RadioButton value="no">
      <span class="m-r-8">未完成</span>
      <span>{{ no }}</span>
    </RadioButton>
  </RadioGroup>
</template>

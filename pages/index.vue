<script setup lang="ts">
const options = [
  {
    label: '2022-01-01',
    content: '事件一',
  },
  {
    label: '2022-02-01',
    content: '事件二',
  },
  {
    label: '2022-03-01',
    content: '事件三',
  },
  {
    label: '2022-04-01',
    content: '事件四',
  },
];
</script>
<template>
<div class="page">
    <t-timeline layout="horizontal" mode="alternate">
        <t-timeline-item v-for="(item, index) in options" :key="index" :label="item.label" dot-color="primary">
        {{ item.content }}
        </t-timeline-item>
    </t-timeline>
</div>
</template>
<style lang="less" scoped></style>
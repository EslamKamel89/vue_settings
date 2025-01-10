<template>
  <main class="max-w-2xl mx-auto px-4">
    <nav class="font-medium text-center text-gray-500 border-b border-gray-200 mb-4">
      <ul class="flex flex-wrap">
        <li v-for="tab in tabs" :key="tab.key">
          <TabLink :current-tab="currentTab" :tab="tab" @click="currentTab = tab.key" />
        </li>
      </ul>
    </nav>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TabLink from './components/TabLink.vue';
import type { Tab, TabKey } from './types';

const tabs: Tab[] = [
  { label: 'General', key: 'General' },
  { label: 'Notifications', key: 'Notifications' },
  { label: 'Privacy', key: 'Privacy' },
];
const currentTab = ref<TabKey>('General');
</script>

<style scoped></style>

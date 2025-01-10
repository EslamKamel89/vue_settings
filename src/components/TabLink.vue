<template>
  <button
    @click="emit('click')"
    class="p-4 border-b-2"
    :class="{
      'border-transparent': !isActive,
      'border-b-blue-600 text-blue-600': isActive,
    }"
  >
    {{ tab.label }}
  </button>
</template>

<script setup lang="ts">
import type { Tab } from '@/types';
import { computed } from 'vue';

type TabLinkProps = {
  currentTab: string;
  tab: Tab;
};

const { tab, currentTab } = defineProps<TabLinkProps>();

//! emits
const emit = defineEmits<{
  click: [];
}>();

// computed properties
const isActive = computed(() => {
  return currentTab == tab.key;
});
</script>

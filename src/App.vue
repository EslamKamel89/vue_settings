<template>
  <main class="max-w-2xl mx-auto px-4">
    <nav class="font-medium text-center text-gray-500 border-b border-gray-200 mb-4">
      <ul class="flex flex-wrap">
        <li v-for="tab in tabs" :key="tab.key">
          <TabLink :current-tab="currentTab" :tab="tab" @click="currentTab = tab.key" />
        </li>
      </ul>
    </nav>
    <div class="">
      <FadeTransition>
        <keep-alive>
          <component class="" :is="currentComponent" />
        </keep-alive>
      </FadeTransition>
      <NotificationList />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import FadeTransition from './components/FadeTransition.vue';
import GeneralSettings from './components/GeneralSettings.vue';
import NotificationsSettings from './components/NotificationsSettings.vue';
import PrivacySettings from './components/PrivacySettings.vue';
import TabLink from './components/TabLink.vue';
import NotificationList from './composables/NotificationList.vue';
import pr from './pr';
import type { Tab, TabKey } from './types';

const tabs: Tab[] = [
  { label: 'General', key: 'General', component: GeneralSettings },
  { label: 'Notifications', key: 'Notifications', component: NotificationsSettings },
  { label: 'Privacy', key: 'Privacy', component: PrivacySettings },
];
const currentTab = ref<TabKey>('General');
const currentComponent = computed(() => {
  return pr(tabs.find((tab: Tab) => tab.key == currentTab.value)?.component, 'current component');
});
</script>

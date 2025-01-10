import type { Component } from 'vue';

export type Tab = {
  key: TabKey;
  label: string;
  component: Component;
};
export type TabKey = 'General' | 'Notifications' | 'Privacy';

<template>
  <div>
    <h2 class="text-2xl mb-4">Notifications</h2>
    <form class="space-y-4">
      <div class="flex gap-2">
        <input type="checkbox" id="email" v-model="notifications.email" />
        <label for="email">Notifications by email</label>
      </div>
      <div class="flex gap-2">
        <input type="checkbox" id="sms" v-model="notifications.sms" />
        <label for="sms">Notifications by sms</label>
      </div>

      <div class="my-4">
        <button type="submit" class="btn-primary">Save</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>
import { useSettings } from '@/composables/useSettings';

const { notifications } = useSettings();
</script>

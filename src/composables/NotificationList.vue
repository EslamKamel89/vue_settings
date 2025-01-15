<template>
  <Teleport to="body">
    <div class="flex justify-end fixed bottom-0 right-0">
      <ol class="rounded shadow-2xl mb-6 mt-3 mx-3 max-w-[60%]">
        <li v-for="notification in notifications" :key="notification.id" class="notification-item">
          <div class="text-sm font-semibold">{{ notification.message }}</div>
          <button @click="removeNotification(notification.id)" class="notification-ack-button">
            Ok
          </button>
        </li>
      </ol>
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
import { useNotifications } from './useNotifications';

const { notifications, removeNotification } = useNotifications();
</script>

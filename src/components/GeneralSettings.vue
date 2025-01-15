<template>
  <div>
    <h2 class="text-2xl mb-4">General</h2>
    <form class="space-y-4" @submit.prevent="save">
      <div>
        <label for="Username">Username</label>
        <input type="text" id="Username" v-model="general.username" />
      </div>
      <div>
        <label for="Email">Email</label>
        <input type="email" id="Email" v-model="general.email" />
      </div>
      <div>
        <label for="AboutMe">About Me</label>
        <textarea id="AboutMe" v-model="general.about"></textarea>
      </div>
      <div>
        <label for="Gender">Gender</label>
        <label>
          <input type="radio" value="male" name="Gender" v-model="general.gender" />
          <span>Male</span>
        </label>
        <label>
          <input type="radio" value="female" name="Gender" v-model="general.gender" />
          <span>Female</span>
        </label>
      </div>
      <div>
        <label>Country</label>
        <select v-model="general.country">
          <option>USA</option>
          <option>UK</option>
        </select>
      </div>
      <div class="my-4">
        <button type="submit" class="btn-primary">Save</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>
import { useNotifications } from '@/composables/useNotifications';
import { useSettings } from '@/composables/useSettings';

const { general } = useSettings();
const { addNotification } = useNotifications();
const save = () => {
  addNotification(`General Settings are saved successfully`);
};
</script>

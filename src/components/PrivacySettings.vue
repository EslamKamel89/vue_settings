<template>
  <div>
    <h2 class="text-2xl mb-4">Privacy</h2>
    <form class="space-y-4">
      <div>
        <label>Visibility</label>
        <select v-model="privacy.visibility">
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </div>

      <div class="flex gap-2">
        <input type="checkbox" id="searchEngineEndixing" v-model="privacy.searchEngineIndexing" />
        <label for="searchEngineEndixing">Search Engine Indexing</label>
      </div>

      <div class="my-4">
        <button type="submit" class="btn-primary">Save</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>
import { useSettings } from '@/composables/useSettings';

const { privacy } = useSettings();
</script>

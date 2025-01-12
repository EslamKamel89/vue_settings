import { ref, watch, type Ref } from 'vue';

//? helpers
const init = <T>(key: SettingsKey, initialValue: T): T => {
  const stored = localStorage.getItem(key);
  return stored !== null ? JSON.parse(stored) : initialValue;
};
const watcher = <T>(key: SettingsKey, value: Ref<T>) => {
  watch(
    value,
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    { deep: true },
  );
};

//? main state type
type SettingsMap = {
  general: GeneralSettings;
  notifications: NotificationsSettings;
  privacy: PrivacySettings;
};
type SettingsKey = keyof SettingsMap;

//? GeneralSettings
export type GeneralSettings = {
  username: string;
  email: string;
  about: string;
  gender: 'male' | 'female';
  country: string;
};

const general = ref<GeneralSettings>(
  init<GeneralSettings>('general', {
    username: '',
    email: '',
    country: 'USA',
    gender: 'male',
    about: '',
  }),
);
watcher('general', general);

//? NotificationSettings
export type NotificationsSettings = {
  email: boolean;
  sms: boolean;
};

const notifications = ref<NotificationsSettings>(
  init<NotificationsSettings>('notifications', { email: false, sms: false }),
);
watcher('notifications', notifications);

//? PrivacySettings
export type Visiblity = 'public' | 'private';

export type PrivacySettings = {
  visibility: Visiblity;
  searchEngineIndexing: boolean;
};

const privacy = ref<PrivacySettings>(
  init<PrivacySettings>('privacy', {
    searchEngineIndexing: false,
    visibility: 'public',
  }),
);
watcher('privacy', privacy);

//! useSettings composable
export function useSettings() {
  return {
    general,
    notifications,
    privacy,
  };
}

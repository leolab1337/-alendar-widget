<template>
  <select v-model="selectedLanguage" @change="changeLanguage">
    <option value="en">English</option>
    <option value="ru">Русский</option>
  </select>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const selectedLanguage = ref(locale.value);

function changeLanguage() {
  locale.value = selectedLanguage.value;
}
</script>

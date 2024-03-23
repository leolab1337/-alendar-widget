<script setup>
import CalendarView from "@/components/CalendarView.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
</script>

<template>

  <div class="pageWrapper">

  <header >
    <h1>{{ $t('message.hello') }}</h1>
  </header>

  <main>
    <LanguageSwitcher />
    <CalendarView :initialDate="'2023-05-13'" />
  </main>

  </div>

</template>

<style scoped>

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


.pageWrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


header {
  display: flex;
  place-items: center;
  text-align: center;
}

.logo {
  margin: 0 2rem 0 0;
}

</style>

<template>
  <App>
    <NavigationRail class="md:visible" />
    <Toolbar class="md:hidden hidden" />
    <Container class="ml-[64px]">
      <NuxtPage />
    </Container>
  </App>
</template>

<script setup>
onMounted(() => {
  window.addEventListener('scroll', (e) => onScroll());
})
onUnmounted(() => {
  window.removeEventListener('scroll', (e) => onScroll());

})
</script>
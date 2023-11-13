<template>
  <App>
    <NavigationRail @onClickMenuItem="name =>" />
    <Container class="pl-[64px]">
      <NuxtPage />
    </Container>
  </App>
</template>

<script setup lang="ts">
function onScroll() {
}
onMounted(() => {
  window.addEventListener('scroll', (e) => onScroll());
})
onUnmounted(() => {
  window.removeEventListener('scroll', (e) => onScroll());

})
</script>
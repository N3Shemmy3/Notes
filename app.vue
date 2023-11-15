<template>
  <App>
    <NavigationRail @onClickMenuItem="" />
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
useSeoMeta({
  title: 'Notes',
  ogTitle: 'Notes',
  description: 'This is s notes webapp.',
  ogDescription: 'This is s notes webapp.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
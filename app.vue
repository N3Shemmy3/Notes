<template>
  <App>
    <NavigationRail class="md:visible" />
    <Toolbar class="md:hidden" />
    <Container>
      <NuxtPage />
    </Container>

  </App>
</template>
<script setup>


function onScroll() {
  useEvent('event:isToolbarLifted', window.scrollY > 15);
}

onMounted(() => {
  window.addEventListener('scroll', (e) => onScroll());
})
onUnmounted(() => {
  window.removeEventListener('scroll', (e) => onScroll());

})
</script>

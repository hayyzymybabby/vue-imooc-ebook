<template>
  <div id="app">
    <span class="text">ABCDEFG</span>
    <router-view />
  </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>

<style lang="scss" scoped>
.text {
  font-family: 'Days One';
  font-size: 20px;
  color: orange;
}
</style>

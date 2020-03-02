<template>
  <div class="spinner">
    <div
      v-for="i in 4"
      class="spinner__item" />
  </div>
</template>

<script>
export default {
  name: 'TheSpinner',
}
</script>

<style lang="scss">
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;

  &__item {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #b9b9b9;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 8px;
      animation: ellipsis1 0.6s infinite;
    }

    &:nth-child(2) {
      left: 8px;
      animation: ellipsis2 0.6s infinite;
    }

    &:nth-child(3) {
      left: 32px;
      animation: ellipsis2 0.6s infinite;
    }

    &:nth-child(4) {
      left: 56px;
      animation: ellipsis3 0.6s infinite;
    }
  }
}

@keyframes ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>

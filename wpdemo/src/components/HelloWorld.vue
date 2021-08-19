<template>
  <div id="main">
    <div id="demo"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  perspective: 1000;
}
#demo {
  width: 800px;
  min-width: 800px;
  height: 370px;
  background-image: -webkit-radial-gradient(
      circle,
      transparent 58%,
      #0081c8 58%,
      #0081c8 70%,
      transparent 70%
    ),
    -webkit-radial-gradient(circle, transparent 58%, #000 58%, #000 70%, transparent
          70%),
    -webkit-radial-gradient(circle, transparent 58%, #ee334e 58%, #ee334e 70%, transparent
          70%),
    -webkit-radial-gradient(circle, transparent 58%, #fcb131 58%, #fcb131 70%, transparent
          70%),
    -webkit-radial-gradient(circle, transparent 58%, #00a651 58%, #00a651 70%, transparent
          70%);
  background-position: 0% 0%, 50% 0%, 100% 0%, 25% 100%, 75% 100%;
  background-repeat: no-repeat;
  background-size: 250px 250px;
  position: relative;
  animation: rotate 5s ease-in-out infinite;
}
#demo::before {
  content: "";
  display: block;
  width: inherit;
  min-width: inherit;
  height: inherit;
  background-image: -webkit-radial-gradient(
      circle,
      transparent 58%,
      #fcb131 58%,
      #fcb131 70%,
      transparent 70%
    ),
    -webkit-radial-gradient(circle, transparent 58%, #00a651 58%, #00a651 70%, transparent
          70%),
    -webkit-radial-gradient(circle, transparent 58%, #0081c8 58%, #0081c8 70%, transparent
          70%),
    -webkit-radial-gradient(circle, transparent 58%, #000 58%, #000 70%, transparent
          70%),
    -webkit-radial-gradient(circle, transparent 58%, #ee334e 58%, #ee334e 70%, transparent
          70%);
  background-position: 25% 100%, 75% 100%, 0% 0%, 50% 0%, 100% 0%;
  background-repeat: no-repeat;
  background-size: inherit;
  position: absolute;
  top: 0px;
  left: 0;
}
#demo::after {
  content: "";
  display: block;
  width: inherit;
  min-width: inherit;
  height: inherit;
  background-image: -webkit-radial-gradient(
      circle,
      transparent 58%,
      #fcb131 58%,
      #fcb131 70%,
      transparent 70%
    ),
    -webkit-radial-gradient(circle, transparent 58%, #00a651 58%, #00a651 70%, transparent
          70%),
    -webkit-radial-gradient(circle, transparent 58%, #0081c8 58%, #0081c8 70%, transparent
          70%),
    -webkit-radial-gradient(circle, transparent 58%, #000 58%, #000 70%, transparent
          70%),
    -webkit-radial-gradient(circle, transparent 58%, #ee334e 58%, #ee334e 70%, transparent
          70%);
  background-position: 25% 100%, 75% 100%, 0% 0%, 50% 0%, 100% 0%;
  background-repeat: no-repeat;
  background-size: inherit;
  position: absolute;
  top: 0px;
  left: 0;
}
#demo::before {
  clip-path: polygon(33% 28%, 39% 28%, 39% 67%, 16% 67%, 16% 57%, 33% 57%);
}
#demo::after {
  clip-path: polygon(68% 28%, 72% 28%, 72% 67%, 50% 67%, 50% 57%, 68% 57%);
}
@keyframes rotate {
  0%,
  100% {
    transform: rotateY(30deg);
  }
  50% {
    transform: rotateY(-30deg);
  }
}
</style>

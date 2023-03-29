<div class="w-32 h-32 bg-blue-200 mx-auto clip overflow-clip m-4">
  <div class="w-32 h-32 absolute overflow-clip border-4 border-black">
    <div class="background w-full h-full" />
  </div>
  <svg class="absolute">
    <g style="transform: translate(10,10)">
      <circle class="ball" r="10" stroke="black" stroke-width="3px" />
    </g>
    <g>
      <rect h="1px" w="10px" stroke="black" />
    </g>
  </svg>
</div>

<style>
  .ball {
    fill: violet;
    animation-name: bouncing;
    animation-duration: 0.4s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: bounce;
  }
  .background {
    background-color: #e5e5f7;
    opacity: 0.2;
    background: repeating-linear-gradient(45deg, blue, blue 2px, #e5e5f7 2px, #e5e5f7 18px);
    width: 300%;
    background-repeat: repeat;
    animation-name: scrolling;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes scrolling {
    from {
      transform: translate(0px, 0px);
    }
    to {
      transform: translate(-50%, 0px);
    }
  }

  @keyframes bouncing {
    from {
      transform: translate(64px, 115px) scale(1, 0.9);
    }
    to {
      transform: translate(64px, 20px) scale(0.9, 1);
    }
  }
</style>

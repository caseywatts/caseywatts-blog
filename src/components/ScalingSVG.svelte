<div class="w-64 bg-blue-200 mx-auto clip overflow-clip m-4">
  <svg width="100%" viewBox="0 0 1080 1080">
    <g name="background">
      <rect name="cloud" x="200px" y="200px" />
      <rect name="cloud" x="300px" y="300px" />
      <rect name="cloud" x="600px" y="100px" />
      <rect name="cloud" x="1000px" y="400px" />
      <rect name="plant" x="200px" y="990px" />
      <rect name="plant" x="600px" y="990px" />
    </g>
    <rect name="border" />
    <rect name="margin" />
    <rect name="floor" />
    <g style="transform: translate(540px,60px)">
      <circle class="ball" stroke="black" stroke-width="3px" />
    </g>
  </svg>
</div>

<style>
  /* DEBUGGING */
  /* svg { */
  /* border: 1px solid blue; */
  /* width: 100%; */
  /* } */
  /* g {
    outline: solid 3px blue;
    outline-offset: 5px;
  }
  g:hover {
    outline-color: red;
  } */

  /* LAYOUT */
  :root {
    --canvas-outer-size: 1080px;
    --margin: 30px;
  }
  :root {
    --canvas-inner-size: calc(var(--canvas-outer-size) - var(--margin) - var(--margin));
    --ball-radius: 60px;
    --ball-stroke: 10px;
    --floor-height: 30px;
    --stretch-squish-strength: 0.15;
  }

  rect[name="border"] {
    stroke: black;
    stroke-width: calc(var(--margin) * 2);
    fill: none;
    width: var(--canvas-outer-size);
    height: var(--canvas-outer-size);
  }

  rect[name="margin"] {
    x: var(--margin);
    y: var(--margin);
    width: calc(var(--canvas-size) - var(--margin) * 2);
    height: calc(var(--canvas-size) - var(--margin) * 2);
    fill: rgb(255, 144, 235);
  }

  rect[name="floor"] {
    x: var(--margin);
    y: calc(var(--margin) + var(--canvas-inner-size) - var(--floor-height));
    width: var(--canvas-inner-size);
    height: var(--floor-height);
    fill: green;
  }

  /* BALL */
  .ball {
    fill: violet;
    stroke: black;
    stroke-width: var(--ball-stroke);
    animation-name: bouncing;
    animation-duration: 0.7s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: bounce;
    r: var(--ball-radius);
  }
  @keyframes bouncing {
    from {
      transform: translate(0, calc(var(--canvas-outer-size) - var(--margin) - var(--floor-height) - var(--ball-radius) * 2 + var(--ball-radius) * var(--stretch-squish-strength))) scale(1, calc(1 - var(--stretch-squish-strength)));
    }
    to {
      transform: translate(0, 60px) scale(calc(1 - var(--stretch-squish-strength)), 1);
    }
  }

  /* MOVING BACKGROUND */
  g[name="background"] {
    animation-name: background-scrolling;
    animation-duration: calc(0.7s * 7);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  rect[name="cloud"] {
    fill: white;
    width: 340px;
    height: 140px;
  }
  rect[name="plant"] {
    fill: green;
    width: 20px;
    height: 30px;
  }

  @keyframes background-scrolling {
    from {
      transform: translate(120%, 0px);
    }
    to {
      transform: translate(-120%, 0px);
    }
  }
</style>

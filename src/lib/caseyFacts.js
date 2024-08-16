import CASEY_FACTS from "../data/facts.json";

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

class CaseyFacts {
  random() {
    return random(CASEY_FACTS);
  }
  // findBySlug() {
  //   // tbd
  //   return CASEY_FACTS[0];
  // }
}

export default new CaseyFacts();

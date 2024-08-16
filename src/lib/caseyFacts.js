import CASEY_FACTS from "../data/facts.json";

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

class CaseyFacts {
  random() {
    return random(CASEY_FACTS);
  }
  get allShuffled() {
    shuffle(CASEY_FACTS);
    return CASEY_FACTS;
  }
  // findBySlug() {
  //   // tbd
  //   return CASEY_FACTS[0];
  // }
}

export default new CaseyFacts();

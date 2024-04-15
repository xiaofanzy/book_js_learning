function* generatorF2() {
  return yield "foo";
}

let fooss = generatorF2();
console.log(fooss.next());
console.log(fooss.next("bar"));
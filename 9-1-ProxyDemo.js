const target = {
  id : '123'
}
const handle = {};
const proxy = new Proxy(target,handle)
console.log(proxy.id)
console.log(target.id)

proxy.id = '456'
console.log(proxy.id)
console.log(target.id)

// target and proxy has same id
console.log(target.hasOwnProperty('id'));
console.log(proxy.hasOwnProperty('id'));

//can't use instanceof because proxy.proprrty is undefined
//console.log(target instanceof Proxy)

// struct equal check is false
console.log(proxy === target);
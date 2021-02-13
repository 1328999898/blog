function foo() {
  console.log('foo')
}

process.nextTick(foo)
console.log('err')

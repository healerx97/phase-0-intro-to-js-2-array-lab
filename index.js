// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const appendedCats = [...cats, name]
    return appendedCats
}

function prependCat(name) {
    const prependedCats = [name, ...cats]
    return prependedCats
}

function removeLastCat() {
    const removedLastCat = cats.slice(0, -1)
    return removedLastCat
}

function removeFirstCat() {
    const removedFirstCat = cats.slice(1)
    return removedFirstCat
}
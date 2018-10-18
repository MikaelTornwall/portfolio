// Inspiration from https://codepen.io/pimskie/pen/jEVPNx
const canvas = document.querySelector('.snow')
const ctx = canvas.getContext('2d')
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight
const numFlakes = 50
const flakes = []

function Flake (x, y) {
  const maxWeight = 1
  const maxSpeed = 1

  this.x = x
  this.y = y
  this.r = randomBetween(0, 1)
  this.a = randomBetween(0, Math.PI)
  this.aStep = 0.01

  this.weight = randomBetween(2, maxWeight)
  this.alpha = (this.weight / maxWeight)
  this.speed = (this.weight / maxWeight) * maxSpeed

  this.update = () => {
    this.x += Math.cos(this.a) * this.r
    this.a += this.aStep
    this.y += this.speed
  }
}

const init = () => {
  let i = numFlakes
  let flake,
      x,
      y

  while (i--) {
    x = randomBetween(0, windowWidth, true)
    y = randomBetween(0, windowHeight, true)

    flake = new Flake(x, y)
    flakes.push(flake)
  }
  scaleCanvas()
  loop()
}

const scaleCanvas = () => {
  canvas.width = windowWidth
  canvas.height = windowHeight
}

const loop = () => {
  let i = flakes.length
  let z,
      dist,
      flakeA,
      flakeB

  ctx.save()
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.clearRect(0, 0, windowWidth, windowHeight)
  ctx.restore()

  while (i--) {
    flakeA = flakes[i]
    flakeA.update()

    ctx.beginPath()
    ctx.arc(flakeA.x, flakeA.y, flakeA.weight, 0, 1.3 * Math.PI, false)
    ctx.fillStyle = '#f7df07'
    ctx.fill()

    if (flakeA.y >= windowHeight) {
      flakeA.y = -flakeA.weight
    }
  }
  requestAnimationFrame(loop)
}

const randomBetween = (min, max, round) => {
  let num = Math.random() * (max - min + 0.5) + min

  if (round) {
    return Math.floor(num)
  } else {
    return num
  }
}

const distanceBetween = (v1, v2) => {
  let dx = v2.x - v1.x
  let dy = v2.y - v1.y

  return Math.sqrt(dx * dx +  dy * dy)
}

window.onload = init()

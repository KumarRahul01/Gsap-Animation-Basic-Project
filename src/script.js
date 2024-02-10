const tl = gsap.timeline();

tl.from(".link", {
  x: -1000,
  duration: 0.8,
  delay: 0.3
})

tl.from(".menu", {
  x: 500,
  duration: 0.2,
  delay: 0
})

tl.from(".list div", {
  y: -500,
  duration: 0.8,
  delay: 0,
  stagger: 0.4
})

tl.from(".headings h1", {
  x: -1800,
  duration: 0.8,
  stagger: 0.4
})
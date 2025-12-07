export const funnyBookmarkMessages = [
  "Saved! We promise not to lose it... probably.",
  "Bookmarked! It's safe with us (we think).",
  "Added to your collection of things you'll read later (maybe).",
  "Saved! Now you can forget about it guilt-free.",
  "Bookmarked! Your future self will thank you. Or not.",
  "Saved! We'll keep it warm for you.",
  "Added! This article is now part of your digital hoarding.",
  "Bookmarked! Achievement unlocked: Procrastinator Level 100",
]

export const funnyErrorMessages = [
  "Oops! The hamsters fell asleep. Try again?",
  "Error 418: I'm a teapot. Wait, wrong error...",
  "Something went wrong. Probably Mercury in retrograde.",
  "The internet gremlins are at it again!",
  "Error: Coffee levels critically low. Please refill and retry.",
  "404: Our motivation not found. But we'll try anyway!",
]

export const getRandomMessage = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

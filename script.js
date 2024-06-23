const fortunes = [
  "True wisdom comes not from knowledge, but from understanding.",
  "A journey of a thousand miles begins with a single step.",
  "The only way to do great work is to love what you do.",
  "Fortune favors the brave.",
  "You will receive a fortune cookie.",
  "An investment in knowledge always pays the best interest.",
  "Your road to glory will be rocky, but fulfilling.",
  "You will soon be surrounded by good friends and laughter."
];


function generateRandomFortune() {
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  // Return the fortune at that index
  return fortunes[randomIndex];
}


function displayFortune() {
  const fortuneElement = document.getElementById('fortuneDisplay');
  const fortune = generateRandomFortune();
  fortuneElement.textContent = fortune;
}

document.addEventListener('DOMContentLoaded', displayFortune);

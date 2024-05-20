function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (true) {
  const element = document.querySelector('[aria-label="Confirm"]');
  if (element) {
    setTimeout(() => {
      element.click();
    }, getRandomInt(1000, 5000)); // Random delay between 1 to 5 seconds
}
}

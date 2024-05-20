


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let counter = 0;
const elements = document.querySelectorAll('div[aria-label="Confirm"]');
elements.forEach(element => {
  setTimeout(() => {
    element.click();
    counter++;
    if (counter % 5 === 0) {
    
 const sidebar =   document.querySelector('div[aria-label="Friend requests"] > div > div:nth-child(2)');
      
      sidebar.scrollTo(0, 10000000); //  Scrolls the sidebar to the bottom
}
  }, getRandomInt(1000, 5000)); // Random delay between 1 to 5 seconds
});










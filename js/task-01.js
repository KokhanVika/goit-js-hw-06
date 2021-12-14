// const categoriesList = () => {
//     const categories = document.querySelectorAll('.item');
//     console.log(`Number of categories: ${categories.length}`);
  
//     categories.forEach(element => {
//       console.log(`Category: ${element.querySelector('h2').textContent}`);
//       console.log(`Elements: ${element.querySelectorAll('li').length}`);
//     });
//   };
  
//   categoriesList();


const list = document.querySelector('#categories');
const items = list.querySelectorAll('.item');
console.log(`Numbers of categories: ${items.length}`);
items.forEach(element => {
  const h2 = element.querySelector('h2');
  const elementItems = element.querySelectorAll('li');
  console.log(`Category: ${h2.textContent}`);
  console.log(`Elements: ${elementItems.length}`)
});





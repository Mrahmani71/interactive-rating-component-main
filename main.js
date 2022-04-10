const items = document.querySelectorAll("li")
items.forEach(item => {
  item.addEventListener("click", selected)
})

const submit = document.querySelector('.submit')
submit.addEventListener('click', submited)

let rating;

function selected(e) {
  Array.prototype.slice.call(document.querySelectorAll('li'))
  .filter(function (el) {
    if (el.firstChild.textContent === e.target.firstChild.textContent) {
      el.classList.add('selected');
      rating = el.firstChild.textContent
    } else {
      el.classList.remove('selected');
      console.log("no", el)
    }
  });

}

function submited () {
console.log("hello")
 document.querySelector('.container').style.display = 'none';
 document.querySelector('.thank').style.display = 'block';
 document.querySelector('.thank').style.visibility = "visible";
 document.querySelector('.rating').textContent = rating;
  
}

// function selected(e) {
//   const test = document.querySelectorAll("li")
//   const item =  test.filter(function(creature) {
//      return creature !== "Ocean";
//    });
  
//   console.log(test[0].firstChild.textContent);
//  // items.filter(item => item.firstChild.textContent > 0)
// //  items.forEach(item => {
// //    if (item.firstChild.textContent === e.target.firstChild.textContent) {
// //     e.target.classList.add('selected');
// //    } else {
// //     e.target.classList.remove('selected');
// //    }
// //  })
// }
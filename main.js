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
  document.querySelector('body').style.backgroundColor = "black"
 document.querySelector('.container').style.display = 'none';
 document.querySelector('.thank').style.display = 'flex';
 document.querySelector('.thank').style.visibility = "visible";
 document.querySelector('.rating').textContent = rating;
  
}
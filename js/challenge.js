const count = document.querySelector('#counter');
let c = 0;

function increment() {
  c++;
  count.innerHTML = c;
}

function decrement() {
  c--;
  count.innerHTML = c;
}


num = setInterval(increment, 1000); 

const plus = document.querySelector('#plus');
plus.addEventListener('click', function() {
  increment();
});

const minus = document.querySelector('#minus');
minus.addEventListener('click', function() {
  decrement();
});

const pause = document.querySelector('#pause');
pause.addEventListener('click', function() {
  clearInterval(num); 
});


const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  const commentForm = document.getElementById('comment-form');
  const commentInput = document.getElementById('comment-input');
  const commentValue = commentInput.value;
  const p = document.createElement('p')
  p.innerText = commentValue;
  const div = document.querySelector('.comments')
  div.appendChild(p);
  commentForm.reset();
});

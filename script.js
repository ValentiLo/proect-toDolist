// let todoForm = document.querySelector('.todo-form');
// let commentList = document.querySelector('.todo-list');
// let todoInput = document.querySelector('.todo-input');
// let priority = document.querySelector('.todo-priority');

// priority.onclick = function () {
// if (priority.classList.contains('is-important')) {
// priority.textContent = 'Обычная задача';
// } else {
// priority.textContent = 'Важная задача';
// }
// priority.classList.toggle('is-important');
// };

// todoForm.onsubmit = function (evt) {
//   evt.preventDefault();

//   let newComment = document.createElement('li');
//   if (priority.classList.contains('is-important')) {
// newElement.classList.add('is-important')
// };
//   newComment.classList.add('todo-list');
//   newComment.textContent = todoInput.value;
//   todoInput.value = '';
//   commentList.append(newComment);
// };
let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');

priority.onclick = function () {
  priority.classList.toggle('is-important');
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Важная задача';
  } else {
    priority.textContent = 'Обычная задача';
  }
};

form.onsubmit = function (evt) {
  evt.preventDefault();
};

let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');

priority.onclick = function () {
if (priority.classList.contains('is-important')) {
priority.textContent = 'Обычная задача';
} else {
priority.textContent = 'Важная задача';
}
priority.classList.toggle('is-important');
};

form.onsubmit = function (evt) {
evt.preventDefault();

let newElement = document.createElement('li');
if (priority.classList.contains('is-important')) {
newElement.classList.add('is-important')
};
newElement.textContent = input.value;
input.value = '';
list.append(newElement);
};
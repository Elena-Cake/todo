// form
const inputToDo = document.querySelector('.main__input');
const buttonSend = document.querySelector('.main__btn-send');

// todo
const todoListContainer = document.querySelector('.main__todo-list');

// popup
const popup = document.querySelector('.todo__popup');
const popupInput = popup.querySelector('.todo__text_type_inp');
const popupDoneBtn = popup.querySelector('.todo__icon_type_btn-done');
const popupCloseBtn = popup.querySelector('.todo__icon_type_btn-close');


// add todo function
function createTodo (text) {
    const todoTemplate = document.querySelector('.main__list').content;
    const todoElement = todoTemplate.querySelector('.todo').cloneNode(true);
    todoElement.querySelector('.todo__text').textContent = text;

    // edit
    todoElement.querySelector('.todo__icon_type_btn-edit').addEventListener('click',() =>{
      popup.classList.add('todo__popup_open')
      popupInput.value = text;
    } )

    // copy
    todoElement.querySelector('.todo__icon_type_btn-copy').addEventListener('click',() =>{
      const todo = createTodo(text);
      addElementInContainer(todo , todoListContainer);
    } )

    // delete
    todoElement.querySelector('.todo__icon_type_btn-delete').addEventListener('click',() =>{
      todoElement.closest('.todo').remove()
    } )

return todoElement
}

// добавление кода в html элемент
function addElementInContainer(element,container) { 
    container.prepend(element);
  } 

  // добавление массива дел
  list.reverse().forEach(item => {
    const todo = createTodo(item);
    addElementInContainer(todo , todoListContainer)
  });

  // добавление из инпута
  buttonSend.addEventListener('click', submitHandler)

  function submitHandler (event) {
    event.preventDefault();
    if (inputToDo.value !== '') {
      todo = createTodo(inputToDo.value);
      addElementInContainer(todo , todoListContainer)
    }
  }

  // закрытие попапа
  popupCloseBtn.addEventListener('click', () => {
    popup.classList.remove('todo__popup_open')
  })
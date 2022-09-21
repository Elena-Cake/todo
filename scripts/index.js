// form
const inputToDo = document.querySelector('.main__input')
const buttonSend = document.querySelector('.main__btn-send')

// todo
const todoListContainer = document.querySelector('.main__todo-list')

// const todoEditInput = todoElement.querySelector('.todo__text_type_inp')


// add todo function
function createTodo (text) {
    const todoTemplate = document.querySelector('.main__list').content;
    const todoElement = todoTemplate.querySelector('.todo').cloneNode(true);
    todoElement.querySelector('.todo__text').textContent = text;

    // edit
    todoElement.querySelector('.todo__icon_type_btn-edit').addEventListener('click',() =>{
      
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
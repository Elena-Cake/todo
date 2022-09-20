// form
const inputToDo = document.querySelector('.main__input')
const buttonSend = document.querySelector('.main__btn-send')

// todo
const todoListContainer = document.querySelector('.main__todo-list')


// add todo function
function createTodo (text) {
    const todoTemplate = document.querySelector('.main__list').content;;
    const todoElement = todoTemplate.querySelector('.todo').cloneNode(true);;
    console.log(todoElement);
    todoElement.querySelector('.todo__text').textContent = text;

    // edit

    // copy

    // delete
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


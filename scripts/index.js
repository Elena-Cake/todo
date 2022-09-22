// form
const inputToDo = document.querySelector('.main__input');
const buttonSend = document.querySelector('.main__btn-send');

// todo
const todoListContainer = document.querySelector('.main__todo-list');

// popup
const popup = document.querySelector('.popup');
const popupInput = popup.querySelector('.todo__text_type_inp');
const popupDoneBtn = popup.querySelector('.todo__icon_type_btn-done');
const popupCloseBtn = popup.querySelector('.todo__icon_type_btn-close');

// открыть попап закрыть попап
function openPopup(p) {
  p.classList.add('popup_open');
};

function closePopup(p) {
  p.classList.remove('popup_open');
};


// add todo function
function createTodo (text) {
    const todoTemplate = document.querySelector('.main__list').content;
    const todoElement = todoTemplate.querySelector('.todo').cloneNode(true);
    todoElement.querySelector('.todo__text').textContent = text;

    // edit
    todoElement.querySelector('.todo__icon_type_btn-edit').addEventListener('click',(event) =>{
      editingItem = event.target.closest('.todo')
      openPopup(popup);
      popupInput.value = editingItem.querySelector('.todo__text').textContent;
      popupInput.focus();
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
    closePopup(popup);
  })

  // изменение 
  popupDoneBtn.addEventListener('click', submitEditHandler);

  function submitEditHandler(event)  {
    event.preventDefault();
    editingItem.querySelector('.todo__text').textContent = popupInput.value;
    closePopup(popup);
  };
# ModalUps
 Simple modal windows
 
____

# Documentation
 Краткое руководство/Quick guide
 
## En
Move the files from the `dist` folder to the project folder and connect them in `index.html`
Structure of modal windows:
1. Overlay. Also plays the role of a wrapper, when you click on it, the pop-up window closes. Overlay is created with the `modal-overlay` attribute:
```html
<div modal-overlay>

</div>
```
2. Modal windows are placed inside overlay. They are created with the `modal-window=""` attribute. The attribute value is the name of the modal window. Markup:
```html
<div modal-overlay>

  <div modal-window="window1">
  </div>

  <div modal-window="window2">
  </div>

  <!-- ... -->

  <div modal-window="windowN">
  </div>

</div>
```
3. You can optionally place a window close button inside the modal window - it is created with the `close-modal-window` attribute:
```html
<div modal-overlay>

  <div modal-window="windowName">
    <div close-modal-window></div>
    <h1>This is modal window</h1>
  </div>

</div>
```
4. Place a button outside the overlay to open the modal window. It is created with the `open-modal-window` attribute, which value is the name of the associated window. Markup:
```html
<div modal-overlay>

  <div modal-window="windowName">
    <div close-modal-window></div>
    <h1>This is modal window</h1>
  </div>

</div>

<button open-modal-window="windowName">Open modal window</button>
```
____

Overlay has the `display: flex` property to align windows in the center, and has an upper internal indent of `15vh`.
When the pop-up window is open, scrolling `body` is blocked.
You can add styles to the modal window and buttons.
In the project, it is advisable not to specify the 'z-index' above 999.
I hope this solution will help you save valuable time!

____

## Русский

Переместите файлы из папки `dist` в папку с проектом и подключите их в `index.html`
Структура модальных окон:
1. Overlay - также играет роль обёртки, при нажатии на него всплывающее окно закрывается. Overlay создаётся с атрибутом `modal-overlay`: 
```html
  <div modal-overlay>

  </div>
```
2. Внутри overlay размечаются модальные окна. Они создаются с атрибутом `modal-window=""`. Значение атрибута - название модального окна. Разметка:
```html
  <div modal-overlay>
   
    <div modal-window="window1">
    </div>

    <div modal-window="window2">
    </div>
   
    <!-- ... -->
   
    <div modal-window="windowN">
    </div>
   
  </div>
```
3. Внутри модального окна по желанию можно разместить кнопку закрытия окна - она создаётся с атрибутом `close-modal-window`:
```html
  <div modal-overlay>

    <div modal-window="windowName">
      <div close-modal-window></div>
      <h1>This is modal window</h1>
    </div>
    
  </div>
```
4. За пределами overlay необходимо разместить кнопку для вызова модального окна. Она создаётся с атрибутом `open-modal-window`, значением которого устанавливается название связанного окна. Разметка:
```html
  <div modal-overlay>

    <div modal-window="windowName">
      <div close-modal-window></div>
      <h1>This is modal window</h1>
    </div>
    
  </div>

  <button open-modal-window="windowName">Open modal window</button>
```
____

Overlay имеет свойство `display: flex` для выравнивания окон по центру, имеет верхний внутренний отступ в `15vh`.
При открытом модальном окне блокируется прокрутка `body`.
Разрешается прописывать стили к модальному окну и кнопкам.
В проекте желательно не указывать `z-index` выше 999.
Надеюсь, это решение поможет вам сэкономить драгоценное время!

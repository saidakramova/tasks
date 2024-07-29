import Plus from "./assets/about/plus.svg";
import Close from "./assets/about/close.svg";
import Delete from "./assets/about/delete.svg";
import './styles/about.scss';

class Todo {
  constructor() {}

  bindEvents() {
    document.querySelectorAll(".todo-add").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelector(".modal").classList.add("modal--active");
      });
    });

    document
      .querySelector(".modal__top-close-icon")
      .addEventListener("click", () => {
        document.querySelector(".modal").classList.remove("modal--active");
      });
  }

  render() {
    return `
        <section class="todo">
          <section class="modal">
            <div class="containers">
              <div class="modal__containers">
               <div class="modal__top">
                <h2 class="modal__top-heading">
                 Development Handoff
                </h2>
                <img
                 width="10"
                 height="10" 
                 src=${Close} 
                 alt="close icon"
                 class="modal__top-close-icon"
                />
               </div>

               <ul class="modal__list">
                <li class="modal__item">
                 <h3 class="modal__item-title">
                  Status
                 </h3>
                 <select class="modal__select">
                   <option selected disabled>Select an option</option>
                   <option><span class="modal__select-blue">To do</span></option>
                   <option><span class="modal__select-orange">In Progress</span></option>
                   <option><span class="modal__select-gray">Reivew</span></option>
                   <option><span class="modal__select-green">Done</span></option>
                 </select>
                </li>
               </ul>

               <div class="modal__bottom">
                <button type="button" class="modal__bottom-btn">
                 <img
                  width="12"
                  height="12" 
                  src=${Delete} 
                  alt="delete icon" 
                  class="modal__bottom-icon"
                />
                <span class="modal__bottom-text">
                 Delete
                </span>
                </button>
                <button 
                 type="button" 
                 class="modal__bottom-save"
                >
                 Save
                </button>
               </div>
              </div>
               
            </div>
           
          </section>
          <div class="containers">
            <ul class="todo__list">
             <li class="todo__item">
                <div class="todo__top">
                  <h2 class="todo__top-heading">
                   To Do
                  </h2>
                  <button type="button" class="todo__top-btn">
                   <img
                    width="12" 
                    height="12"
                    src=${Plus} 
                    alt="plus icon"
                    class="todo__top-icon"
                    />
                  </button>
                </div>
                <ul class="todo__cards">
                 <li class="todo__card">
                  <h3 class="todo__card-title">
                   Requirement Analysis
                  </h3>
                  <p class="todo__card-text">
                   Thoroughly analyze the user stories to 
                   understand the requirements, goals, and tasks 
                   users need to perform.
                  </p>
                  <footer class="todo__footer">
                   <span class="todo__footer-span">
                    Low priority
                   </span>
                   <p class="todo__footer-date">
                    Due in May 21, 2024
                   </p>
                  </footer>
                 </li>
                 <li class="todo__card">
                  <h3 class="todo__card-title">
                   Visual Design
                  </h3>
                  <p class="todo__card-text">
                   Establish a design system that includes 
                   color palettes, typography, iconography, 
                   and other visual elements.
                  </p>
                  <footer class="todo__footer">
                   <span class="todo__footer-span todo__footer-span--medium">
                    Medium Priority
                   </span>
                   <p class="todo__footer-date">
                    Due in May 21, 2024
                   </p>
                  </footer>
                 </li>
                </ul>
                <button type="button" class="todo-add">
                <img
                 width="10"
                 src=${Plus} 
                 height="10" 
                 alt="plus icon" 
                 class="todo-add-icon"
                />
                <p class="todo-add-text">
                 Add a card
                </p>
              </button>
             </li>
             <li class="todo__item">
                <div class="todo__top">
                  <h2 class="todo__top-heading">
                   In Progress
                  </h2>
                  <button type="button" class="todo__top-btn">
                   <img
                    width="12" 
                    height="12"
                    src=${Plus} 
                    alt="plus icon"
                    class="todo__top-icon"
                    />
                  </button>
                </div>
                <ul class="todo__cards">
                 <li class="todo__card">
                  <h3 class="todo__card-title">
                   Wireframing
                  </h3>
                  <p class="todo__card-text">
                   Create low-fidelity sketches to brainstorm and 
                   iterate on different layout ideas quickly.
                  </p>
                  <footer class="todo__footer">
                   <span class="todo__footer-span">
                    Low priority
                   </span>
                   <p class="todo__footer-date">
                    Due in May 21, 2024
                   </p>
                  </footer>
                 </li>
                 <li class="todo__card">
                  <h3 class="todo__card-title">
                   Development Handoff
                  </h3>
                  <p class="todo__card-text">
                   Prepare detailed design specifications 
                   and guidelines for developers.
                  </p>
                  <footer class="todo__footer">
                   <span class="todo__footer-span todo__footer-span--medium">
                    Medium Priority
                   </span>
                   <p class="todo__footer-date">
                    Due in May 21, 2024
                   </p>
                  </footer>
                 </li>
                </ul>
                <button type="button" class="todo-add">
                <img
                 width="10"
                 src=${Plus} 
                 height="10" 
                 alt="plus icon" 
                 class="todo-add-icon"
                />
                <p class="todo-add-text">
                 Add a card
                </p>
              </button>
             </li>
              <li class="todo__item">
                <div class="todo__top">
                  <h2 class="todo__top-heading">
                   Review
                  </h2>
                  <button type="button" class="todo__top-btn">
                   <img
                    width="12" 
                    height="12"
                    src=${Plus} 
                    alt="plus icon"
                    class="todo__top-icon"
                    />
                  </button>
                </div>
                <ul class="todo__cards">
                 <li class="todo__card">
                  <h3 class="todo__card-title">
                   Research
                  </h3>
                  <p class="todo__card-text">
                   Conduct research to understand the target audience, 
                   including their preferences, pain points, and 
                   behaviors.
                  </p>
                  <footer class="todo__footer">
                   <span class="todo__footer-span todo__footer-span--red">
                    Top Priority
                   </span>
                   <p class="todo__footer-date">
                    Due in May 21, 2024
                   </p>
                  </footer>
                 </li>
                </ul>
                <button type="button" class="todo-add">
                <img
                 width="10"
                 src=${Plus} 
                 height="10" 
                 alt="plus icon" 
                 class="todo-add-icon"
                />
                <p class="todo-add-text">
                 Add a card
                </p>
              </button>
             </li>
             <li class="todo__item">
                <div class="todo__top">
                  <h2 class="todo__top-heading">
                   Done
                  </h2>
                  <button type="button" class="todo__top-btn">
                   <img
                    width="12" 
                    height="12"
                    src=${Plus} 
                    alt="plus icon"
                    class="todo__top-icon"
                    />
                  </button>
                </div>
                <button type="button" class="todo-add">
                <img
                 width="10"
                 src=${Plus} 
                 height="10" 
                 alt="plus icon" 
                 class="todo-add-icon"
                />
                <p class="todo-add-text">
                 Add a card
                </p>
              </button>
             </li>
            </ul>
          </div>
        </section>
      `;
  }
}

const todo = new Todo().render();
const todo1 = new Todo();

document.addEventListener("DOMContentLoaded", () => {
  todo1.bindEvents();
});

export default todo;

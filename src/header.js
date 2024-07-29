import './styles/about.scss';
class User {
  render() {
    return `
      <section class="user">
       <div class="containers">
       <div class="user__containers">
       <div class="user__block">
         <h2 class="user__block-name">
           Welcome Jane!
          <span class="user__block-editor">
           Editor
          </span>
         </h2>
         <p class="user__block-primary">
          What is on due today? 
         </p>
        </div>
        <div class="user__block">
         <p class="user__block-primary">
          User phone number:
         </p>
         <h2 class="user__block-number">
          +9998 99 212 12 12
         </h2>
        </div>
       </div>
       </div>
      </section>
    `;
  }
}

const user = new User().render();

export default user;

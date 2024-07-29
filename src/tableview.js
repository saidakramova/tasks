import './styles/about.scss';

class Tab {

  render() {
    return `
        <section class="tab">
          <div class="containers">
            <ul class="tab__list">
             <li class="tab__item">
              <button class="tab__item-btn" type="button">
               Table view
              </button>
             </li>
             <li class="tab__item">
              <button class="tab__item-btn tab__item-btn--active" type="button">
               Board view
              </button>
             </li>
            </ul>
          </div>
        </section>
      `;
  }
}

const tab = new Tab().render();

export default tab;



import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { TWStyles } from '../styles/tw.js';

const logo = new URL('../assets/mermaid.png', import.meta.url).href;

@customElement('best-business-template')
export class BestBusinessTemplate extends LitElement {
  @property({ type: String }) title = 'Mejores lorem ipsum en Benidorm';

  static styles = [css ``, TWStyles];

  render() {
    return html`
      <main>
        <div class="logo"><img alt="mermaid" src=${logo} /></div>
        <h1>${this.title}</h1>
        <div class="flex flex-row bg-red-500">
          This is my element
        </div>
      </main>

      <p class="app-footer">
        🍧 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/cambur-frappe"
          >Frappé</a
        >.
      </p>
    `;
  }
}

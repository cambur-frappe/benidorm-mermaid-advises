import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

const logo = new URL('./assets/mermaid.png', import.meta.url).href;

@customElement('best-business-template')
export class BestBusinessTemplate extends LitElement {
  @property({ type: String }) title = 'Mejores lorem ipsum en Benidorm';

  static styles = css`
  `;

  render() {
    return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.title}</h1>
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

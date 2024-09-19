import { LitElement, html, css } from "lit";
import { TWStyles } from "../../styles/tw.js";
import { customElement, property } from "lit/decorators.js";

const logo = "src/assets/mermaid.png";

@customElement("mer-header")
export class MerHeader extends LitElement {
  static styles = [
    css`
      #banner {
        border-top: 4px solid #fb5ea7;
        border-bottom: 1px solid #000000;
      }
    `,
    TWStyles,
  ];

  @property({ type: String })
  title = "Texto de prueba";

  render() {
    return html`
      <header id="banner" class="py-5 xl:px-3 px-5 w-full">
        <div class="flex flex-row w-full max-w-6xl mx-auto">
          <img class="h-8 mr-2" alt="mermaid" src=${logo} />
          <h1 class="hidden">${this.title}</h1>
          <span class="text-2xl font-medium">SIRENA RECOMIENDA</span>
        </div>
      </header>
    `;
  }
}

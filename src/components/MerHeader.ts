import { LitElement, html, css } from "lit";
import { TWStyles } from "../../public/styles/tw.js";
import { customElement, property } from "lit/decorators.js";
import imgUrl from "/public/mermaid.png";

@customElement("mer-header")
export class MerHeader extends LitElement {
  @property({ type: String }) title =
    "La Sirena Recomienda | Las mejores recomendaciones de Benidorm";
  @property({ type: String }) imgSrc = imgUrl.src;

  static styles = [
    css`
      #banner {
        border-top: 4px solid #fb5ea7;
        border-bottom: 1px solid #000000;
      }
    `,
    TWStyles,
  ];

  render() {
    return html`
      <header id="banner" class="py-5 xl:px-3 px-5 w-full">
        <div class="flex flex-row w-full max-w-6xl mx-auto">
          <img class="h-8 mr-2" alt="mermaid" src=${this.imgSrc} />
          <h1 class="hidden">${this.title}</h1>
          <span class="text-2xl font-medium">LA SIRENA RECOMIENDA</span>
        </div>
      </header>
    `;
  }
}

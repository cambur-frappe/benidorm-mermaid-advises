import { LitElement, css, html } from "lit";
import { TWStyles } from "../../public/styles/tw";
import { customElement, property } from "lit/decorators.js";
import type { ArticleProps } from "../types/ArticleProps";

@customElement("mer-small-article")
export class MerSmallArticle extends LitElement implements ArticleProps {
  @property({ type: String }) title = "";
  @property({ type: String }) tags = "";
  @property({ type: String }) imgSrc = "";

  static styles = [css``, TWStyles];
  render() {
    return html`
      <article class="flex flex-row items-center">
        <img src="${this.imgSrc}" class="h-4/6 lg:w-4/12 w-3/12" />
        <div class="small-article-desc p-3">
          <span class="text-gray-400 text-xs">${this.tags}</span>
          <h3 class="text-lg font-medium my-1">${this.title}</h3>
        </div>
      </article>
    `;
  }
}

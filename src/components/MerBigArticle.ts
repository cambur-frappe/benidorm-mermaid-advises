import { LitElement, html, css } from "lit";
import { TWStyles } from "../../public/styles/tw";
import { customElement, property } from "lit/decorators.js";
import type { ArticleProps } from "../types/ArticleProps";

@customElement("mer-big-article")
export class MerBigArticle extends LitElement implements ArticleProps {
  @property({ type: String }) title = "";
  @property({ type: String }) description = "";
  @property({ type: String }) tags = "";
  @property({ type: String }) imgSrc = "";

  static styles = [
    css`
      .main-article-desc {
        border: 1px solid #838383;
        border-top: 0;
      }
    `,
    TWStyles,
  ];

  render() {
    return html`
      <article class="h-auto w-full">
        <img src=${this.imgSrc} class="h-auto xl:max-w-5xl w-full" />
        <div class="main-article-desc p-3">
          <!-- TO-DO: Dynamic tags -->
          <span class="text-slate-400 text-xs">${this.tags}</span>
          <h2 class="text-2xl font-medium my-2 leading-relaxed">
            ${this.title}
          </h2>
          <p class="text-sm text-left text-gray-500">${this.description}</p>
        </div>
      </article>
    `;
  }
}

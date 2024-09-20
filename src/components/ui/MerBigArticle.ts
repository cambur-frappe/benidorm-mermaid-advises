import { LitElement, html, css } from "lit";
import { TWStyles } from "../../styles/tw";
import { customElement, property } from "lit/decorators.js";

@customElement("mer-big-article")
export class MerBigArticle extends LitElement {
  @property({ type: String }) title = "";
  @property({ type: String }) description = "";
  @property({ type: String }) tags = "";

  static styles = [css`
      .main-article-desc {
        border: 1px solid #838383;
        border-top: 0;
      }
      `, TWStyles];

  render() {
    return html`
      <article class="h-auto w-full">
        <img src="https://picsum.photos/1920/1080" class="h-auto xl:max-w-5xl w-full" />
        <div class="main-article-desc p-3">
          <!-- TO-DO: Dynamic tags -->
          <span class="text-slate-400 text-xs">${this.tags}</span>
          <h2 class="text-2xl font-medium my-2 leading-relaxed">
            ${this.title}
          </h2>
          <p class="text-sm text-left text-gray-500">
            ${this.description}
          </p>
        </div>
      </article>
    `;
  }
}

import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./MerSmallArticle.ts";
import type { ArticleProps } from "../types/ArticleProps";
import { TWStyles } from "../../public/styles/tw.ts";
import { boolean } from "astro:schema";

const relatedArticles: ArticleProps[] = [
  {
    title: "Primer artículo relacionado",
    tags: "Cultura, Qué Hacer",
    imgSrc: "https://picsum.photos/290/220",
  },
  {
    title: "Segundo artículo relacionado",
    tags: "Qué Comer, Cultura",
    imgSrc: "https://picsum.photos/290/220",
  },
  {
    title: "Tercer artículo relacionado",
    tags: "Dónde Aparcar",
    imgSrc: "https://picsum.photos/290/220",
  },
  {
    title: "Cuarto artículo relacionado",
    tags: "Eventos, Deportes",
    imgSrc: "https://picsum.photos/290/220",
  },
];

@customElement("mer-related-posts")
export class MerRelatedPosts extends LitElement {
  @property({ type: Boolean }) showRelatedOnSm = false;
  static styles = [css``, TWStyles];

  render() {
    return html`
      <section
        class="xl:flex ${this.showRelatedOnSm
          ? "hidden"
          : ""} flex-col gap-8 w-full lg:mt-0 mt-5"
      >
        <h2 class="text-2xl font-medium xl:block hidden">NO TE LO PIERDAS</h2>
        ${relatedArticles.map(
          (article: ArticleProps) =>
            html`<mer-small-article
              title="${article.title}"
              tags="${article.tags}"
              imgSrc="${article.imgSrc}"
            ></mer-small-article>`
        )}
      </section>
    `;
  }
}

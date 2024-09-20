import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";
import { TWStyles } from "../styles/tw.js";
import "./ui/MerHeader.js";
import "./ui/MerNav.js";
import "./ui/MerBigArticle.js";
import "./ui/MerSmallArticle.js";

const relatedArticles = [
  {
    title: "Primer artículo relacionado",
    tags: "Cultura, Qué Hacer",
  },
  {
    title: "Segundo artículo relacionado",
    tags: "Qué Comer, Cultura",
  },
  {
    title: "Tercer artículo relacionado",
    tags: "Dónde Aparcar",
  },
  {
    title: "Cuarto artículo relacionado",
    tags: "Eventos, Deportes",
  }
];

@customElement("mer-home")
export class MerHome extends LitElement {
  static styles = [
    css`
      #wrapper {
        font-family: "Montserrat", "Verdana", sans-serif;
      }

      .tags {
        color: #adadad;
        font-size: 0.8rem;
      }
    `,
    TWStyles,
  ];

  render() {
    return html`
      <div id="wrapper" class="flex flex-col">
        <mer-header></mer-header>
        <mer-nav></mer-nav>
        <main class="flex flex-col flex-1 mx-auto w-full max-w-6xl">
          <div
            class="flex xl:flex-row flex-col gap-6 items-center xl:px-0 p-5"
          >
            <section>
              <mer-big-article
                title="Mejores lorem ipsum en Benidorm"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, arcu nec vehicula..."
                tags="Cultura, Qué Hacer"
              ></mer-big-article>
            </section>
            <section class="flex flex-col gap-8 xl:w-4/12 w-full lg:mt-0 mt-5">
              <h2 class="text-2xl font-medium xl:block hidden">
                NO TE LO PIERDAS
              </h2>
              ${relatedArticles.map(
                (article) => html`
                  <mer-small-article
                    title=${article.title}
                    tags=${article.tags}
                    imgSrc="https://picsum.photos/290/220"
                  ></mer-small-article>
                `
              )
              }
            </section>
          </div>
        </main>
        <footer class="flex flex-row justify-center text-xs py-2">
          <p>Made with love by</p>
          <a
            class="text-pink-500 font-semibold ml-1"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/cambur-frappe"
            >Frappé 🍧</a
          >
        </footer>
      </div>
    `;
  }
}

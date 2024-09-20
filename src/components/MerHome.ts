import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";
import { TWStyles } from "../styles/tw.js";
import "./ui/MerHeader.js";
import "./ui/MerNav.js";
import "./ui/MerBigArticle.js";

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
          <section
            class="flex xl:flex-row flex-col gap-6 items-center place-content-between xl:px-0 p-5"
          >
            <mer-big-article
              title="Mejores lorem ipsum en Benidorm"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, arcu nec vehicula..."
              tags="Cultura, Qué Hacer"
            ></mer-big-article>
            <aside class="flex flex-col gap-8 xl:w-4/12 w-full lg:mt-0 mt-5">
              <h2 class="text-2xl font-medium xl:block hidden">
                NO TE LO PIERDAS
              </h2>
              <div class="flex flex-row">
                <img
                  src="https://picsum.photos/290/220"
                  class="h-4/6 lg:w-4/12 w-3/12"
                />
                <div class="px-3">
                  <span class="tags">Dónde Comer</span>
                  <h3 class="text-lg font-medium my-1">
                    Mejores lorem ipsum en Benidorm
                  </h3>
                </div>
              </div>
              <div class="flex flex-row">
                <img
                  src="https://picsum.photos/290/220"
                  class="h-4/6 lg:w-4/12 w-3/12"
                />
                <div class="px-3">
                  <span class="tags">Dónde Comer</span>
                  <h3 class="text-lg font-medium my-1">
                    Mejores lorem ipsum en Benidorm
                  </h3>
                </div>
              </div>
              <div class="flex flex-row">
                <img
                  src="https://picsum.photos/290/220"
                  class="h-4/6 lg:w-4/12 w-3/12"
                />
                <div class="px-3">
                  <span class="tags">Dónde Comer</span>
                  <h3 class="text-lg font-medium my-1">
                    Mejores lorem ipsum en Benidorm
                  </h3>
                </div>
              </div>
              <div class="flex flex-row">
                <img
                  src="https://picsum.photos/290/220"
                  class="h-4/6 lg:w-4/12 w-3/12"
                />
                <div class="px-3">
                  <span class="tags">Dónde Comer</span>
                  <h3 class="text-lg font-medium my-1">
                    Mejores lorem ipsum en Benidorm
                  </h3>
                </div>
              </div>
            </aside>
          </section>
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

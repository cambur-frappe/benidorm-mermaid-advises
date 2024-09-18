import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";
import { TWStyles } from "../styles/tw.js";

const logo = new URL("../assets/mermaid.png", import.meta.url).href;

@customElement("best-business-template")
export class BestBusinessTemplate extends LitElement {
  @property({ type: String }) title = "Mejores lorem ipsum en Benidorm";

  static styles = [
    css`
      #wrapper {
        font-family: "Montserrat", "Verdana", sans-serif;
      }
      #banner {
        border-top: 4px solid #fb5ea7;
        border-bottom: 1px solid #000000;
      }

      .logo {
        height: 2rem;
        margin-right: 0.5rem;
      }

      nav {
        border-bottom: 1px solid #000000;
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      nav::-webkit-scrollbar {
        display: none;
      }

      .main-article-desc {
        border: 1px solid #838383;
        border-top: 0;
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
        <header id="banner" class="py-5 px-3 w-full">
          <div class="flex flex-row w-9/12 mx-auto">
            <img class="logo" alt="mermaid" src=${logo} />
            <h1 class="hidden">
              La Sirena Recomienda | Las mejores recomendaciones de Benidorm
            </h1>
            <span class="text-2xl font-medium">SIRENA RECOMIENDA</span>
          </div>
        </header>
        <nav class="flex flex-row overflow-auto text-sm text-nowrap">
          <div class="flex flex-row my-1 mx-auto max-w-6xl">
            <a href="#" class="block p-2 font-medium">QUÉ HACER</a>
            <a href="#" class="block p-2 font-medium">DÓNDE COMER</a>
            <a href="#" class="block p-2 font-medium">CULTURA</a>
            <a href="#" class="block p-2 font-medium">BELLEZA</a>
            <a href="#" class="block p-2 font-medium">DÓNDE APARCAR</a>
            <a href="#" class="block p-2 font-medium">PARA NIÑOS</a>
            <a href="#" class="block p-2 font-medium">EVENTOS</a>
            <a href="#" class="block p-2 font-medium">DEPORTES</a>
            <a href="#" class="block p-2 font-medium">VIDA NOCTURNA</a>
          </div>
        </nav>
        <main class="flex flex-col flex-1 mx-auto max-w-6xl">
          <section
            class="flex lg:flex-row flex-col gap-6 items-center place-content-between p-5"
          >
            <article class="lg:w-8/12 w-full">
              <img src="https://picsum.photos/730/427" class="h-auto w-full" />
              <div class="main-article-desc p-3">
                <!-- TO-DO: Dynamic tags -->
                <span class="tags">Cultura, Qué Hacer</span>
                <h2 class="text-2xl font-medium my-2 leading-relaxed">
                  Mejores lorem ipsum en Benidorm
                </h2>
                <p class="text-sm text-left text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod, arcu nec vehicula...
                </p>
              </div>
            </article>
            <article class="flex flex-col gap-8 lg:w-4/12 w-full lg:mt-0 mt-5">
              <h2 class="text-2xl font-medium lg:block hidden">
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
            </article>
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

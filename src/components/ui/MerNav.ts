import { LitElement, html, css } from "lit";
import { TWStyles } from "../../styles/tw.js";
import { customElement, property } from "lit/decorators.js";

const links = [
  { name: "QUÉ HACER", url: "#" },
  { name: "DÓNDE COMER", url: "../templates/gastro.html" },
  { name: "CULTURA", url: "#" },
  { name: "BELLEZA", url: "#" },
  { name: "DÓNDE APARCAR", url: "#" },
  { name: "PARA NIÑOS", url: "#" },
  { name: "EVENTOS", url: "#" },
  { name: "DEPORTES", url: "#" },
  { name: "VIDA NOCTURNA", url: "#" },
];

@customElement("mer-nav")
export class MerNav extends LitElement {
  static styles = [
    css`
      #navigation::before {
        content: "";
        position: absolute;
        left: 0;
        height: 1.25rem;
        width: 1.25rem;
        background: #ffffff
      }

      #navigation::after {
        content: "";
        position: absolute;
        right: 0;
        height: 1.25rem;
        width: 1.25rem;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          #ffffff 75%
        );
      }

      nav {
        border-bottom: 1px solid #000000;
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      nav::-webkit-scrollbar {
        display: none;
      }
    `,
    TWStyles,
  ];

  render() {
    return html`
      <nav class="flex flex-row overflow-auto text-sm text-nowrap">
        <div
          id="navigation"
          class="flex flex-row my-3 xl:px-0 px-5 mx-auto w-full max-w-6xl justify-start"
        >
          ${
            // Iterate over the links array and create an anchor element for each link
            links.map(
              (link) =>
                html`
                  <a href=${link.url} class="block pr-6 font-medium hover:text-pink-400">
                    ${link.name}
                  </a>
                `
            )
          }
        </div>
      </nav>
    `;
  }
}

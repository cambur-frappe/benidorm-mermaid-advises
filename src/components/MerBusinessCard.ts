import { LitElement, css, html } from "lit";
import { TWStyles } from "../../public/styles/tw";
import { customElement, property } from "lit/decorators.js";
import type { IBusiness } from "../types/Business";

@customElement("mer-business-card")
export class MerBusinessCard extends LitElement {
  @property({ type: Object })
  business: IBusiness = {
    displayName: { text: "", languageCode: "" },
    formattedAddress: "",
    internationalPhoneNumber: "",
    rating: 0,
    userRatingCount: 0,
    googleMapsUri: "",
    websiteUri: "",
  };

  static styles = [css``, TWStyles];

  render() {
    return html`
      <div class="business-card">
        <h2 class="text-2xl font-medium">${this.business.displayName.text}</h2>
        <p class="text-sm text-gray-500">${this.business.formattedAddress}</p>
        <img
          src="https://places.googleapis.com/v1/"
          class="h-auto xl:max-w-5xl w-full"
        />
        <p class="text-sm text-gray-500">
          Teléfono: ${this.business.internationalPhoneNumber}
        </p>
        <p class="text-sm text-gray-500">
          Rating: ${this.business.rating} (${this.business.userRatingCount})
        </p>
        <a
          href=${this.business.googleMapsUri}
          target="_blank"
          class="text-sm text-gray-500"
          >Ver en Google Maps</a
        >
        ${this.business.websiteUri
          ? html` <a
              href=${this.business.websiteUri}
              target="_blank"
              class="text-sm text-gray-500"
              >Visitar sitio web</a
            >`
          : ""}
      </div>
    `;
  }
}

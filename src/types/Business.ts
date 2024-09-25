export interface IBusiness {
  internationalPhoneNumber: string;
  formattedAddress: string;
  rating: number;
  googleMapsUri: string;
  websiteUri?: string | '';
  userRatingCount: number;
  displayName: {
    text: string;
    languageCode: string;
  };
}
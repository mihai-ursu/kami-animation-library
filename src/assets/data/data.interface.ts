export default interface Data {
  pages: {
    galleries: Gallery[];
  };
}

export interface Gallery {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
}

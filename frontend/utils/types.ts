export interface Styrare {
  name: string;
  email: string;
  responsibility: string;
  imageName?: string;
  text: string;
}

export interface Event {
  title: string;
  text: string;
  month: string;
  imgPath: string;
}

export interface House {
  label: string;
  description: string;
  imgPath: string;
}

export interface Alumn {
  name: string;
  post: string;
  work: string;
  imageName?: string;
}

export type Value = {
  title: string;
  description: string;
  image: string;
};

export type CarouselItem = {
  title: string;
  image: string;
};

export interface FooterLink {
  title: string;
  path: string;
}

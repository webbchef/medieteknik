export interface Styrare {
  name: string;
  email: string;
  email2?: string;
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

export interface ExternalPagesMT {
  title: string;
  text: string;
  link: string;
}
export type Value = {
  title: string;
  description: string;
  image: string;
};

export type CarouselItem = {
  title: string;
  image: string;
  description: string;
  link: string
};

export interface FooterLink {
  title: string;
  path: string;
}

export interface NewsPost {
  id: string;
  created_time: string;
  message?: string;
  media_type?: 'photo' | 'video' | string;
  media_url?: string;
  permalink_url?: string;
}
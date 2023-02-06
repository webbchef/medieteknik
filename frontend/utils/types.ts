export interface Styrare {
  name: string;
  email: string;
  responsibility: string;
  imageName?: string;
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

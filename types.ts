
export interface Experience {
  id: string;
  number: string;
  company: string;
  role: string;
  description: string[];
  keyProducts: string;
  image: string;
  images?: string[]; // Array of additional images for the gallery
  quote: string;
}

export interface Skill {
  category: string;
  items: string[];
}

// types/navbar.ts
export interface DropdownSection {
  id: number;
  category: string;
  title: string;
  image: string;
  description?: string;
}

export type DropdownType = 'about' | 'developments' | null;
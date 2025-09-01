// lib/navbar/types.ts (update if needed)
export interface DropdownSection {
  id: number;
  category: string;
  title: string;
  image: string;
  href?: string; // Add href property if not already present
  description?: string;
}

export type DropdownType = 'about' | 'developments' | 'media' | null;
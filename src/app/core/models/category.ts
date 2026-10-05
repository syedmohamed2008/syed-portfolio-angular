export interface Category {

  id: string;
  name: string;
  slug: string;
  description: string | null;
  isDeleted: boolean;
  articleCount: number;

}
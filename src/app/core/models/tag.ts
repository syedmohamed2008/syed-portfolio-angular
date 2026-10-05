export interface Tag {
  id: string;
  name: string;
  slug: string | null;
  isDeleted: boolean;
  articleCount: number;
}
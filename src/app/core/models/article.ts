import { Tag } from './tag';

export interface Article {
  id: string;

  title: string;
  slug: string;

  content: string | null;
  imageUrl: string | null;

  youTubeLink: string | null;
  pdfLink: string | null;

  categoryId: string;
  categoryName: string | null;

  publishedDate: string | null;

  isPublished: boolean;
  isDeleted: boolean;

  views: number;
  readingTime: number;

  createdByUserId: string;
  createdByUsername: string | null;

  tags: Tag[];
  tagIds: string[];

  createdOn: string;
}
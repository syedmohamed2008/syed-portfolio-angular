import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articleSummary'
})
export class ArticleSummaryPipe implements PipeTransform {

  transform(
    value: string | null | undefined,
    limit: number = 150
  ): string {

    if (!value) {
      return '';
    }

    const plainText = value
      .replace(/<[^>]*>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ')
      .trim();

    if (plainText.length <= limit) {
      return plainText;
    }

    return plainText
      .substring(0, limit)
      .trim() + '...';
  }
}
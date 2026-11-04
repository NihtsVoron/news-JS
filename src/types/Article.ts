import { ArticleSource } from './ArticleSource';

export interface Article {
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
    source: ArticleSource;
}

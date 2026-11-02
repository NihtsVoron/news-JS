import { Article } from './Article';

export interface ArticlesResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

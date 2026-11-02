import { News } from './News';

export interface SourcesResponse {
    status: string;
    sources: News[];
}

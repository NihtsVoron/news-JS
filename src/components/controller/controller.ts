import AppLoader from './appLoader';
import { ResponseCallback } from '../../types/ResponseCallback';
import { SourcesResponse } from '../../types/SourcesResponse';
import { ArticlesResponse } from '../../types/ArticlesResponse';

class AppController extends AppLoader {
    getSources(callback: ResponseCallback<SourcesResponse>): void {
        super.getResp<SourcesResponse>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: ResponseCallback<ArticlesResponse>): void {
        if (!(e.target instanceof Element) || !(e.currentTarget instanceof Element)) {
            return;
        }
        let target: Element | null = e.target;
        const newsContainer = e.currentTarget;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (!sourceId) return;

                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);

                    super.getResp<ArticlesResponse>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentElement;
        }
    }
}

export default AppController;

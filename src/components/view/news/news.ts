import './news.css';
import { Article } from '../../../types/Article';

class News {
    draw(data: Article[]): void {
        const news = data.slice(0, 10);

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');

        if (!(newsItemTemp instanceof HTMLTemplateElement)) throw new Error('News template not found');

        const newsContainer = document.querySelector('.news');

        if (!newsContainer) throw new Error('News container not found');

        news.forEach((item, idx) => {
            const newsClone = document.importNode(newsItemTemp.content, true);

            const newsItem = newsClone.querySelector('.news__item');
            const photo = newsClone.querySelector('.news__meta-photo');
            const author = newsClone.querySelector('.news__meta-author');
            const date = newsClone.querySelector('.news__meta-date');
            const descriptionTitle = newsClone.querySelector('.news__description-title');
            const descriptionSource = newsClone.querySelector('.news__description-source');
            const descriptionContent = newsClone.querySelector('.news__description-content');
            const readMore = newsClone.querySelector('.news__read-more a');

            if (!newsItem) throw new Error('News item not found');

            if (!author) throw new Error('Author item not found');

            if (!date) throw new Error('Date item not found');

            if (!descriptionTitle) throw new Error('descriptionTitle item not found');

            if (!descriptionSource) throw new Error('descriptionSource item not found');

            if (!descriptionContent) throw new Error('descriptionContent item not found');

            if (!readMore) throw new Error('readMore item not found');

            if (idx % 2) newsItem.classList.add('alt');

            if (!(photo instanceof HTMLElement)) throw new Error('News photo element not found');

            photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            author.textContent = item.author || item.source.name;
            date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            descriptionTitle.textContent = item.title;
            descriptionSource.textContent = item.source.name;
            descriptionContent.textContent = item.description;
            readMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;

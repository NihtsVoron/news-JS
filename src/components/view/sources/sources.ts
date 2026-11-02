import './sources.css';
import type { News } from '../../../types/News';

type SourceViewData = Pick<News, 'id' | 'name'>;

class Sources {
    draw(data: SourceViewData[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        if (!(sourceItemTemp instanceof HTMLTemplateElement))
            throw new Error('Source template not found');

        const sourcesContainer = document.querySelector('.sources');

        if (!sourcesContainer) throw new Error('Sources container not found');

        data.forEach((item) => {
            const sourceClone = document.importNode(sourceItemTemp.content, true);

            const sourceName = sourceClone.querySelector('.source__item-name');
            const sourceItem = sourceClone.querySelector('.source__item');

            if (!sourceName || !sourceItem) throw new Error('Source template structure is invalid');

            sourceName.textContent = item.name;
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        sourcesContainer.append(fragment);
    }
}

export default Sources;

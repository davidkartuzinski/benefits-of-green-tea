import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  CollectionPreviewPreview,
} from './collection-preview.styles.jsx';

export const CollectionPreview = ({ title, items, id }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
    <CollectionPreviewPreview>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </CollectionPreviewPreview>
  </CollectionPreviewContainer>
);

// export default CollectionPreview;

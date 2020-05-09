import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  TitleH2,
  ItemsContainer,
  CollectionItemContainer,
} from './collection.styles.jsx';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleH2>{title}</TitleH2>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItemContainer key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

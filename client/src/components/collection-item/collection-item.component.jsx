import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionItemImage,
  CollectionItemFooter,
  CollectionItemFooterName,
  CollectionItemFooterPrice,
  CollectionItemButton,
} from './collection-item.styles.jsx';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <CollectionItemImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionItemFooter>
        <CollectionItemFooterName>{name}</CollectionItemFooterName>
        <CollectionItemFooterPrice>{price}</CollectionItemFooterPrice>
      </CollectionItemFooter>
      <CollectionItemButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

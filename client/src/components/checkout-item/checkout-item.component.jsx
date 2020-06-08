import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutItemImage,
  CheckoutItemSpan,
  CheckoutItemQuantity,
  CheckoutItemArrow,
  CheckoutItemValue,
  RemoveButton,
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutItemImage src={imageUrl} alt='cart item' />
      </ImageContainer>
      <CheckoutItemSpan>{name}</CheckoutItemSpan>
      <CheckoutItemQuantity>
        <CheckoutItemArrow onClick={() => removeItem(cartItem)}>
          &#10094;
        </CheckoutItemArrow>
        <CheckoutItemValue>{quantity}</CheckoutItemValue>
        <CheckoutItemArrow onClick={() => addItem(cartItem)}>
          &#10095;
        </CheckoutItemArrow>
      </CheckoutItemQuantity>
      <CheckoutItemSpan className='price'>{price}</CheckoutItemSpan>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapStateToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapStateToProps)(CheckoutItem);

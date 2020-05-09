import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer,
  TitleH1,
  SubtitleSpan,
} from './menu-item.styles.jsx';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      className={`${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage imageUrl={imageUrl} className='background-image' />
      <ContentContainer className='content'>
        <TitleH1>{title.toUpperCase()}</TitleH1>
        <SubtitleSpan>SHOP NOW</SubtitleSpan>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);

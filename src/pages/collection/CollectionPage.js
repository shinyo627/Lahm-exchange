import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shopSelector';

import CollectionItem from '../../components/collection-item/CollectionItem';

import './CollectionPageStyle.scss';
const CollectionPage = ({ collection }) => {
  // console.log('collection page logging', match.params.collectionId);
  // console.log('CollectionPage logging collection', collection);
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// ownProps is props of current component wrapped inside the connect()
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);

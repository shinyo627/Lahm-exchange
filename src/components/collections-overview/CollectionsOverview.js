import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectorCollectionsForPreview } from '../../redux/shop/shopSelector';

import CollectionPreview from '../../components/collection-preview/CollectionPreview';

import './CollectionsOverviewStyle.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectorCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);

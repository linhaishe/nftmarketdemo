import React from 'react';
import ItemCard from '../ItemCard';

import './index.scss';

export default function Home({ marketNftLists }: any) {
  console.log('marketNftLists', marketNftLists);

  return (
    <>
      {marketNftLists?.length > 0 ? (
        <div className='item-list-wrap'>
          {marketNftLists?.map((v, i) => (
            <div key={i}>
              <ItemCard item={v} />
            </div>
          ))}
        </div>
      ) : (
        <div>nothing here ...</div>
      )}
    </>
  );
}

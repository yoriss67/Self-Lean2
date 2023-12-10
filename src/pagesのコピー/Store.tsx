import { useEffect } from 'react';



import { Col, Row } from 'react-bootstrap';

import storeItems from '../data/items.json';
import StoreItem from '../components/StoreItem';


import '../index.css'


const Store = () => {
  useEffect(() => {
    // document.body.style.backgroundColor = '#618793'; // Set the background color to white
    document.body.style.backgroundColor = '#8ca8b0'; // Set the background color to white


    // 🤔unmountedって何？Cleanupって何？
    // Cleanup: Reset the background color when the component is unmounted
    return () => {
      document.body.style.backgroundColor = ''; // reset to default or any other color if needed
    };
  }, []);

  return (
    <div className='Store'>
      <Row md={2} xs={1} lg={3} className='g-5'>
        {storeItems.map(item => (
        // <Col>{JSON.stringify(item)}</Col>
        <Col key={item.id}>
          <StoreItem {...item} />
        </Col>
      ))}
        {/* {storeItems.map((item) => {
          return <Col>{JSON.stringify(item)}</Col>;
        })} */}
      </Row>
    </div>
  );
};

export default Store;

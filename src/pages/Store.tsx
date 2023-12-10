import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import storeItems from '../data/items.json';
import StoreItem from '../components/StoreItem';
import '../index.css'

const Store = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#8ca8b0'; 
    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, []);

  return (
    <div className='Store'>
      <Row md={2} xs={1} lg={3} className='g-5'>
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Store;

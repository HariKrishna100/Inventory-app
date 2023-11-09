import { useState } from 'react';
import { Form, Table, Navbar, Nav } from 'react-bootstrap';
import { data } from '@/public/data/inventory.js';

export default function Home() {
  var [search, setSearch] = useState('');
  const filteredData = data.filter(
    (item) =>
      item.VENDOR.toUpperCase().includes(search) ||
      item.UPCCODE.toString().includes(search)
  );

  return (
    <div style={{marginLeft: 35}}>
      <Nav>
        <Navbar style={{fontSize: 35, marginTop: 10,}}>Inventory Managment</Navbar>
      </Nav>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label></Form.Label><br/>
          <Form.Control onChange={ev => setSearch(ev.target.value)} style={{fontSize: 20, width: '430px', height: '70px' }} type="text" rows={3} placeholder="ENTER / SCAN UPC / SKU or Vendor CODE HERE" />
        </Form.Group>
      </Form>
  
      {filteredData.length > 0 ? (
        <Table style={{fontSize: 20}} className='table table-hover table-bordered'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col' style={{ textAlign: 'start' }}>Item Name</th>
              <th scope='col'>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.NAME}</td>
                <td>{item.Price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : null}
    </div>
  );
}

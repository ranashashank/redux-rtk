// import React from "react";
// import { useSelector } from "react-redux";

// function OrderPage() {
//   const { orders } = useSelector((state) => state.cartItems);

//   return (
//     <div>
//       <h2>Order History</h2>
//       <ul>
//         {orders.map((order) => (
//           <li key={order.id}>
//             <p>Order ID: {order.id}</p>
//             <p>Order Date: {order.date}</p>

//             <ul>
//               {order.items.map((item) => (
//                 <li key={item.id}>
//                   {item.title} - ${item.price}
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default OrderPage;
import React from "react";
import { useSelector } from "react-redux";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

const OrderPage = () => {
  const { orders } = useSelector((state) => state.cartItems);

  return (
    <div className="container py-5">
      <h1 className="mb-4">Order History</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <MDBTable hover>
          <MDBTableHead>
            <tr>
              <th>Order ID</th>
              <th>Items</th>
              <th>Date</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>
                  {order.items.map((item) => (
                    <div key={item.id}>{item.title}</div>
                  ))}
                </td>
                <td>{order.date}</td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      )}
    </div>
  );
};

export default OrderPage;

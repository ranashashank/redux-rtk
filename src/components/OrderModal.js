import React from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, placeOrder } from "../store/cartSlice";

const OrderModal = ({ isOpen, orderDetails, closeModal }) => {
  console.log(orderDetails);
  const { cart, totalQuantity, totalPrice, itemQuantities, orders } =
    useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    dispatch(placeOrder(orderDetails));
    dispatch(clearCart());
  };
  return (
    <>
      <MDBModal show={isOpen} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalBody
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>Item</span>
                <span>Quantity</span>
                <span>Price</span>
              </MDBModalBody>
            </MDBModalHeader>
            {orderDetails.map((order) => (
              <div key={order.id}>
                <MDBModalBody
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>{order.title}</span>
                  <span>{itemQuantities[order.id]}</span>
                  <span>$ {order.price * itemQuantities[order.id]}</span>
                </MDBModalBody>
              </div>
            ))}
            <MDBModalBody
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>Total </span>
              <span>{totalQuantity}</span>
              <span>$ {totalPrice}</span>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={closeModal}>
                Close
              </MDBBtn>
              <Link to="/order">
                <MDBBtn onClick={handlePlaceOrder}>Confirm Order</MDBBtn>
              </Link>{" "}
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default OrderModal;

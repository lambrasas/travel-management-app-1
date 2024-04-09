import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderRow from "./OrderRow";
import Button from "../../components/Button/Button";
import { ROUTES } from "../../routes/consts";
import { fetchOrders } from "../../api/orders";
import { fetchHotels } from "../../api/hotels";
import styles from "./Orders.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import classNames from "classnames";
const Orders = () => {
  const { theme } = useContext(ThemeContext);
  const [orders, setOrders] = useState([]);
  const [hotels, setHotels] = useState([]);
  const navigete = useNavigate();
  useEffect(() => {
    const fetchOrdersAndHotels = async () => {
      try {
        const [ordersResponse, hotelsResponse] = await Promise.all([
          fetchOrders(),
          fetchHotels(),
        ]);

        setOrders(ordersResponse);
        setHotels(hotelsResponse);
      } catch (error) {
        console.error("Error fetching orders and hotels:", error);
      }
    };

    fetchOrdersAndHotels();
  }, []);

  const ordersWithHotelInfo = orders.map((order) => {
    const hotel = hotels.find((hotel) => hotel.id == order.hotelId);
    return { ...order, hotel };
  });

  return (
    <>
      <div
        className={classNames(
          styles.titleBar,
          theme === "light" ? styles.dark : styles.light
        )}
      >
        <h1>Orders</h1>
        <Button theme={theme} onClick={() => navigete(ROUTES.NEW_ORDER)}>
          Add order
        </Button>
      </div>
      <div>
        {ordersWithHotelInfo.map((order) => (
          <div key={order.id} className={styles.item}>
            <OrderRow order={order} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Orders;

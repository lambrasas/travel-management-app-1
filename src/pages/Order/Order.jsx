import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdEuroSymbol } from "react-icons/md";
import { ROUTES } from "../../routes/consts";
import Button from "../../components/Button/Button";
import { fetchOrders } from "../../api/orders";
import { fetchHotels } from "../../api/hotels";
import styles from "./Order.module.scss";

const Order = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchOrderAndHotels = async () => {
      try {
        const [ordersResponse, hotelsResponse] = await Promise.all([
          fetchOrders(),
          fetchHotels(),
        ]);
        const foundOrder = ordersResponse.find((o) => o.id === id);
        setOrder(foundOrder);
        setHotels(hotelsResponse);
      } catch (error) {
        console.error("Error fetching orders and hotels:", error);
      }
    };

    fetchOrderAndHotels();
  }, [id]);

  if (!order || !hotels.length) {
    return (
      <p className={styles.notFoundText}>
        Order with id <span className={styles.bold}>{id}</span> not found.
      </p>
    );
  }

  const hotel = hotels.find((hotel) => hotel.id === order.hotelId);
  const orderWithHotelInfo = { ...order, hotel };

  return (
    <>
      <h2 className={styles.pageTitle}>Order</h2>
      <div className={styles.order}>
        <div className={styles.imageContainer}>
          <img
            src={orderWithHotelInfo.hotel.imageUrl}
            alt={orderWithHotelInfo.hotel.title}
          />
        </div>
        <div className={styles.details}>
          <h2 className={styles.title}>{orderWithHotelInfo.hotel.title}</h2>
          <table>
            <tbody>
              <tr>
                <th>Price:</th>
                <td className={styles.price}>
                  {orderWithHotelInfo.price}
                  <MdEuroSymbol />
                </td>
              </tr>
              <tr>
                <th>Date from:</th>
                <td>
                  {new Date(orderWithHotelInfo.startDate).toLocaleDateString(
                    "lt"
                  )}
                </td>
              </tr>
              <tr>
                <th>Date to:</th>
                <td>
                  {new Date(orderWithHotelInfo.endDate).toLocaleDateString(
                    "lt"
                  )}
                </td>
              </tr>
              <tr>
                <th>Persons:</th>
                <td>
                  {orderWithHotelInfo.persons
                    .map((person) => person)
                    .join(", ")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.goBackButtonWrapper}>
        <Link to={ROUTES.ORDERS}>
          <Button>Go back</Button>
        </Link>
      </div>
    </>
  );
};

export default Order;

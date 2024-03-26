import OrderRow from "./OrderRow";
import { fakeOrders } from "./consts";
import styles from "./Orders.module.scss";

const Orders = () => {
  return (
    <>
      <h1 className={styles.title}>Orders</h1>
      {fakeOrders.map((order) => (
        <div key={order.id} className={styles.item}>
          <OrderRow order={order} />
        </div>
      ))}
    </>
  );
};

export default Orders;

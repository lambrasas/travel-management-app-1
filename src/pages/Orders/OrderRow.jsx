import { Link, generatePath } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FaDollarSign } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { ROUTES } from "../../routes/consts";
import styles from "./Orders.module.scss";

const OrderRow = ({ order }) => {
  const orderPath = generatePath(ROUTES.ORDER, { id: order.id });

  return (
    <div className={styles.orderRow}>
      <div className={styles.leftSide}>
        <p className={styles.id}>{order.id}</p>
        <div className={styles.hotelImage}>
          <img src={order.hotel.imageUrl} alt={order.hotel.title} />
        </div>
        <div>
          <Link to={orderPath}>
            <h3 className={styles.hotelTitle}>{order.hotel.title}</h3>
          </Link>
          <p className={styles.date}>
            {new Date(order.startDate).toLocaleDateString("lt")} -{" "}
            {new Date(order.endDate).toLocaleDateString("lt")}
          </p>
        </div>
      </div>
      <div className={styles.rightSide}>
        <p className={classNames(styles.details, styles.price)}>
          <FaDollarSign />
          {order.price}
        </p>
        <p className={styles.details}>
          <IoPerson />
          {order.persons.length}
        </p>
      </div>
    </div>
  );
};

OrderRow.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    hotel: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }),
    price: PropTypes.number.isRequired,
    persons: PropTypes.array.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequireds,
  }),
};

export default OrderRow;

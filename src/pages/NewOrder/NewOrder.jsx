import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import { createOrder } from "../../api/orders";
import { fetchHotels } from "../../api/hotels";
import { ROUTES } from "../../routes/consts";
import styles from "./NewOrder.module.scss";

const NewOrder = () => {
  const [hotels, setHotels] = useState([]);
  const [hotelId, setHotelId] = useState("");
  const [price, setPrice] = useState("");
  const [persons, setPersons] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchHotels()
      .then((response) => {
        setHotels(response);
        setHotelId(response[0].id);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newOrder = { hotelId, price, persons, startDate, endDate };
      await createOrder(newOrder);
      navigate(ROUTES.ORDERS);
    } catch (error) {
      console.error(error);
    }
  };

  // Special format for Select
  const hotelOptions = hotels.map((hotel) => ({
    value: hotel.id,
    label: hotel.title,
  }));

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Select
        id="hotelId"
        label="Hotel"
        options={hotelOptions}
        value={hotelId}
        onChange={(e) => setHotelId(+e.target.value)}
        className={styles.inputRow}
      />
      <Input
        id="price"
        type="number"
        label="Price"
        placeholder="Price..."
        value={price}
        onChange={(e) => setPrice(+e.target.value)}
        className={styles.inputRow}
      />
      <Input
        id="persons"
        type="text"
        label="Persons"
        placeholder="Persons..."
        value={persons.join(", ")}
        onChange={(e) => setPersons(e.target.value.split(", "))}
        className={styles.inputRow}
      />
      <Input
        id="startDate"
        type="datetime-local"
        label="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className={styles.inputRow}
      />
      <Input
        id="endDate"
        type="datetime-local"
        label="End Date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className={styles.inputRow}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default NewOrder;

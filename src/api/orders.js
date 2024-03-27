export const fetchOrders = async () => {
  const response = await fetch("http://localhost:3000/orders");
  return await response.json();
};

export const createOrder = async (newOrder) => {
  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newOrder),
  });
  return await response.json();
};

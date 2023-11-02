export const getSubTotal = (total) => {
  const subTotal =
    total -
    Math.floor((total * 15) / 100) +
    Math.floor(total > 500 ? 50 : total === 0 ? 0 : 100);
  return subTotal;
};
export const getTotal = (data) => {
  const total = data.reduce(
    (total, item) => total + item.item.price * item.quantity,
    0
  );
  return total;
};
export const getAllTotal = (data) => {
  const total = data.reduce(
    (total, item) => total + item.item.price * item.quantity,
    0
  );
  const subTotal =
    total -
    Math.floor((total * 15) / 100) +
    Math.floor(total > 500 ? 50 : total === 0 ? 0 : 100);
  return subTotal;
};

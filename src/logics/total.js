export const getTotal = (data) => {
  const total = data.reduce(
    (total, item) => total + item.item.price * item.quantity,
    0
  );
  return Math.floor(total);
};

export const getDiscount = (total) => {
  if (total < 500) {
    return Math.floor((total * 15) / 100);
  } else {
    return Math.floor((total * 12) / 100);
  }
};

export const getDeliveryCharges = (total) => {
  if (total > 500) {
    return 50;
  } else {
    return 100;
  }
};

export const getSubTotal = (total) => {
  return Math.floor(total + getDeliveryCharges(total) - getDiscount(total));
};

export const getAllTotal = (data) => {
  const total = data.reduce(
    (total, item) => total + item.item.price * item.quantity,
    0
  );
  return Math.floor(total + getDeliveryCharges(total) - getDiscount(total));
};

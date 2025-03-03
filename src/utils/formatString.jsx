const formatString = (value, moeda) => {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: moeda,
  });
};

export default formatString;

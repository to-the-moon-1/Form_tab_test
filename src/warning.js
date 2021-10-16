const warning = (header, phone) => {
  if (header.length === 0) {
    return 'Fill the required field: header';
  }
  if (phone.length === 0) {
    return 'Fill the required field: phone number';
  }
  return "Can't download more pictures than 5";
};

export default warning;

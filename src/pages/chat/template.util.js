const dateDifference = (date) => {
  const dateObject = new Date(date);
  const current = new Date();
  console.log(current, 'Current');
  const timeDifference = current.getTime() - dateObject.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
};

export default dateDifference;

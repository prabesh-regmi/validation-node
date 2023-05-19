const generateRandomNumber = () => {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 900000) + 100000;
  } while (randomNumber % 10 === 7);
  return randomNumber;
};
export default generateRandomNumber;

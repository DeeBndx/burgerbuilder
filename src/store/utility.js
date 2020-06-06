export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues
  };
};

export const randomNumber = (amount) => {
  const charArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let orderNumberArray = [];

  for (let index = 0; index < amount; index++) {
    let arrayIndex = Math.ceil(Math.random() * 10);
    const foundNumber = charArray.findIndex((i) => {
      return +i === arrayIndex;
    });
    orderNumberArray.push(foundNumber + 1);
  }

  const returnNumber = orderNumberArray.join("");
  return returnNumber;
}
const getNames = function () {
  const names = ['Jan', 'Piotr', 'Anna'];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(names);
    }, 2000);
  });
};

export default getNames;

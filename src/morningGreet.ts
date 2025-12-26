const monarchCats = ["Garfield", "Felix", "Grumpy"];

export const morningGreet = (name: string): string => {
  let greet = "Good Morning ";

  if (monarchCats.includes(name)) {
    greet = "Good Morning, Your Majesty, ";
  }

  return greet + name;
};

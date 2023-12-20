type MenuOptions = "" | "all" | "dog" | "cat" | "fish";

export const createMenu = (activeMenu: MenuOptions) => {
  let returnObjets = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };
  if (activeMenu !== "") {
    returnObjets[activeMenu] = true;
  }
  return returnObjets;
};

// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // TODO

    const response = await fetch("http://localhost:8080/products");

    const data = await response.json();

    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort) {
  // filter={"category":["smartPhone","laptop"]}
  // sort ={_sort="price",_order="desc"}
  let queryString = "";
  for (let key in filter) {
    console.log("key", key);
    const categoryValue = filter[key];
    if (categoryValue.length) {
      const lastCategoryValue = categoryValue[categoryValue.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );

    const data = await response.json();

    resolve({ data });
  });
}

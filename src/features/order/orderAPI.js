export function createOrder(order) {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch("http://localhost:8080/cart/orders", {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        // Handle non-200 status codes (e.g., 404 Not Found)
        const errorMessage = `Error: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      // TODO: Process the data as needed
      resolve({ data });
    } catch (error) {
      // Handle any other errors (e.g., network issues, invalid JSON)
      console.error("Error creating order:", error);
      resolve({
        error: true,
        message: "An error occurred while creating the order.",
      });
    }
  });
}
export function updateOrder(order) {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch(
        "http://localhost:8080/cart/orders" + order.id,
        {
          method: "PATCH",
          body: JSON.stringify(order),
          headers: {
            "content-type": "application/json",
          },
        }
      );

      if (!response.ok) {
        // Handle non-200 status codes (e.g., 404 Not Found)
        const errorMessage = `Error: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      // TODO: Process the data as needed
      resolve({ data });
    } catch (error) {
      // Handle any other errors (e.g., network issues, invalid JSON)
      console.error("Error creating order:", error);
      resolve({
        error: true,
        message: "An error occurred while creating the order.",
      });
    }
  });
}

export function fetchAllOrders(sort, pagination) {
  let queryString = "";
  if (sort) {
    for (let key in sort) {
      queryString += `${key}=${sort[key]}&`;
    }
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/orders?" + queryString);

    const data = await response.json();
    const totalOrders = response.headers.get("X-Total-Count");

    resolve({ data: { orders: data, totalOrders: +totalOrders } });
  });
}

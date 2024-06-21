
export function createOrder(order ) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await response.json();
    // TODO: on server it will only return some data info of user (not password)
    resolve({ data });
  });
}
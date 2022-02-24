// export const sendData = (url , data) => {
//   fetch(`http://localhost:4000/api/${url}/store`)
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// };

export const sendData = async (url, data) => {
  const response = await fetch(`http://localhost:4000/api/${url}/store`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

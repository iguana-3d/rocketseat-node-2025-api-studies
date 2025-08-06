export async function jsonBodyHandler(request, response) {
  // add kind of chunk
  const buffers = [];

  // Collect data chunks from request
  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    // Concat chunk and convert to json string
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    request.body = null;
  }

  // Define the header with JSON response
  response.setHeader("Content-Type", "application/json");
}

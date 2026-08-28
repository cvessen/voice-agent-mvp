export default function handler(request, response) {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say language="nl-NL">
    Goedendag. U spreekt met de digitale assistent van Coen.
    De verbinding werkt.
  </Say>
</Response>`;

  response.setHeader("Content-Type", "text/xml");
  response.status(200).send(twiml);
}

export default function handler(request, response) {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Gather
    input="speech"
    action="/api/process"
    method="POST"
    speechTimeout="auto">
    <Say language="nl-NL">
      Goedendag. Wat is uw naam?
");
  response.status(200).send(twiml);
}

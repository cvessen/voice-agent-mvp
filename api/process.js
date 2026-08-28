export default function handler(req, res) {
  const naam =
    req.body?.SpeechResult ||
    req.query?.SpeechResult ||
    "onbekend";

  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>

  <Say language="nl-NL">
    Dank u ${naam}.
  </Say>

  <Say language="nl-NL">
    Waarmee kan ik u helpen?
  </Say>

</Response>`;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(twiml);
}

export default function handler(req, res) {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Gather
    input="speech"
    language="nl-NL"
    speechTimeout="auto"
    action="https://voice-agent-mvp-seven.vercel.app/api/process"
    method="POST">

    <Say language="nl-NL">
      Hallo.

      U spreekt met de digitale assistent       Mag ik eerst uw naam weten?
    </Say>

  </Gather>

  <Say language="nl-NL">
    Ik heb helaas geen antwoord ontvangen.
  </Say>

</Response>`;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(twiml);
}

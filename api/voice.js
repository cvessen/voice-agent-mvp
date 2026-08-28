export default function handler(req, res) {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Gather
    input="speech"
    language="nl-NL"
    speechTimeout="auto"
    action="/api/process"
    method="POST">

    <Say language="nl-NL">
      Goedendag. U spreekt met de digitale assistent van Coen.
      Mag ik eerst uw naam weten?
    </Say>

  </Gather>

  <Say language="nl-NL">
  res.status(200).send(twiml);
}

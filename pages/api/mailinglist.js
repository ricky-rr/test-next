const client = require("@sendgrid/client");
client.setApiKey(process.env.SENDGRID_SECRET);

export default async function send(req, res) {
  const email = req.body.formData.email;
  const name = req.body.formData.name;
  const data = {
    list_ids: [process.env.SENDGRID_MAILING_ID],
    contacts: [
      {
        email: email,
        first_name: name,
      },
    ],
  };
  const request = {
    url: `/v3/marketing/contacts`,
    method: "PUT",
    body: data,
  };
  await client
    .request(request)
    .then((response) => {
      res.json({ req: "Data has been sent succesfully", response });
    })
    .catch((error) => {
      res.json({ req: "Error, Data has not been sent. error:", error });
    });
}

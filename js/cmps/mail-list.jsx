import { MailPreview } from "./mail-preview.jsx";

export function MailList(props) {
  const mails=props.mails;

  console.log(props);
  if (!mails)  return <div>no mails for now...</div>
    return (
      <section className="mail-list">
        <table>
          <tbody>
            {mails.map((mail) => (
              <MailPreview key={mail.id} mail={mail} />
            ))}
          </tbody>
        </table>
      </section>
    );
}

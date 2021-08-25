import { MailPreview } from "./mail-preview.jsx";

export function MailList({ mails }) {

    console.log(mails);
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

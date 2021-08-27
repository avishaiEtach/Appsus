import { MailPreview } from "./mail-preview.jsx";

export function MailList({mails,changReadUnread}) {

    return (
      <section className="mail-list">
        <table>
          <tbody>
            {mails.map((mail) => (
              <MailPreview key={mail.id} mail={mail}  markFunction={changReadUnread} />
            ))}
          </tbody>
        </table>
      </section>
    );
}

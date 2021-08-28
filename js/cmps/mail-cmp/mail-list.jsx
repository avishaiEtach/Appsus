import { MailPreview } from "./mail-preview.jsx";

export function MailList({mails,markAsReadOrUnRead,typeShow,moveToTrash,mailSelcted}) {

    return (
      <section className="mail-list">
        <table>
          <tbody>
            {mails.map((mail) => (
              <MailPreview key={mail.id} mail={mail} typeShow={typeShow} mailSelcted={mailSelcted}
               moveToTrash={moveToTrash}/>
            ))}
          </tbody>
        </table>
      </section>
    );
}

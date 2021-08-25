export class MailPreview extends React.Component {
  render() {
    const { mail } = this.props;
    return (
    <tr>
        <td>{mail.subject}</td>
        </tr>
        )
    ;
  }
}

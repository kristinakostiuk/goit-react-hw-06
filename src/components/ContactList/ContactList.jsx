import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}

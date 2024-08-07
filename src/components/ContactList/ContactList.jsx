import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
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

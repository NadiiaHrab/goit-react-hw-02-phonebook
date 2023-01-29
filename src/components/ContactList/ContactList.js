import css from "./ContactList.module.css"

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.list}>
    
    {contacts.map(({ id, name, number }) => (
      <li className={css.listItem} key={id}>
        <span className={css.listItemText}>{name}:</span>
        <span className={css.listItemText}>{number}</span>
        
        <button
          className={css.button}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
        </ul>
);

export default ContactList;
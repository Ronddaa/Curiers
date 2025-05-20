import styles from "./Contacts.module.css";
import sprite from "../icons.svg";

import contacts from "./contacts.json";

export default function Contacts() {
  return (
    <section className={styles.ContactsSection}>
      <div className="container">
        <ul className={styles.wrapperContactsList}>
          {contacts.map((user) => (
            <li key={user.id} className={styles.oneUser}>
              <p className={styles.userName}>{user.name}</p>
              <ul className={styles.wrapperContactsLinks}>
                <li>
                  <a href={`tel:${user.phone}`}>
                    <svg className={styles.contactSVG} width={28} height={28}>
                      <use xlinkHref={`${sprite}#icon-phone`}></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={`https://t.me/${user.telegram}`}
                    rel="noopener noreferrer"
                  >
                    <svg className={styles.contactSVG} width={28} height={28}>
                      <use xlinkHref={`${sprite}#icon-telegram`}></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

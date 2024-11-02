import { Navbar } from "./Navbar";
import { ContactBar } from "./ContactBar";
import { CategoryLinks } from "./CategoryLinks";

export function Header({ header, logo, contact, categoryLinks }) {
  return (
    <div className="Header">
      <Navbar header={header} />
      <ContactBar logo={logo} contact={contact} />
      <CategoryLinks categoryLinks={categoryLinks} />
    </div>
  )
}

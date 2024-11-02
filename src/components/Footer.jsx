import { ContactBarFooter } from "./ContactBarFooter";
import { Copyright } from "./Copyright";

export function Footer({ socialLinks, contact, copyright }) {
    return (
        <div className="Footer">
            <ContactBarFooter socialLinks={socialLinks} contact={contact} />
            <Copyright copyright={copyright} />
        </div>
    )
}

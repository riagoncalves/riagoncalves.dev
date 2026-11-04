import { Contact } from '@/types';
import { contacts } from '@/data';

const MAILTO = 'mailto:';

export const isEmailContact = (contact: Contact): boolean => contact.link.startsWith(MAILTO);

// Link without the mailto: scheme, for showing as text.
export const contactValue = (contact: Contact): string => contact.link.replace(MAILTO, '');

export const activeContacts = contacts.filter((contact) => contact.active);

// Public profiles elsewhere (GitHub, LinkedIn, …): everything active except email.
export const profileLinks = activeContacts.filter((contact) => !isEmailContact(contact));

const emailContact = activeContacts.find(isEmailContact);

export const emailAddress: string | undefined = emailContact && contactValue(emailContact);

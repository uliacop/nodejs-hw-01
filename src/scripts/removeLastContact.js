import { PATH_DB } from '../contacts/contacts.js';
import fs from 'fs/promises';
export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log('Last contact deleted');
    } else {
      console.log('The contact array is empty');
    }
  } catch (error) {
    console.error('Error deleting contact:', error);
  }
};
removeLastContact();

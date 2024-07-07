import { PATH_DB } from '../contacts/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf8');
  } catch (error) {
    console.log(error);
  }
};

await removeAllContacts();

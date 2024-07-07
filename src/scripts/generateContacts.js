import fs from 'fs';
import { PATH_DB } from '../contacts/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (count) => {
  try {
    const data = await fs.promises.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    for (let i = 0; i < count; i++) {
      contacts.push(createFakeContact());
    }
    await fs.promises.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`Successfully generated and added ${count} contacts.`);
  } catch (error) {
    console.error('Error generating or adding contacts:', error);
  }
};

await generateContacts(5);
export default generateContacts;

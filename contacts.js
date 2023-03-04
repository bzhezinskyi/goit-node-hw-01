const fs = require('fs').promises;
const path = require('path');
require('colors');

const contactsPath = path.join('db', 'contacts.json');

/**
 * function for searching the contact list
 * @returns {}
 */
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);

    const list = JSON.parse(data.toString());

    console.table(list);
    return list;
  } catch (error) {
    console.log('Something went wrong..');
    console.log(error.message);
  }
}

/**
 * function for searching a contact by id
 * @param {number} - contact id to search
 * @returns {Promise<object>} -
 */
async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath);

    const list = JSON.parse(data.toString());

    list.map(item => {
      if (+item.id === contactId) {
        console.log(item);
        return item;
      }
    });
  } catch (error) {
    console.log('Something went wrong..');
    console.log(error.message);
  }
}

/**
 * function to delete a contact by id
 * @param {number} - contact id to delete
 * @returns {Promise<>}
 */
async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath);

    const list = JSON.parse(data.toString());

    const newList = [];
    list.map(item => {
      if (+item.id !== contactId) {
        return newList.push(item);
      }
    });
    console.table(newList);

    await fs.writeFile(contactsPath, JSON.stringify(newList));

    return newList;
  } catch (error) {
    console.log('Something went wrong..');
    console.log(error.message);
  }
}

/**
 * function to create contacts
 * @param {string, string, string} - contact name, email, phone
 * @returns {Promise<>}
 */
async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath);

    const list = JSON.parse(data.toString());

    list.push({ id: (list.length + 1).toString(), name, email, phone });

    console.table(list);
    await fs.writeFile(contactsPath, JSON.stringify(list));

    return list;
  } catch (error) {
    console.log('Something went wrong..');
    console.log(error.message);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };

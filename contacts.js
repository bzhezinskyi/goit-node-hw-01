const fs = require('fs').promises;
const path = require('path');
require('colors');

const contactsPath = path.join('db', 'contacts.json');

/**
 *
 * @param {}
 * @returns {}
 */
function listContacts() {
  fs.readFile(contactsPath)
    .then(data => console.log(data.toString()))
    .catch(err => console.log(err.message));
}

/**
 *
 * @param {string} - contact id
 * @returns {}
 */
function getContactById(contactId) {
  // ...твій код
}

/**
 *
 * @param {string} - contact id
 * @returns {}
 */
function removeContact(contactId) {
  // ...твій код
}

/**
 *
 * @param {string, string, string} - contact name, email, phone
 * @returns {}
 */
function addContact(name, email, phone) {
  // ...твій код
}

module.exports = listContacts;

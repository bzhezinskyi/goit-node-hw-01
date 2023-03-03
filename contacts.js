const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join('contacts.json')

function listContacts() {
    try {
        
        fs.readFile(contactsPath, [options])
    } catch (error) {console.log(error.message);
        
    }
  }
  
  function getContactById(contactId) {
    // ...твій код
  }
  
  function removeContact(contactId) {
    // ...твій код
  }
  
  function addContact(name, email, phone) {
    // ...твій код
  }
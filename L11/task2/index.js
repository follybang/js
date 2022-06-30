const contactsList = [
  {
    name: 'Tom',
    phoneNumber: '666-66-66',
  },
  {
    name: 'John',
    phoneNumber: '555-55-55',
  },
  {
    name: 'Ann',
    phone: '333-33-33',
  },
  {
    name: 'Stephan',
    phoneNumber: '444-44-44',
  },
  {
    name: 'Suzy',
    phoneNumber: '222-22-22',
  },
  {
    name: 'Adel',
    phoneNumber: '111-11-11',
  },
];

// const sortContacts = (contacts, boolean) => {
//   if (!Array.isArray(contacts)) {
//     return null;
//   }

//   const res = [...contacts];

//   if (boolean === false) {
//     return res.sort((a, b) => b.name.localeCompare(a.name));
//   }
//   return res.sort((a, b) => a.name.localeCompare(b.name));
// };

const sortContacts = (contacts, boolean) => {
  if (!Array.isArray(contacts)) {
    return null;
  }

  console.log(`Boolean is: ${boolean}`);

  let res = [];

  if (boolean !== false) {
    res = contacts.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    res = contacts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return res;
};

console.log(sortContacts(contactsList));
console.log(sortContacts(contactsList, true));
console.log(sortContacts(contactsList, false));
console.log(sortContacts(''));

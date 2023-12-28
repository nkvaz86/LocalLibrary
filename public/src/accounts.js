function findAccountById(accounts, id) {
  const foundAccount = accounts.find(account => account.id === id);

  return foundAccount || null;
}

function sortAccountsByLastName(accounts) {
  const sortedAccounts = [...accounts].sort((a, b) => {

    const lastNameA = (a.name.last || '').toLowerCase();
    const lastNameB = (b.name.last || '').toLowerCase();

    return lastNameA.localeCompare(lastNameB);
  });

  return sortedAccounts;
}

function getAccountFullNames(accounts) {

  const fullNames = accounts.map(account => `${account.name.first} ${account.name.last}`);
  
  return fullNames;
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

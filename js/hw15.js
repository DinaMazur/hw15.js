// завдання 1

const users = [
    { name: "Alice", balance: 4000 },
    { name: "Nika", balance: 8848 },
    { name: "Kira", balance: 222 },

  ];
  
  const totalSum = users.reduce((acc, user) => acc + user.balance, 0);
  
  console.log(` сума балансу всіх користувачів: ${totalSum}`);



  // 2 завдання
  const users = [
    { name: "Dina", friends: ["Andrew", "Gregory"] },
    { name: "Nastya", friends: ["Max", "Vlad"] },
    { name: 'Olena', friends: ["Vlad", "Dima"] },
  ];
  
  const friendName = "Vlad";
  const usersWithFriend = users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
  
  console.log(`Користувачі, які дружать з  ${friendName}: ${usersWithFriend}`);


//   завдання 3


const users = [
    { name: 'Sandy', friends: ["Den", "Alek", "Misha"] },
    { name: 'Kate', friends: ["Sofia"] },
    { name: 'Lida', friends: [] },
    { name: 'Marta', friends: ["Renat", "Alice", "Kate", "Daria"] },
    
  ];
  const sortedByFriendsCount = users
  .sort((a, b) => b.friends.length - a.friends.length)
  .map((user) => user.name);
console.log(
  `Відсортовано користувачів за кількістю друзів: ${sortedByFriendsCount}`
);
  

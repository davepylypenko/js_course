const whosOnline = (friends) => {
  if (friends.length == 0) {return {}};

  let ans = {
    online: [],
    offline: [],
    away: [],
  }
  
  // перебираем статусы
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].lastActivity > 10 && friends[i].status == 'online') {
      ans.away.push(friends[i].username);
      continue;
    }
    ans[friends[i].status].push(friends[i].username);
  }

  // отбрасываем пустые
  let result = {}
  for (let i in ans) {
    if (ans[i].length > 0) {result[i] = ans[i]}
  }
  return result
}
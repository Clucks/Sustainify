class User {
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }
  }
  
  const users = [
    {
      name: "user1",
      score: Math.floor(Math.random() * 101)
    },
    {
      name: "You",
      score: Math.floor(Math.random() * 101)
    },
    {
      name: "user3",
      score: Math.floor(Math.random() * 101)
    },
    {
      name: "user4",
      score: Math.floor(Math.random() * 101)
    }
  ];
  
  const sortedUsers = users.sort((u1, u2) =>
    u1.score < u2.score ? 1 : u1.score > u2.score ? -1 : 0
  );
  
  function Leaderboard() {
    const [usrs, updateUsers] = useState(sortedUsers);
  
    function renderUsers() {
      return usrs.map((user, index) => (
        '<div>' +
          '<p>' +
            (index +
              1 +
              ')              ' +
              user.name +
              '                  ' +
              user.score) +
          '</p>' +
        '</div>'
      )).join('');
    }
  
    useEffect(() => {
      renderUsers();
    });
  
    const leaderboardDiv = document.createElement('div');
    leaderboardDiv.innerHTML = `
      <h1 class="title"> Leaderboard </h1>
      <h2 class="subheader"> Username Score</h2>
      <h3>${renderUsers()}</h3>
    `;
  
    return leaderboardDiv;
  }
  
  document.body.appendChild(Leaderboard());
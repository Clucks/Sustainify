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
    <h3 class="subheader"> Username Score</h3>
    <h3>${renderUsers()}</h3>
  `;

  return leaderboardDiv;
}

document.body.appendChild(Leaderboard());
const challenges = [
  {
    name: "Recycle 3 cans",
    score: 20,
  },
  {
    name: "Ride a bike rather than driving",
    score: 50,
  },
  {
    name: "Plant a tree",
    score: "150",
  },
];

function getDate(timer) {
  console.log(timer);
  var hours = Math.floor(timer / 3600);
  timer -= hours * 3600;
  hours = padNum(hours);
  var minutes = Math.floor(timer / 60);
  timer -= minutes * 60;
  minutes = padNum(minutes);
  var seconds = padNum(Math.floor(timer));
  return hours + ":" + minutes + ":" + seconds;

  function padNum(num) {
    if (num < 10) {
      return "0" + num;
    }
    return num;
  }
}

const time = 86400;
let myInt = 0;
let chals = challenges;

function useEffect(callback, dependencies) {
  callback();
}

function useState(initialState) {
  let state = initialState;
  const setState = (newState) => {
    state = newState;
  };
  return [state, setState];
}

function clearInterval(intervalID) {
  window.clearInterval(intervalID);
}

function setInterval(callback, time) {
  return window.setInterval(callback, time);
}

function useEffect(callback, dependencies) {
  callback();
}

function countDown() {
  // Remove one second, set state so a re-render happens.
  setTime((prevTime) => {
    let seconds = prevTime - 1;
    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(myInt);
      setTime(86400);
    }
    return seconds;
  });

  // Stop the timer if the countdown has reached zero.
  if (time === 0) {
    clearInterval(myInt);
  }
}

function shuffleArray(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const shuffledArray = shuffleArray(chals);

function renderChals() {
  return chals.map((chal, index) =>
    "<div>" +
    "<p>" +
    "Challenge " + (index + 1) + ": " +
    chal.name + ", " + chal.score +
    "</p>" +
    "</div>"
  );
}

document.querySelector(".title").innerHTML = "Challenges";

function renderLeaderboard() {
  return leaderboard.map((player, index) =>
    "<div>" +
    "<p>" +
    (index + 1) + ". " +
    player.name + ", " + player.score +
    "</p>" +
    "</div>"
  );
}
document.querySelector(".timer").innerHTML = "Time left: " + getDate(time);

const listElement = document.createElement("h3"); // Get the list element
listElement.innerHTML = renderChals();
document.body.appendChild(listElement);

useEffect(() => {
  if (myInt === 0 && time > 0) {
    myInt = setInterval(countDown, 1000);
  }
  return () => clearInterval(myInt);
}, [myInt, time]);
    
function scrollToAbout() {
  const aboutSection = document.getElementById("about"); // get the element with the "about" id
  aboutSection.scrollIntoView({behavior: "smooth"}); // scroll smoothly to the element
}

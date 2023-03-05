import React, { useState, useEffect } from "react";

export default function Challenges() {
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

  const [time, setTime] = useState(15);
  const [myInt, setMyInt] = useState(0);
  const[chals, setChals] = useState(challenges);

  useEffect(() => {
    if (myInt === 0 && time > 0) {
      setMyInt(setInterval(countDown, 1000));
    }
    return () => clearInterval(myInt);
  }, [myInt, time]);

  function countDown() {
    // Remove one second, set state so a re-render happens.
    setTime(prevTime => {
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
    return chals.map((chal, index) => (
      <div>
        <p>
          {"Challenge " + (index + 1) + ": " +
            chal.name + ", " + chal.score}
        </p>
      </div>
    ));
  }

  return (
    <div>
      <h1 className="title">Challenges</h1>
      <h2 className="timer">Time left: {getDate(time)}</h2>
      <h3 className="list">{renderChals()}</h3>
    </div>
  );
}
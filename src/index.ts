let title = 'My Stupid Tabata Timer';
document.getElementById('app').innerHTML = title;

let action = '-';
let round = 0;
let second = 5;
let intervalId = setInterval(() => {
  if (round < 1) action = 'READY?';
  else if (round > 8) action = 'YOU GOT IT!';
  else if (second > 10) action = 'DO IT!';
  else action = 'RELAX!';

  document.getElementById('app-action').innerHTML = action;

  if (round >= 1 && round <= 8) {
    document.getElementById('app-round').innerHTML = round.toString();
  } else {
    document.getElementById('app-round').innerHTML = '-';
  }

  if (round <= 8) {
    document.getElementById('app-time').innerHTML = second.toString() + 's';
  } else {
    document.getElementById('app-time').innerHTML = '-';
  }
  second -= 1;
  if (second == 0) {
    round += 1;
    second = 30;
  }
}, 1000);

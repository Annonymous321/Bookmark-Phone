function getCurrentTime() {
  const now = new Date();
  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  };
}
function getHandAngles(currentTime) {
  const hoursAngle = (currentTime.hours * 360) / 12 + (currentTime.minutes * 30) / 60;
  const minutesAngle = (currentTime.minutes * 360) / 60;
  return {
    hourAngle,
    minutesAngle,
  };
}
function updateHandPositions(handAngles) {
  const hourHandEl = document.querySelector('.hour-hand');
  hourHandEl.style.transform = `rotate(${handAngles.hourAngle}deg)`;

  const minuteHandEl = document.querySelector('.minute-hand');
  minuteHandEl.style.transform = `rotate(${handAngles.minutesAngle}deg)`;
}
const updateTime = () => {
  const currentTime = getCurrentTime();
  const handAngles = getHandAngles(currentTime);
  updateHandPositions(handAngles);
};

setInterval(updateTime, 1000); // Call function every second
function getSecondsAngle(currentTime) {
  return (currentTime.seconds * 360) / 60;
}

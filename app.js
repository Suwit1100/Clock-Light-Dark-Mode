const timenow = document.querySelector("#timenow");
const datenow = document.querySelector("#datenow");
function settime() {
  const time = new Date();
  const day = time.toLocaleDateString("th-TH", { weekday: "long" });
  const month = time.toLocaleDateString("th-TH", { month: "long" });
  const year = time.getFullYear() + 543;
  const hours = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  datenow.innerHTML = `${day} ${month} ${year}`;
  timenow.innerHTML = `
  ${hours}:
  ${minute < 10 ? `0${minute}` : `${minute}`}:
  ${second < 10 ? `0${second}` : `${second}`}`;
}

setInterval(settime, 1000);

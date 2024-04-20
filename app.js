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

// คลิกเปลี่ยน mode
const btn_toggle = document.querySelector(".toggle-mode");
const content = document.querySelector(".content");
const footer = document.querySelector("#footer");
btn_toggle.addEventListener("click", (e) => {
  if (content.classList.contains("dark")) {
    // เปลี่ยนสี content
    content.classList.remove("dark");
    // เปลี่ยนสีปุ่ม
    btn_toggle.classList.remove("btn-light");
    btn_toggle.classList.add("btn-dark");
    // เปลี่ยนสี footer
    footer.classList.remove("bg-light");
    footer.classList.add("bg-dark");
    footer.classList.add("text-white");
    console.log("เปลี่ยนเป็นกลางวัน");
    e.target.innerHTML = `<i class="fa-solid fa-moon"></i> เปลี่ยนเป็นโหมดกลางคืน`;
  } else {
    // เปลี่ยนสี content
    content.classList.add("dark");
    // เปลี่ยนสีปุ่ม
    btn_toggle.classList.remove("btn-dark");
    btn_toggle.classList.add("btn-light");
    // เปลี่ยนสี footer
    footer.classList.remove("bg-dark");
    footer.classList.add("bg-light");
    footer.classList.remove("text-white");
    console.log("เปลี่ยนเป็นกลางคืน");
    e.target.innerHTML = `<i class="fa-solid fa-lightbulb"></i> เปลี่ยนเป็นโหมดกลางวัน`;
  }
});

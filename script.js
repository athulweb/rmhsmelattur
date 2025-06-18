const sidebar = document.getElementById("mySidebar");
const toggleBtn = document.getElementById("sidebarToggle");

toggleBtn.onclick = () => {
  sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
};



function updateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString('ml-IN');
  const date = now.toLocaleDateString('ml-IN');
  document.getElementById("clock").innerText = `ഇന്നത്തെ തീയതി: ${date}\nസമയം: ${time}`;
}
setInterval(updateTime, 1000);
updateTime();



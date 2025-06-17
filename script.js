const sidebar = document.getElementById("mySidebar");
const toggleBtn = document.getElementById("sidebarToggle");

toggleBtn.onclick = () => {
  sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
};

const sidebar = document.getElementById("mySidebar");
const toggleBtn = document.getElementById("sidebarToggle");

toggleBtn.onclick = () => {
  const currentLeft = window.getComputedStyle(sidebar).left;
  sidebar.style.left = currentLeft === "0px" ? "-250px" : "0px";
};

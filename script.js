const sidebar = document.getElementById("mySidebar");
const toggleBtn = document.getElementById("sidebarToggle");

toggleBtn.onclick = () => {
  const computedLeft = window.getComputedStyle(sidebar).left;
  sidebar.style.left = (computedLeft === "0px") ? "-250px" : "0px";
};

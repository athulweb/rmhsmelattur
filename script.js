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


<button onclick="sayWelcome()">🔊 സ്വാഗത സന്ദേശം കേൾക്കുക</button>

<script>
  function sayWelcome() {
    const message = new SpeechSynthesisUtterance("സ്വാഗതം ആർ.എം.എച്ച്.എസ് മെലാറ്റൂരിലേക്ക്!");
    message.lang = "ml-IN"; // Malayalam (India)
    message.rate = 1; // Normal speed
    speechSynthesis.speak(message);
  }
</script>


const heart = document.getElementById("heart");
const proposalBox = document.getElementById("proposalBox");
const finalMessage = document.getElementById("finalMessage");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const backBtn = document.getElementById("backBtn");

// Show proposal when heart is clicked
heart.addEventListener("click", () => {
  heart.style.display = "none";
  proposalBox.classList.remove("hidden");
});

// Yes button - show love message
yesBtn.addEventListener("click", () => {
  proposalBox.classList.add("hidden");
  finalMessage.classList.remove("hidden");
});

// No button - make it jump away
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 80 + "%";
  noBtn.style.left = Math.random() * 80 + "%";
});

// Back button
backBtn.addEventListener("click", () => {
  finalMessage.classList.add("hidden");
  proposalBox.classList.remove("hidden");
});

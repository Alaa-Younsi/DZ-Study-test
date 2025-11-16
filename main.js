/* OPEN SLIDE PANELS */
function openPanel(n){
  closePanels();
  document.getElementById("panel" + n).classList.add("active");
}

function closePanels(){
  document.querySelectorAll(".slide-panel").forEach(p => p.classList.remove("active"));
}

/* CLOSE WHEN CLICKING OUTSIDE */
document.addEventListener("click", function(e){
  if(!e.target.closest(".slide-panel") && !e.target.closest(".buttons button")){
    closePanels();
  }
});

/* HEADER SCROLL EFFECT */
const header = document.getElementById("header");
window.addEventListener("scroll", ()=>{
  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function toggleSubPanel() {
    const p = document.getElementById("subPanel");
    p.style.display = (p.style.display === "block") ? "none" : "block";
}

// Close sub panel when clicking outside
document.addEventListener("click", function (event) {
    const sub = document.getElementById("subPanel");
    const triggerBtn = document.getElementById("subTriggerBtn");

    // If sub-panel doesn't exist or isn't open → do nothing
    if (!sub || sub.style.display !== "block") return;

    // If the click is NOT inside the panel AND NOT on the button → close it
    if (!sub.contains(event.target) && event.target !== triggerBtn) {
        sub.style.display = "none";
    }
});
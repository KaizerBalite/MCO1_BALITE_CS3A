for (let i = 0; i < 15; i++) {
  let leaf = document.createElement('div');
  leaf.className = 'leaf';
  leaf.style.left = Math.random() * 100 + "vw";
  leaf.style.animationDuration = (2 + Math.random() * 3) + "s";
  document.body.appendChild(leaf);
}


function handleSubmit(event) {
  event.preventDefault();
  alert("Thank you for contacting me! I’ll get back to you soon.");
}
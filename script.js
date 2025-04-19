let textArea = document.getElementById("text-input");
let paragraph = document.getElementById("char-count");

textArea.addEventListener("input", () => {
  let long = textArea.value.length;

  if (long >= 50) {
    textArea.value = textArea.value.substring(0, 50);
    paragraph.classList.remove("normal");
    paragraph.classList.add("max");
    paragraph.textContent = `Character Count: ${long}/50`;
  } else {
    paragraph.classList.remove("max");
    paragraph.classList.add("normal");
    paragraph.textContent = `Character Count: ${long}/50`;
  }
});

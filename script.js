const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("") //splitting letters for array
    .map(
      (letter, i) =>
        `<span style="transition-delay:${i * 50}ms">${letter}</span>`
    ) //creating array of the letters
    .join(""); //join to turn it to the string
});

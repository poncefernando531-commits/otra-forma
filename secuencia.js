const control = document.querySelector("#secuencia");
control.addEventListener("input", () => {
  const numero = control.value.padStart(2, "0");
  document.querySelector("#fotograma").src = "paso-" + numero + ".jpg";
  document.querySelector("#contador").textContent = control.value + " / 8";
});
document.querySelector(".enlace-corto").addEventListener("click", () => {
  document.querySelector("#corto").open = true;
});

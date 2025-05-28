const oldNames = document.getElementById("old-names"),
      modal = document.getElementById("modal");

document.getElementById("show-old-names").onclick = () => {
    oldNames.classList.toggle("show");
}

document.querySelectorAll("#show-uid").forEach((element) => {
    element.addEventListener("click", () => {
        modal.classList.toggle("show");
    });
});
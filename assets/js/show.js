const oldNames = document.getElementById("old-names"),
      oldNamesBtn = document.getElementById("show-old-names"),
      modal = document.getElementById("modal");

oldNamesBtn.onclick = () => {
    console.log(1)
    oldNames.classList.toggle("show");
}

document.querySelectorAll("#show-uid").forEach((element) => {
    element.addEventListener("click", () => {
        modal.classList.toggle("show");
    });
});

document.body.addEventListener("click", (event) => {
    if (event.target === modal && event.target !== document.getElementsByClassName("modal")[0])
        modal.classList.remove("show");

    if (event.target !== oldNamesBtn.getElementsByTagName("svg")[0])
        oldNames.classList.remove("show");
})
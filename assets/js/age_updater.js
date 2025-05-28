const birthday = new Date(document.getElementById("birthday").textContent),
      ageSpan = document.getElementById("age");

function updateAge() {
    ageSpan.textContent = Math.floor((new Date() - new Date(birthday).getTime()) / 3.15576e+10);
}

updateAge();
setInterval(updateAge, 60e+3);
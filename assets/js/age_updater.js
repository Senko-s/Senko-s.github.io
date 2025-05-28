const birthday = document.getElementById("birthday").textContent,
      ageSpan = document.getElementById("age");

function updateAge() {
    var bd = birthday.split(".");
    ageSpan.textContent = Math.floor((new Date() - new Date(`${bd[1]}.${bd[0]}.${bd[2]}`).getTime()) / 3.15576e+10);
}

updateAge();
setInterval(updateAge, 60e+3);
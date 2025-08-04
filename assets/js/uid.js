const uidList = document.getElementById("uid-list");

function loadUidList() {
    fetch("/uid.txt")
        .then((response) => {
            if (response.status !== 200) {
                console.log(`Error: ${response.status}`);
                return;
            }

            return response.text();
        })
        .then((content) => {
            content.split("\n").forEach((line) => {
                if (!line) return
                const uid = line.split("=")
                if (!uid || uid.length < 2) return
                const element = document.createElement("tr");

                element.innerHTML = `<td>${uid[0]}</td><td>${uid[1]}</td>`;
                uidList.appendChild(element);
            })
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });
}

loadUidList();
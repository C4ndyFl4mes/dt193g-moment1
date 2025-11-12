const submitBTN = document.getElementById("submit-BTN");
const creatureFORM = document.getElementById("creature-FORM");
const creatureTWFORM = document.getElementById("creaturetw-FORM");
const containerTBODY = document.getElementById("container-TBODY");

const nameINPUT = document.getElementById("InputName");
const rankSELECT = document.getElementById("SelectDangerRank");
const worldCHECK = document.getElementById("CheckIsUnderworldCreature");
const descTEXTAREA = document.getElementById("TextAreaDesc");

loadRows();

function loadRows() {
    const data = loadStorage();

    for (let i = 0; i < data.length; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td scope='row'>${i + 1}</td>
            <td>${data[i].name}</td>
            <td>${data[i].rank}</td>
            <td>${data[i].world}</td>
            <td>${data[i].desc}</td>`;
        containerTBODY.appendChild(row);
    }
}

function loadStorage() {
    let data = [];
    data = JSON.parse(sessionStorage.getItem("data"));
    if (data === null) {
        return [
            {
                name: "Nightmare",
                rank: "Mythic",
                world: "Overworld",
                desc: "A creature of the night."
            },
            {
                name: "Slime",
                rank: "F",
                world: "Overworld",
                desc: "A slimy creature."
            },
            {
                name: "Imp",
                rank: "C",
                world: "Underworld",
                desc: "An impish creature."
            },
            {
                name: "Golem",
                rank: "B",
                world: "Overworld",
                desc: "A creature with a heart of stone."
            },
            {
                name: "Succubus",
                rank: "S",
                world: "Underworld",
                desc: "A creature that should not be explained."
            }
        ];
    }
    return data;
}

function addToStorage(item) {
    let data = loadStorage();
    data.push(item);
    sessionStorage.setItem("data", JSON.stringify(data));
}


submitBTN.addEventListener("click", (event) => {
    if (creatureFORM) {
        if (creatureFORM.checkValidity()) {
            const item = {
                name: nameINPUT.value,
                rank: rankSELECT.value,
                world: worldCHECK.checked ? "Underworld" : "Overworld",
                desc: descTEXTAREA.value
            };
            addToStorage(item);
            window.location.reload();
        }
        creatureFORM.classList.add("was-validated");
    } else if (creatureTWFORM) {
        if (creatureTWFORM.checkValidity()) {
            const item = {
                name: nameINPUT.value,
                rank: rankSELECT.value,
                world: worldCHECK.checked ? "Underworld" : "Overworld",
                desc: descTEXTAREA.value
            };
            addToStorage(item);
            window.location.reload();
        }
    }

}, false);
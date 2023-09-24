document.addEventListener("DOMContentLoaded", function() {
    // Function to append the current date to the heading
    function editDate() {
        const auctionHeading = document.getElementById("auctionHeading");
        const currentDate = new Date().toDateString();
        const dateTextNode = document.createTextNode(" - " + currentDate);
        auctionHeading.appendChild(dateTextNode);
    }

    // Function to add a new player to the player list
    function addPlayer() {
        const newPlayerName = document.getElementById("newPlayerName").value;
        if (newPlayerName) {
            const playerListDiv = document.querySelector("div:nth-child(1) p");
            const playerParagraph = document.createElement("p");
            playerParagraph.textContent = newPlayerName;
            playerListDiv.appendChild(playerParagraph);
            document.getElementById("newPlayerName").value = "";
        }
    }

    // Function to replace the two existing batsmen
    function replaceBatsmen() {
        const newBatsman1 = document.getElementById("newBatsman1").value;
        const newBatsman2 = document.getElementById("newBatsman2").value;
        const batsmenList = document.getElementById("batsmenList");
        if (newBatsman1 && newBatsman2) {
            batsmenList.innerHTML = ""; // Clear the existing list
            const batsman1Item = document.createElement("li");
            batsman1Item.textContent = newBatsman1;
            const batsman2Item = document.createElement("li");
            batsman2Item.textContent = newBatsman2;
            batsmenList.appendChild(batsman1Item);
            batsmenList.appendChild(batsman2Item);
            document.getElementById("newBatsman1").value = "";
            document.getElementById("newBatsman2").value = "";
        }
    }

    // Function to drop the last bowler from the list
    function dropBowler() {
        const bowlersList = document.getElementById("bowlersList");
        const lastBowler = bowlersList.lastElementChild;
        if (lastBowler) {
            bowlersList.removeChild(lastBowler);
        }
    }

    // Event listeners for buttons
    document.getElementById("editDateButton").addEventListener("click", editDate);
    document.getElementById("addPlayerButton").addEventListener("click", addPlayer);
    document.getElementById("replaceBatsmenButton").addEventListener("click", replaceBatsmen);
    document.getElementById("dropBowlerButton").addEventListener("click", dropBowler);
});

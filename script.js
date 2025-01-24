var addButton = document.querySelector(".addbutton");
var tableBody = document.querySelector(".dataentry");
let pendingCount = 0;
var arr = [];

addButton.addEventListener("click", function () {
    const docName = prompt("Enter Document Name:");
    const lastModified = prompt("Enter Last Modified Date (e.g., 2025-01-17):");
    const status = selectStatus();

    console.log(status);

    if (docName && status && lastModified) {
        var newRow = document.createElement("tr");

        var checkBoxCell = document.createElement("td");
        checkBoxCell.innerHTML = '<input type="checkbox" />';
        newRow.appendChild(checkBoxCell);
        console.log("checkbox");

        var docNameCell = document.createElement("td");
        docNameCell.textContent = docName;
        newRow.appendChild(docNameCell);
        console.log("docname");

        var statusCell = document.createElement("td");
        var statusdiv = document.createElement("div");
        var statustext = document.createElement('p');

        var statusbutton = document.createElement("button");

        statusbutton.textContent = status;
        if (status == "Pending") {
            pendingCount.textContent = `Waiting for ${pendingCount} person`;
        }
        statusdiv.appendChild(statusbutton);
        statusdiv.appendChild(statustext);

        statusCell.appendChild(statusdiv);
        newRow.append(statusCell);
        console.log("statuscell");


        var lastModifiedCell = document.createElement("td");
        lastModifiedCell.textContent = lastModified;
        newRow.appendChild(lastModifiedCell);
        console.log("lastmodified");


        var signupcell = document.createElement("td");
        var wrapper = document.createElement("div");
        wrapper.classList.add("signupimage");
        var signuptext = document.createElement('p')
        var signup = document.createElement("button");
        if (status == "Needs Signing") {
            signup.textContent = "Sign Now";
        } else if (status == "Pending") {
            signup.textContent = "Preview";
        } else {
            signup.textContent = "Download PDF";
        }
        wrapper.appendChild(signup);
        var img = document.createElement('img');
        img.src = "image/more_vert_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 2.svg";
        img.width = 20;
        img.height = 20;
        wrapper.appendChild(img);


        signupcell.appendChild(wrapper);
        newRow.appendChild(signupcell);
        console.log("SignUpButton");

        var deleteButtonCell = document.createElement("td");
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('delete-btn');
        deleteButtonCell.appendChild(deleteButton);
        newRow.appendChild(deleteButtonCell);
        console.log("deletebutton");


        tableBody.appendChild(newRow);
        console.log("deletebutton");


        arr.push({
            docName,
            status,
            lastModified
        });

    } else {
        alert("Please fill in all fields!");
    }
});

function selectStatus() {
    console.log("In Select status now");
    const status = prompt("Enter Document Status (Choose: 'Needs Signing', 'Waiting', 'Pending'):");
    if (status === "Needs Signing" || status === "Waiting" || status === "Pending") {
        return status;
    } else {
        alert("Invalid status. Please enter 'Needs Signing', 'Waiting', or 'Pending'.");
        return null;
    }
}

// tableBody.addEventListener("click", function (event) {
//     if (event.target && event.target.classList.contains("delete-btn")) {
//         const rowToDelete = event.target.closest("tr");
//         const statusCell = rowToDelete.querySelector("td:nth-child(2)");
//         const status = statusCell.textContent;

//         tableBody.removeChild(rowToDelete);
//         const docName = rowToDelete.querySelector("td:nth-child(1)").textContent;
//         const index = arr.findIndex(item => item.docName === docName);
//         if (index > -1) {
//             arr.splice(index, 1);
//         }
//         if (status === "Pending") {
//             pendingCount--;
//             pendingCountDisplay.textContent = `Pending Count: ${pendingCount}`;
//         }
//     }
// });
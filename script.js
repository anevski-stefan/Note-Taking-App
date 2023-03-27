let note_input = document.querySelector("#note-input");
let results = document.querySelector(".results-table");
let clicked2 = false;
let error = document.querySelector(".error");
let export_btn = document.querySelector("#export-btn");
error.style.display = "none";
let tbody = document.querySelector("#tb");
export_btn.style.display = "none";

results.children[0].children[0].classList.add("no-select");
export_btn.addEventListener("click", function() {
    htmlToCSV("notes.csv");
    let lastRow = results.rows.length-1;
    for(let i = lastRow; i > 0; i--){
        results.deleteRow(i);
    }
    export_btn.style.display = "none";
})


function downloadCSVFile(csv, filename) {
	let csv_file, download_link;

	csv_file = new Blob([csv], {type: "text/csv"});

	download_link = document.createElement("a");

	download_link.download = filename;

	download_link.href = window.URL.createObjectURL(csv_file);

	download_link.style.display = "none";

	document.body.appendChild(download_link);

	download_link.click();
}

function htmlToCSV(filename) {
	let data = [];
    let rows = document.querySelectorAll(".results-table tr");

    if(rows.length > 1){
        for (let i = 0; i < rows.length; i++) {
            let row = [], cols = rows[i].querySelectorAll("tr, td");

        for (let j = 0; j < cols.length-1; j++) {
            row.push(cols[j].innerText);
        }

            data.push(row.join(","));
        }
        downloadCSVFile(data.join("\n"), filename);
    }
}



function send(){
    if(note_input.value.length > 0){
        error.style.display = "none";
        export_btn.style.display = "block";
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        td1.textContent = note_input.value;
        //var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        let dt = new Date();
        let timeString = dt.getFullYear() +  "-" + dt.getMonth() + "-" + dt.getDate() + " " + dt.getHours() + ":" + dt.getMinutes() +":" + dt.getSeconds();
        td2.innerHTML = timeString;

        let span = document.createElement("span");
        let a1 = document.createElement("a");
        let a2 = document.createElement("a");
        a1.style.cursor = "pointer";
        a2.style.cursor = "pointer";


        let i1 = document.createElement("i");
        i1.classList.add("fa-solid");
        i1.classList.add("fa-trash");
        i1.classList.add("red");
        i1.style.marginRight = "20px";

        let i2 = document.createElement("i");
        i2.classList.add("fa-solid");
        i2.classList.add("fa-circle-check");
        i2.classList.add("blue");

        a1.onclick = function(){
            error.style.display = "none";
            let removed_tr = a1.closest("tr");
            results.deleteRow(removed_tr.rowIndex);
            if(results.rows.length == 1){
                export_btn.style.display = "none";
            }
        }

        a2.onclick = function() {
            clicked2 = true;
            let disabled_tr = a1.closest("tr");
            let btn_disabled1 = disabled_tr.children[2].children[0].children[0];
            let btn_disabled2 = disabled_tr.children[2].children[0].children[1];
            //disabled_tr.classList.add("disabled-trr");
            disabled_tr.children[0].classList.add("disabled-trr");
            disabled_tr.children[1].classList.add("disabled-trr");
            disabled_tr.children[0].classList.add("no-select");
            disabled_tr.children[1].classList.add("no-select");

            btn_disabled1.classList.add("red");
            disabled_tr.children[2].children[0].removeChild(disabled_tr.children[2].children[0].children[1]);
            disabled_tr.children[2].children[0].children[0].children[0].style.marginRight = "0px";
        }

        a1.appendChild(i1);
        a2.appendChild(i2);

        span.appendChild(a1);
        span.appendChild(a2);
        td3.appendChild(span);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tbody.appendChild(tr);
        note_input.value = "";
    } else {
        error.style.color = "red";
        error.style.display = "block";
    }
}

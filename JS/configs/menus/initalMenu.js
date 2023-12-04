function inititRequest() {
    const torequestData = "https://jsonplaceholder.typicode.com/todos";
    $.getJSON(torequestData, function(data) {
        console.log(data);
        resultRequest = data;
        initSearch(resultRequest);
    });
}

function initSearch(data) {
    const housetable = document.getElementsByClassName("houseTable")[0];
    housetable.style.display = "flex";
    for (let i = 0; i < data.length; i++) {
        data[i]["checkbox"] = buttons2(data[i].id, "checkbox", data[i]["completed"]);
        data[i]["seePage"] = buttons(data[i].id, "seePage");
    }

    $('#tableProjects').DataTable({
        data: data,
        "ordering": false,
        columns: [
            {
                data: 'title',
                class: "titletoPlot"
            },
            {
                data: 'checkbox',
                class: "checkboxtoPlot"
            },
            {
                data: 'seePage',
                class: "seePagetoPlot"
            },
        ],
    });

    document.getElementById("tableProjects").style.display = "block";

    buttonsConfigs();
    function buttons(data, type) {
        return `    
            <div class="actionsProject">
                <button class="seeAnotherPage" id="${[data, type]}"></button>
            </div>
        `;
    }

    function buttons2(data, type, check) {
        let input = `<input disabled checked type="checkbox" class="checkName" id="${[data, type]}">`;

        if(!check){
            input = `<input disabled type="checkbox" class="checkName" id="${[data, type]}">`;
        }

        return `
            <div class="actionsProject">
                <label class="labelCheck">
                    ${input}
                </label>
            </div>
        `;
    }
}
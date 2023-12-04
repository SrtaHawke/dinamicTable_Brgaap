let resultRequest = null;

function buttonsConfigs() {
    const buttonsPage = document.getElementsByClassName("seeAnotherPage");
    for (let i = 0; i < buttonsPage.length; i++) {
        buttonsPage[i].onclick = function (e) {
            const id = this.id.split(",");
            for (let j = 0; j < resultRequest.length; j++) {
                if(resultRequest[j].id.toString() === id[0]){
                    seeAnother(buttonsPage[i], j);
                    break
                }
            }
        }
    }
}

function seeAnother(el, position) {
    alert("Você irá para outra página");
}
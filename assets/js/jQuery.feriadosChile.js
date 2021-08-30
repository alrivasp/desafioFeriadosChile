jQuery.fn.feriadosChile = function () {
    var element = this;
    $.ajax({
        type: "GET" ,
        url: "https://www.feriadosapp.com/api/holidays.json" ,
        dataType: "json" ,
        success: function (response) {
            element.append(buildTable(response.data));
        }
    });
    return this ;
};

const buildTable = (data) => {
    let template = "";
    let num = 0;
        template +=`
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Detalle</th>
                    </tr>
                    </thead>
                    <tbody>
                        `
        for(let i in data){
            num++;
            template += `
                <tr>
                    <th scope="row">${num}</th>
                    <td>${data[i]['date']}</td>
                    <td>${data[i]['title']}</td>
                    <td>${data[i]['extra']}</td>
                <tr>
            `
        };

    template += `
                    </tbody>
                </table>`
    return template;
};
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/cupons",
        success: function (result) {
            let table = $('<div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">');
            result.forEach(cupom => {
                table.append('<div class="col mb-5">' +
                                '<div class="card h-100">' +
                                    '<!-- Product image-->' +
                                    '<img class="card-img-top" src="' + cupom.caminhoImg + '" alt="..." />' +
                                    '<!-- Product details-->' +
                                    '<div class="card-body p-4">' +
                                        '<div class="text-center">' +
                                            '<!-- Product name-->' +
                                            '<h5 class="fw-bolder">' + cupom.titulo + '</h5>' +
                                            '<!-- Product price-->' +
                                            'Desconto de ' + cupom.porcentagemDesconto + '%' +
                                        '</div>' +
                                    '</div>' +
                                    '<!-- Product actions-->' +
                                    '<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">' +
                                        '<div class="text-center"><a class="btn btn-outline-dark mt-auto" href="' + cupom.urlProduto + '" target="_blank">Ir para o site</a></div>' +
                            '</div> </div> </div> </div> </div>'); 
            });

            $("#cupons").html(table);
        },
        error: function (xhr, status, error) {
            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
        }
    });
});
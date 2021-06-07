$(document).ready(function () {
    if(sessionStorage.getItem('adm') == 'true'){
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/api/cupons",
            success: function (result) {
                let table = $('<div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">');
                result.forEach(cupom => {
                    if(!cupom.publicado)
                        table.append('<div class="card m-2" style="width: 18rem;">' +
                                        '<span class="porcentagem">' + cupom.porcentagemDesconto + ' % OFF</span>' +
                                        '<img class="card-img-top" src="' + cupom.caminhoImg + '" alt="Card image cap" style="height: 230px;">' +
                                        '<div class="card-body">' +
                                        '<h5 class="card-title">' + cupom.titulo.substring(0, 30) + '</h5>' +
                                        '<p class="card-text">' + cupom.descricao.substring(0, 100) + '</p>' +
                                        '<a href="' + cupom.urlProduto + '" class="btn btn-primary" target="_blank">Ir para o site</a>' +
                                        '<a href="http://localhost/phpmyadmin/index.php?route=/sql&server=1&db=cupom_desconto&table=cupoms&pos=0" class="btn btn-secundary" target="_blank">Aprovar desconto</a>' +
                                        '</div>' +
                                    '</div>');
                });
    
                $("#cupons").html(table);
            },
            error: function (xhr, status, error) {
                alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
            }
        });
    }else{
        sessionStorage.setItem('adm', false);
        $(location).attr('href', '/backEnd/cupom_desconto/frontend/index.html');
    }
});
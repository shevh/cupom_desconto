let input = document.getElementById( 'upload' );
const infoArea = document.getElementById( 'upload-label' );

$(function () {
    $("#salvarCadastro").on('click', function(){
        debugger
        if(document.getElementById( 'upload' ).files.length == 0){
            alert("É obrigatorio selecionar uma imagem")
            return false
        }
        const desconto = {
            'codigo':    $("#codigo").val(),
            'categoria': $("#categoria").val(),
            'titulo':    $("#titulo").val(),
            'descricao': $("#descricao").val(),
            'porcentagemDesconto': $("#porcentagemDesconto").val(),
            'urlProduto': $("#urlProduto").val(),
            'publicado':  0,
            'caminhoImg': 'src/imgCupom/' + input.files[0].name
        };

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/api/cupons",
            data: desconto,
            success: function (result) {
                $("#cadastrarCupom")[0].reset();
                clearImg();
                $("#modal").trigger("click");
            },
            error: function (xhr, status, error) {
                console.log("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
            }
        });
    });
    $("#paginaInicial").on('click',function(){
        $(location).attr('href', '/backEnd/cupom_desconto/frontend/index.html');
    });

    $('#upload').on('change', function () {
        readURL(input);
    });
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageResult')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

input.addEventListener( 'change', showFileName );
function showFileName( event ) {
  var input = event.srcElement;
  var fileName = input.files[0].name;
  infoArea.textContent = 'Nome do arquivo: ' + fileName;
}

function clearImg(){
    $("#upload").val('');
    $("#upload-label").html('Escolha uma imagem');
    $('#imageResult').attr('src', '');
}
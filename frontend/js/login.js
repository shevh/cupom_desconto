$(function () {
    const formLogin = '<form class="m-4" id="login" action="/backEnd/cupom_desconto/frontend/admin.html">' +
    '<div class="form-group" id="msgLogin"></div>' +
    '<div class="form-group">' +
    '    <label for="email">Email</label>' +
    '    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Digite seu email" required>' +
    '    <small id="emailHelp" class="form-text text-muted">Não compartilhamos seu email com ninguem</small>' +
    '</div>' +
    '<div class="form-group">' +
    '    <label for="pass">Senha</label>' +
    '    <input type="password" class="form-control" id="pass" placeholder="Digite sua senha" required>' +
    '</div>' +
    '<button type="submit" class="btn btn-primary" id="logar">Submit</button>' +
    '</form>';

    /*const formCadastro = '<form class="m-4" id="cadastro" hidden>' +
    '<div class="form-group">' +
    '    <label for="exampleInputEmail1">Email address</label>' +
    '    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">' +
    '    <small id="emailHelp" class="form-text text-muted">We ll never share your email with anyone else.</small>' +
    '</div>' +
    '<div class="form-group">' +
    '    <label for="exampleInputPassword1">Password</label>' +
    '    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">' +
    '</div>' +
    '<div class="form-check">' +
    '    <input type="checkbox" class="form-check-input" id="exampleCheck1">' +
    '    <label class="form-check-label" for="exampleCheck1">Check me out</label>' +
    '</div>' +
    '<button type="submit" class="btn btn-primary" id="logar">Submit</button>' +
    '</form>';*/

    const modalLogin = '<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">' +
                          '  <div class="modal-dialog modal-lg">' +
                          '      <div class="modal-content">' +
                          '          ' + formLogin + //formCadastro + '' +
                          '      </div>' +
                          '  </div>' +
                          '</div>';

    $("#login").html(modalLogin);

    $("#login").on("submit", function(e){
        sessionStorage.setItem('adm', false);
        if($("#email").val() == 'gabriel@admin.com'){
            sessionStorage.setItem('adm', true);
        }else{
            e.preventDefault(); 
            alert('Email ou senha incorretos');
        }
    });


});
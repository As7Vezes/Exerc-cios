let pessoaController = new PessoaController();

document.querySelector('.form')
    .addEventListener('submit', pessoaController.calculaIdade.bind(pessoaController));
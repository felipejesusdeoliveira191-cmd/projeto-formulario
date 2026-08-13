// document.querySelector: Procura e seleciona o formulário na página através da classe '.form'
const formulario = document.querySelector(".form");

// addEventListener("submit"): Fica "ouvindo" o formulário e roda o código quando o usuário clica em enviar
formulario.addEventListener("submit", function (event) {
  
  // event.preventDefault(): Impede que a página recarregue ao enviar (o que apagaria os dados da tela)
  event.preventDefault();

  // .querySelector().value: Encontra cada campo pelo ID ('#') e guarda o texto que o usuário digitou
  const nome = formulario.querySelector('#usuario').value;   /* Pega o texto do campo Nome */
  const email = formulario.querySelector('#email').value;     /* Pega o texto do campo E-mail */
  const senha = formulario.querySelector('#senha').value;     /* Pega o texto do campo Senha */

  // if (senha.length < 8): Verifica se a quantidade de letras/números da senha é menor que 8
  if (senha.length < 8) {
      // alert: Abre um balão de aviso na tela avisando sobre o erro da senha curta
      alert("❌ Erro: A senha deve conter pelo menos 8 dígitos!");
      // return: Para a execução do código imediatamente (bloqueia o cadastro se a senha for inválida)
      return; 
  }

  // const dadosUsuario: Cria um objeto (caixa organizada) para juntar todas as informações coletadas
  const dadosUsuario = {
    nome: nome,
    email: email,
    senha: senha,
  };

  // console.log: Mostra o objeto com os dados lá na aba "Console" do navegador (ótimo para testes)
  console.log("🎉 Dados capturados com sucesso!", dadosUsuario);

  // alert(``): Abre um balão de sucesso mostrando o Nome e E-mail cadastrados na tela do usuário
  alert(`Cadastro realizado!\nNome: ${nome}\nEmail: ${email}`);

  // formulario.reset(): Limpa todas as caixas de texto do formulário automaticamente após o sucesso
  formulario.reset();
});

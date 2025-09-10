function validaproc() {
    
    let nome;
    let sobrenome;
    let telefone;
    let email;
    let cpf;
    let dataNascimento;

    const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/ ;
    const sobrenomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/ ;
    const telefoneRegex = /^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/ ;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
    const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/ ;
    const dataNascimentoRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/ ;

    if (nomeRegex.test(nome)) {
        console.log("Nome válido");
    } else {
        console.log("Nome inválido");
    }
    if (sobrenomeRegex.test(sobrenome)) {
        console.log("Sobrenome válido");
    } else {
        console.log("Sobrenome inválido");
    }
    if (telefoneRegex.test(telefone)) {
        console.log("Telefone válido");
    } else {
        console.log("Telefone inválido");
    }
    if (emailRegex.test(email)) {
        console.log("Email válido");
    } else {
        console.log("Email inválido");
    }
    if (cpfRegex.test(cpf)) {
        console.log("CPF válido");
    } else {
        console.log("CPF inválido");
    }
    if (dataNascimentoRegex.test(dataNascimento)) {
        console.log("Data de Nascimento válida");
    } else {
        console.log("Data de Nascimento inválida");
    }
    

    
    
    
    
    
    
    
    
    
    

}   
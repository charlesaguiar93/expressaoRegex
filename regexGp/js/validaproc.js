// selecione os elementos do formulário
const emailInput = document.querySelector("#emailInput");
const resultMessage = document.querySelector("#resultMessage");
const emailForm = document.querySelector("#emailForm");

// função para validar o email
emailForm.addEventListener("submit", function(event) {
    event.preventDefault(); // impede o envio do formulário

    const email = emailInput.value;
// expressão regular para validar o email

const isValid = validateEmail(email);
    if (isValid) {
        resultMessage.textContent = "Email  válido, formulário enviado com sucesso!";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Email inválido. Por favor, insira um email no formato texto@texto.texto";
        resultMessage.style.color = "red";
    }
});



const validateEmail = (email) => {
// Padrão Regex para validar o email texto@texto.texto:

const Regex = /^[^\s]+@[^\s]+\.[^\s]+$/;

    return Regex.test(email);
};
// selecione os elementos do formulário nome
const nameInput = document.querySelector("#nameInput");
const resultMessagem = document.querySelector("#resultMessage");
const nameForm = document.querySelector("#nameForm");

nameForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const isValid = validateName(name);

    if (isValid) {
        resultMessagem.textContent = "Nome válido, formulário enviado com sucesso!";
        resultMessagem.style.color = "green";
    } else {
        resultMessagem.textContent = "Nome inválido. Por favor, insira um nome válido.";
        resultMessagem.style.color = "red";
    }
});
// Padrão Regex para validar o nome (apenas letras e espaços):
const validateName = (name) => {
    const Regex = /^[a-zA-Z\s]+$/;
    return Regex.test(name);
};

// selecione os elementos do formulário data de nascimento
const dataNascimentoInput = document.querySelector("#dataNascimentoInput");
const resultMessageData = document.querySelector("#resultMessage");
const dataNascimentoForm = document.querySelector("#dataNascimentoForm");

dataNascimentoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const dataNascimento = dataNascimentoInput.value;
    const isValid = validateDataNascimento(dataNascimento);

    if (isValid) {
        resultMessageData.textContent = "Data de nascimento válida, formulário enviado com sucesso!";
        resultMessageData.style.color = "green";
    } else {
        resultMessageData.textContent = "Data de nascimento inválida. Por favor, insira uma data válida.";
        resultMessageData.style.color = "red";
    }
});

// Padrão Regex para validar a data de nascimento (formato: dd/mm/aaaa):
const validateDataNascimento = (dataNascimento) => {
    const Regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return Regex.test(dataNascimento);
};

// selecione os elementos do formulário CPF
const cpfInput = document.querySelector("#cpfInput");
const resultMessageCpf = document.querySelector("#resultMessage");
const cpfForm = document.querySelector("#cpfForm");

cpfForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const cpf = cpfInput.value;
    const isValid = validateCpf(cpf);

    if (isValid) {
        resultMessageCpf.textContent = "CPF válido, formulário enviado com sucesso!";
        resultMessageCpf.style.color = "green";
    } else {
        resultMessageCpf.textContent = "CPF inválido. Por favor, insira um CPF válido.";
        resultMessageCpf.style.color = "red";
    }
});

// Padrão Regex para validar o CPF (formato: 000.000.000-00):
const validateCpf = (cpf) => {
    const Regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return Regex.test(cpf);
};

const telefoneInput = document.querySelector("#telefoneInput");
const resultMessageTelefone = document.querySelector("#resultMessage");
const telefoneForm = document.querySelector("#telefoneForm");

telefoneForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const telefone = telefoneInput.value;
    const isValid = validateTelefone(telefone);

    if (isValid) {
        resultMessageTelefone.textContent = "Telefone válido, formulário enviado com sucesso!";
        resultMessageTelefone.style.color = "green";
    } else {
        resultMessageTelefone.textContent = "Telefone inválido. Por favor, insira um telefone válido.";
        resultMessageTelefone.style.color = "red";
    }
});

// Padrão Regex para validar o telefone (formato: (00) 0000-0000):
const validateTelefone = (telefone) => {
    const Regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return Regex.test(telefone);
};
// selecione os elementos do formulário CEP
const cepInput = document.querySelector("#cepInput");
const resultMessageCep = document.querySelector("#resultMessage");
const cepForm = document.querySelector("#cepForm");

cepForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const cep = cepInput.value;
    const isValid = validateCep(cep);

    if (isValid) {
        resultMessageCep.textContent = "CEP válido, formulário enviado com sucesso!";
        resultMessageCep.style.color = "green";
    } else {
        resultMessageCep.textContent = "CEP inválido. Por favor, insira um CEP válido.";
        resultMessageCep.style.color = "red";
    }
});

// Padrão Regex para validar o CEP (formato: 00000-000):
const validateCep = (cep) => {
    const Regex = /^\d{5}-\d{3}$/;
    return Regex.test(cep);
};

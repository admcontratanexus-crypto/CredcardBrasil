// LOGIN SIMULADO
function login() {
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;
    const nascimento = document.getElementById('nascimento').value;
    const msg = document.getElementById('login-msg');

    if(cpf && senha && nascimento){
        msg.style.color = 'green';
        msg.innerText = 'Login realizado com sucesso (simulado)!';
    } else {
        msg.style.color = 'red';
        msg.innerText = 'Por favor, preencha todos os campos.';
    }
}

// SIMULAÇÃO DE EMPRÉSTIMO
function calculateLoan() {
    const value = parseFloat(document.getElementById('loanValue').value);
    const age = document.getElementById('age').value;
    const resultDiv = document.getElementById('loanResult');

    if(!value || !age) {
        resultDiv.style.display = 'block';
        resultDiv.style.backgroundColor = '#f8d7da';
        resultDiv.style.borderLeftColor = '#dc3545';
        resultDiv.innerText = 'Por favor, preencha todos os campos corretamente.';
        return;
    }

    let approved = 0;
    if(age === 'mais30'){
        approved = 4000;
    } else if(age === 'menos30'){
        approved = value <= 2500 ? value : 2500;
    }

    let fee = value < 1500 ? (value * 0.03).toFixed(2) : (value * 0.05).toFixed(2);

    resultDiv.style.display = 'block';
    resultDiv.style.backgroundColor = '#e0f7e9';
    resultDiv.style.borderLeftColor = '#0F8C4F';
    resultDiv.innerHTML = `Valor solicitado: R$ ${value.toFixed(2)}<br>
                            Valor aprovado: R$ ${approved.toFixed(2)}<br>
                            Taxa inicial: R$ ${fee}`;
}

// CHAT SIMUL

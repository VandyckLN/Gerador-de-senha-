function generatePassword() {
    // Definindo os conjuntos de caracteres
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';

    // Obtendo as opções do usuário
    // Obtendo o comprimento da senha do input do usuário
    const length = parseInt(document.getElementById('length').value) || 20; // Valor padrão 20 se não for especificado
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    // Criando o conjunto de caracteres baseado nas opções
    let allowedChars = '';
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    // Verificando se pelo menos um tipo de caractere foi selecionado
    if (allowedChars.length === 0) {
        alert('Por favor, selecione pelo menos um tipo de caractere.');
        return;
    }

    // Garantindo que a senha tenha pelo menos 1 letra maiúscula e 2 números
    let password = '';
    if (includeUppercase) {
        password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    } else {
        alert('Por favor, selecione a opção de incluir maiúsculas.');
        return;
    }

    if (includeNumbers) {
        password += numberChars[Math.floor(Math.random() * numberChars.length)];
        password += numberChars[Math.floor(Math.random() * numberChars.length)];
    } else {
        alert('Por favor, selecione a opção de incluir números.');
        return;
    }

    // Preenchendo o restante da senha
    for (let i = password.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    // Embaralhando a senha para garantir a aleatoriedade
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    // Exibindo a senha gerada
    document.getElementById('passwordOutput').textContent = password;
}
const errorMessages = {
    "auth/invalid-email": 'O e-mail informado é inválido!',
    "auth/user-not-found": 'Email não encontrado!',
    "auth/weak-password": 'Senha Fraca! A senha deve ter ao menos 6 caracteres!',
    "auth/email-already-in-use": 'Esse e-mail já consta como cadastrado no sistema!',
    "auth/wrong-password": "Senha incorreta!",
    "auth/missing-password": "Senha não informada!"
}

export default function handleError(e){
    if(e.code && errorMessages[e.code]){
        return errorMessages[e.code];
    }
    else{
        return e;
    }
}
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexStringIncludesNumber = /\d/;

const validation = (userData) => {
    let errors = {};
    if (!regexEmail.test(userData.username)){
        errors.username = "Email inválido";
    }
    if (!userData.username) {
        errors.username = "Este campo no puede estar vacío";
    }
    if (userData.username.length > 35) {
        errors.username = "Email demasiado largo";
    }
    if (!userData.password.match(regexStringIncludesNumber)) {
        errors.password = "Debe incluir al menos un número";
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "Debe tener entre 6 y 10 caracteres"
    }
    return errors;
}

export default validation
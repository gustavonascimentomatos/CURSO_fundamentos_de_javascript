function minhaFuncao1(){
    return `aeeee`
};

const minhaFuncao2 = function(parametro) {
    return `aeee ${parametro}`
};

const minhaFuncao3 = (parametro) => {
    return `aeee ${parametro}`
};

const minhaFuncao4 = parametro => `aee ${parametro}`;

const obj1 = {
    minhaFuncao5: parametro => `aee ${parametro}`
};

const obj2 = {
    minhaFuncao6(parametro) {
        return `aeee ${parametro}`
    }
};

console.log(obj1.minhaFuncao5('teste!'))
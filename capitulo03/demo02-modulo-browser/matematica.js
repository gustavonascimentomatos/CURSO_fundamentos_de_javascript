// Já fica publico sozinho
// Só adicionar no HTML

class Matematica {
    static somar(valor1, valor2) {
        return valor1 + valor2;
    }

    static multiplicar(valor1, valor2) {
        return valor1 * valor2;
    }

    static subtrair(valor1, valor2) {
        return valor1 - valor2;
    }

    static dividir(valor1, valor2) {
        if (valor2 !== 0 && valor2 > 0) {
            return valor1 / valor2;
        }
    }
}

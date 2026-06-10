# 🌱 Calculadora de Sementes

Uma aplicação web simples, moderna e intuitiva para calcular a quantidade ideal de sementes necessária para o plantio, baseando-se na área do terreno, na densidade recomendada e na taxa de germinação.

---

## 🚀 Demonstração

Esta calculadora foi desenhada para ser responsiva e fácil de usar tanto no computador como em dispositivos móveis, apresentando um visual limpo e tons inspirados na natureza.

---

## 📋 Funcionalidades

- **Cálculo Base:** Determina o total de sementes multiplicando a área do terreno (m²) pela densidade desejada (sementes/m²).
- **Compensação por Germinação:** Ajusta automaticamente a quantidade total se a taxa de germinação das sementes for inferior a 100%, garantindo que a meta de plantas vivas seja alcançada.
- **Validação de Dados:** Impede a inserção de números negativos ou valores inválidos.
- **Formatação Amigável:** Exibe o resultado final arredondado (já que não existem meias sementes) e formatado com separadores de milhares (ex: `15.000` em vez de `15000`).

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando tecnologias web standard, sem a necessidade de frameworks ou bibliotecas externas:

* **HTML5** - Estruturação semântica da interface e formulários.
* **CSS3** - Estilização moderna, variáveis de cor (tons de verde), cantos arredondados, sombras sutis e design responsivo.
* **JavaScript (ES6)** - Lógica matemática de cálculo e manipulação do DOM.

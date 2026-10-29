# Universidade Explorer 🎓

Mini aplicativo desenvolvido como parte do desafio prático da disciplina de **Programação de Dispositivos Móveis**. O projeto consolida conceitos fundamentais de desenvolvimento mobile, como navegação, organização de rotas e passagem de dados entre ecrãs.

## 🚀 Funcionalidades

- **Navegação em Stack:** Fluxo de telas (Home ➔ Detalhes do Curso ➔ Estudantes ➔ Perfil).
- **Bottom Tab Navigation:** Abas separadas para "Home" e "Sobre" (About).
- **Passagem de Dados:** Utilização de `route.params` para enviar informações (dados do curso e nome do estudante) entre as telas.
- **Dados Simulados:** Uso de um ficheiro de *mock* (`mockData.js`) para popular as listas de cursos e estudantes.
- **Botão de Voltar:** Implementação de `navigation.goBack()` em todas as telas de detalhe/perfil.

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/) (Native Stack e Bottom Tabs)

## 📂 Estrutura do Projeto

```text
UniversidadeExplorer/
├── App.js                  # Configuração das rotas (Stack e Tabs)
├── src/
│   ├── data/
│   │   └── mockData.js     # Lista de cursos e estudantes simulados
│   └── screens/
│       ├── HomeScreen.js   # Lista de cursos
│       ├── CourseScreen.js # Detalhes do curso e botão para estudantes
│       ├── StudentsScreen.js # Lista de estudantes
│       ├── ProfileScreen.js  # Perfil do estudante
│       └── AboutScreen.js    # Tela "Sobre"
└── package.json

⚙️ Como Executar o Projeto
Pré-requisitos
Node.js instalado na tua máquina.

Aplicação Expo Go instalada no teu telemóvel (Android ou iOS).

1. Passo a passo
Clonar o repositório:

git clone https://github.com/Dongo-28/UniversidadeExplorer.git
cd UniversidadeExplorer

2. Instalar as dependências:
npm install

3. Iniciar o servidor Expo:
npx expo start

4. Abrir no telemóvel:

      .Certifica-te de que o teu telemóvel e o PC estão na mesma rede Wi-Fi.
      .Abre a app Expo Go e lê o QR Code que aparece no terminal.
      .Se a rede bloquear a ligação, podes usar o modo túnel executando npx expo start --tunnel.

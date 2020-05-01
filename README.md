<h3 align="center">
    <img src="https://user-images.githubusercontent.com/11545976/80434325-ea602a00-88cf-11ea-91e2-bc0900551292.png">
</h3>

<h3 align="center">
  [GoStack7] | Projeto desenvolvido ao longo do curso
</h3>

---

## 📑 Sobre

**GoBarber** é uma aplicação que permite fornecedores de serviços (nesse caso, barbeiros) gerenciar sua agenda de atendimentos. A aplicação está dividida entre back end, front end e o mobile. O front end representa a visão do prestador de serviço, mostrando os horários em abertos, notificações sobre agendamentos, perfil do usuário e possibilidade de criar uma conta. O mobile permite que os usuários (clientes) possam agendar um serviço, selecionando o prestador e o horário disponível. Abaixo, seguem os links para as outras versões.

<h4 align="center">
  <a href="https://github.com/AugustoMarcelo/gobarber-frontend">Front end</a> | <a href="https://github.com/AugustoMarcelo/gobarber-backend">Back end</a>
</h4>

---

## 💻 Instruções para execução

> A aplicação teve o desenvolvimento focado em dispositivos ANDROID. Atualizado com a versão 5 do react-navigation

- Faça o download do projeto:
```bash
  # clonando o repositório
  git clone https://github.com/AugustoMarcelo/gobarber-mobile.git

  # acessando a pasta
  cd gobarber-mobile

  # fazendo download das dependências
  yarn

  # proxy reverso
  adb reverse tcp:3333 tcp:3333

  # inicializando a aplicação
  npx react-native run-android
```

## 📸 Preview

<h3 align="center">
  <img src="https://user-images.githubusercontent.com/11545976/80828909-7c13b400-8bbc-11ea-8abb-a41b741c9df9.gif" height="500" />
</h3>

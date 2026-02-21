# React-Native-Creating-Apps-From-Zero-To-Advanced
This project was developed based on the React Native course by Professor Matheus Fraga, focusing on creating native apps for Android and iOS. It uses technologies like JavaScript, React Native, and Flexbox. The goal is to create high-performance mobile apps with native-like performance and publish them on app stores.
https://sujeitoprogramador.com/ambiente-linux/

https://sujeitoprogramador.com/ambiente-linux/

https://sujeitoprogramador.com/react-native-macos/

https://reactnative.dev/docs/environment-setup

https://docs.expo.dev/

Guias de instalação
- Comando choco:

choco install -y nodejs-lts microsoft-openjdk17


* Atençao na variável ambiente openjdk17:

Caso não encontre a pasta onde está instalada ela também pode ficar instalada na pasta:

C:\Program Files\microsoft\ Aqui deve estar a pasta do openjdk17

Comandos React Native
Comandos React Native


Vamos lá relembrar, para criarmos um novo aplicativo, abrimos o cmd, navegamos pelo cmd até o local que você quer criar esse novo aplicativo e ai rodamos no cmd:

Comando para criar novo projeto:

npx @react-native-community/cli@latest init nomeapp
Após acessar a pasta do seu aplicativo no cmd, para rodar o aplicativo:



npx react-native run-android


- Se estiver usando um Mac:

npx react-native run-ios
* Lembre-se sempre, antes de usar o comando para rodar o aplicativo precisa estar com o Emulador aberto e ai sim rodar o comando.
Comando para criar App (expo)
Comando para criar o App:
npx create-expo-app nomeapp -t
Ali no local onde coloquei nomeapp você coloca o nome do app desejado.



E ai na lista de template só selecionar: (SELECIONE a opção Blank)

      Default - includes tools recommended for most app developers
>>    Blank 
​      Blank (TypeScript) 
      Navigation (TypeScript)
      Blank (Bare)​
Após criar seu projeto lembre-se de acessar a pasta do projeto criado pelo cmd e ai para rodar:

> Usando expo mesmo:

npx expo start
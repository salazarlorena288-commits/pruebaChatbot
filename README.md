### **Pruebas Funcionales Automatizadas a un Chatbot**

🔧 Escenario de prueba: Automatizar las interacciones básicas de un usuario con un Chatbot (la elección es libre, puedes automatizar el bot que quieras).

🤖 **Chatbot: Gemini**

📝 Casos a automatizar:

- ✅ Acceder a la URL: Validar que se acceda al sitio web correcto
- ✅ Encontrar el componente del bot: Validar que el Chatbot se encuentre dentro del sitio web
- ✅ Interactuar con el iframe: Validar que se pueda interactuar con el iframe, dar clic en los botones y verificar que se pueda obtener el nombre del bot
- ✅ Ingresar y mandar un texto: Escribir el texto _Hola_ en el input del chatbot y enviarlo
- ✅ Recibir respuesta: Obtener y la validar que la respuesta sea correcta

**Nota:** La primera vez que se accede al Chatbot este comprueba que no sea un robot, por lo que es posible que en la primera prueba se deba omitir de forma manual este componente ya que debido a que se cambia el nombre del componente no se logro automatizar el check. Las siguientes ejecuciones de realizaran de manera normal.

# Instalación

## ✅ Requisitos Previos

- Node.js

## 🧪 Instalación de Cypress

1. Agregar Cypress como dependencia: `npm install cypress --save-dev`
2. Iniciar proyecto Cypress: `npx cypress open`

## 🧰 Estructura del Proyecto

- ➡️ cypress/
  - ⏩ e2e/
  - ⏩ fixtures/
  - ⏩ support/
- ➡️ cypress.config.js

- **cypress/e2e/**: aquí van tus pruebas (.cy.js o .cy.ts)
- **cypress/fixtures/**: datos de prueba en formato JSON
- **cypress/support/**: configuraciones globales y comandos personalizados
- **cypress.config.js**: archivo de configuración general de Cypress

## Ejecución de Cypress

- Modo interactivo: `npx cypress open`

  Este comando se ejecuta desde la terminal de nuestro proyecto. Abre ventana de Cypress en donde se selecciona la opción e2e, nos abrira la suit de pruebas en donde daremos click a "Login" y se dara inicio la ejecuón de nuestros test.

- Modo headless (CI/CD): `npx cypress run`  
  Este comando se ejecuta desde la terminal de nuestro proyecto. Nos hara la ejecucón de los test en la misma terminal y mostrara los errores (en caso de tenerlos), el porcentaje de aprobación y una imagen referente.

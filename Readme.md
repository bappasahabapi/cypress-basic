### What i do here

- **Test1:** Navigate to url using `cy.visit()` method



--
# 🌱 If you clone the project then just install the dependencies by run

- `git clone https://github.com/bappasahabapi/cypress-basic.git`
- `npm install`
- `npx cypress open`


--

#    T-1 [From scratch]
**🌱 basic set up commands**
-    `npm init -y`
-    `npm install cypress`
-     `npx cypress open` and automatically cypress folder created for testing
-    `npx cypress -v`
-    `npx cypress verify`


--

- [cypress folder structure](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests)
- [cypress configuration](https://docs.cypress.io/guides/references/configuration)
    
    - how to write base url
    - configure e2e testing 
    - configure components testing
    - common configuration for both
    
- `Cypres press enter key`
    

- ` Access Elements `

#    T-2

**Page Object Model**

- `a design principle`keep the objects & methods separate from test script
- efficient reusability
- easier, efficient and faster changes & maintenance
<!--  -->

*Page objects problems*
- Page objects make tests slow 
- page objects are hard to maintain and take away time from actual application development.
- Page objects try to fit multiple cases into a uniform interface, falling back to conditional   logic - a huge anti-pattern in our opinion.

**Alternative to page objects that I call “Application Actions”**

#    T-3

**Read and write files in cypress*
- Read files using `fixture()`
- Read files using `readFile()`
- Write files using `writeFile()`

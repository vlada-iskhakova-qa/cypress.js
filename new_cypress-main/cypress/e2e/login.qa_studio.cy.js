
it('Верный пароль и верный логин', function () { //1
        cy.visit('https://login.qa.studio'); //зашли на сайт

        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
        cy.get('#pass').type('qa_one_love1'); //ввели верный пароль
        cy.get('#loginButton').click(); //нажали на кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверили текст после успешной авторизации
        cy.get('#messageHeader').should('be.visible'); //проверили, что текст виден пользователям
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверили, что виден крестик
    })

    
it('Восстановление пароля', function () { //2
        cy.visit('https://login.qa.studio'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверили цвет кнопки "забыли пароль"
        cy.get('#forgotEmailButton').click(); //нажали на кнопку "забыли пароль"

        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввели логин для восстановления
        cy.get('#restoreEmailButton').click(); //нажали на кнопку "отправить код"
    
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверили текст после восстановления пароля
        cy.get('#messageHeader').should('be.visible'); //проверили, что текст виден пользователям
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверили, что виден крестик
        })
        

it('Верный логин и неверный пароль', function () { //3
        cy.visit('https://login.qa.studio'); //зашли на сайт

        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
        cy.get('#pass').type('qa_one_love123'); //ввели неверный пароль
        cy.get('#loginButton').click(); //нажали на кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверили текст после неуспешной авторизации
        cy.get('#messageHeader').should('be.visible'); //проверили, что текст виден пользователям
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверили, что виден крестик
    })       

    it('Неверный логин и верный пароль', function () { //4
        cy.visit('https://login.qa.studio'); //зашли на сайт

        cy.get('#mail').type('german@dolnikov5.ru'); //ввели неверный логин
        cy.get('#pass').type('qa_one_love1'); //ввели верный пароль
        cy.get('#loginButton').click(); //нажали на кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверили текст после неуспешной авторизации
        cy.get('#messageHeader').should('be.visible'); //проверили, что текст виден пользователям
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверили, что виден крестик
    })       

it('Проверка валидации, в логине есть @', function () { //5
        cy.visit('https://login.qa.studio'); //зашли на сайт

        cy.get('#mail').type('germandolnikov.ru'); //ввели невалидный логин, без @
        cy.get('#pass').type('qa_one_love1'); //ввели верный пароль
        cy.get('#loginButton').click(); //нажали на кнопку войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверили текст после неуспешной авторизации
        cy.get('#messageHeader').should('be.visible'); //проверили, что текст виден пользователям
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверили, что виден крестик
    })       


it('Проверка на приведение к строчным буквам в логине', function () { //6
        cy.visit('https://login.qa.studio'); //зашли на сайт

        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели логин с изменением регистра
        cy.get('#pass').type('qa_one_love1'); //ввели верный пароль
        cy.get('#loginButton').click(); //нажали на кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверили текст после успешной авторизации
        cy.get('#messageHeader').should('be.visible'); //проверили, что текст виден пользователям
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверили, что виден крестик
    })
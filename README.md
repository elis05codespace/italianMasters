# italianMasters

Web app where a user can buy Italian courses/classes paying with PayPal, send a message, send a curriculum, discover teachers and reviews.


1. Clone repo: git clone https://github.com/elis05codespace/italianMasters.git



As for PayPal you need to:
1.a Create a business account in the PayPal developer console(sandbox account).
2.a Create an application using that business account.
3.a Grab the Client ID.
4.a Change the client id at the index.html to the client id of your PayPal app and set the correct currency:

    <script src="https://www.paypal.com/sdk/js?client-id=AaUhKHVcbIcuN3HhaGTKRPfAT-evjXKg6z5sgUpgk6OHNV7YsYCkdu4jQH7wpwVAkVlzRoSPwljNVqSl&currency=EUR"></script>



##Back-end
  
2. Run ```composer install```

 to install the components. 
3. Run ```bin/console lexik:jwt:generate-keypair ```
4. to create a new keypair. 
3. Run bin/console lexik:jwt:generate-keypair to create a new keypair. 
(your keys will land in config/jwt/private.pem and config/jwt/public.pem unless you configured a different path).
4. Import database italianMasters.sql in your phpMyAdmin.
5. In the .env file, check/configure the database connection data (username, password,name of the db and the port).
6. Run ```php -S localhost:8000 -t public ```
7. to start the server in an available port (here we use 8000).


##Front-end

7. Run ```npm install ```
8. to install the components. 
9. In the context folder, check/change the port in the UrlServer.js file (const UrlServer = "http://localhost:8000/";).
10. Run ```npm start ```
11. to start app.



Built with:
HTML5, CSS3, BOOTSTRAP, JAVASCRIPT, REACT.JS, PHP, SYMFONY, DOCTRINE, MYSQL

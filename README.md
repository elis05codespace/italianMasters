# italianMasters

Web app where a user can buy Italian courses/classes paying with PayPal, send a message, send a curriculum, discover teachers and reviews.


1. Clone repo: git clone https://github.com/elis05codespace/italianMasters.git
2. As for PayPal you need to create a business account in the PayPal developer console(sandbox account).
3. Create an application using that business account.
4. Grab the Client ID.
5. Change the client id at the index.html to the client id of your PayPal app and set the correct currency (clientId&currency=EUR):

    <script src="https://www.paypal.com/sdk/js?client-id=HereGoesYourClientId&currency=EUR"></script> 



## Back-end
  
1. Run ```composer install``` to install the components.
2. Run ```bin/console lexik:jwt:generate-keypair ``` to create a new keypair (your keys will land in config/jwt/private.pem and config/jwt/public.pem unless you configured a different path).
3. Import database italianMasters.sql in your phpMyAdmin.
4. In the .env file, check/configure the database connection data (username, password, name of the db and the port).
5. Run ```php -S localhost:8000 -t public ``` to start the server in an available port (here we use 8000).


## Front-end

7. Run ```npm install ``` to install the components. 
8. In the context folder, check/change the port in the UrlServer.js file (const UrlServer = "http://localhost:8000/";).
9. Run ```npm start ```to start app.



## Built with:
HTML5, CSS3, BOOTSTRAP, JAVASCRIPT, REACT.JS, PHP, SYMFONY, DOCTRINE, MYSQL


## Author
elis05codespace

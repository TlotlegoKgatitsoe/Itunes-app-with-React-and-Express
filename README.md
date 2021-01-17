# iTunes API app using React and Express

This application allows the user to search for content on the iTunes Store and Apple Books Store. It allows the user to see the result of the their search and
to add it to favourates for that session only.

It is made using React, Express, Node.js and the [Itunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/).
The app is launched [here]( https://tk-itunes-app.herokuapp.com/ ).

### Installing

The app needs dependencies before it can run locally. You need to install the dependencies for the Express server and then the React, "frontend".

You install the server by typing ``npm install`` on the application's root folder. The React app is in the **frontend** folder. Before you can install the React app you will
need to type ``cd frontend`` in order to go into it's folder. Then you install the React frontend by typing 
``npm install``.


### Running

After installing the React frontend you need to go to the application's root folder. You do this by typing ``cd ../`` in the React frontend folder.
In the root folder, type ``npm start`` run the application's server. It will locally run on ``http://localhost:3001/``.

To run the React frontend you will need to go into it's folder. You do this by typing ``cd frontend``. You run the React frontend, that you have installed, by typing
``npm start``. It will launch the React appp on ``http://localhost:3000/``.

**Please follow all the steps in order to properly install and run the application**


### Buidling

You can only build the React app. This will optimise all of the files and assets for deployment. You do not need to build this application when running locally.
You build the React app by typing ``npm run build`` in it's frontend folder.


### Licensing and Copyright

This application is licensed under the [MIT License](LICENSE)

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

This application is licensed under the MIT License

Copyright (c) 2021 Tlotlego Kgatitsoe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

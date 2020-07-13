const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const Helmet = require( 'helmet' );
const Request = require( 'request' );

// Use Helmet
app.use( Helmet() );

const bodyParser = require( 'body-parser' );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( path.join( __dirname, 'frontend/build' ) ) );
    app.get( '*', ( req, res ) => {
        res.sendFile( path.resolve( __dirname, 'frontend', 'build', 'index.html' ) );
    });
}

// Will be used in the test for my backend server
app.get( '/', ( request, response ) => {
    response.send( 'okay...' );
});

// Gets the data from the Itunes API when React (Frontend) makes a POST request
app.post( '/', ( request, response ) => {
    let URL = ``;
    let body = request.body;

    if ( body.entity === 'all' ) {
        URL = `https://itunes.apple.com/search?term=${ body.term }&limit=200`;
    } else {
        URL = `https://itunes.apple.com/search?term=${ body.term }&entity=${ body.entity }&limit=200`;
    }

    Request( URL, ( error, res, data ) => {
        if ( !error && response.statusCode == 200 ) {
            response.send( data.toString().trim() );
        }
    })
});


app.use(function(err, req, res, next) {
    console.log(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

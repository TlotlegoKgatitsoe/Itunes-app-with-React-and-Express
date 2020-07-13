const expect = require( 'chai' ).expect;
const Request = require( 'request' );

describe( 'Backend test, getting the response from "server.js"', function() {
    it( 'Page data', function( done ) {
        Request( 'http://localhost:3001/', ( error, response, body ) => {
            const EXPECTED_RESPONSE = 'okay...';
            expect( body ).to.equal( EXPECTED_RESPONSE );
            done();
        });
    });
});

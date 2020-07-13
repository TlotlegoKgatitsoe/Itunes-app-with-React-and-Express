const expect = require( 'chai' ).expect;
const Request = require( 'request' );

describe( 'Frontend test, checking page content', function() {
    it( 'Content', function( done ) {
        Request( 'http://localhost:3000/', ( error, response, body ) => {
            const EXPECTED_RESPONSE = '<div id="root"></div>';
            expect( body ).to.include( EXPECTED_RESPONSE );
            done();
        });
    });
});

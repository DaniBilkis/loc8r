var express = require( 'express' );

var router = express.Router();
//var ctrlMain = require( '../controllers/main' );
var ctrlLocations = require( '../controllers/locations' );
var ctrlOthers = require( '../controllers/others' );


/* Location Pages */
router.get( '/', ctrlLocations.homelist );
router.get( '/location', ctrlLocations.locationInfo );
router.get( '/location/review/new', ctrlLocations.addReview );

/* Location Pages */
router.get( '/about', ctrlOthers.about );

module.exports = router;

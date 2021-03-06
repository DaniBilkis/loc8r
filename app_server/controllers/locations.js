/* GET 'home' page */
module.exports.homelist = function(req, res){
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        },{
            name: 'Cafe Hero',
            address: '125 High Street, Reading, RG6 1P',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        },{
            name: 'Burger Queen',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: [ 'Food', 'Premium wifi'],
            distance: '250m'
        }
        ]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res){
    res.render('location-info', {
        title: 'Location info',
        pageHeader: {
            title: 'Starcups'
        },
        sidebar: {
            context: 'Starcups is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m',
            coords: {
                lat: '51.455041',
                long: '-0.9690884'
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            },{
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            },{
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Dani Bilkis',
                rating: 5,
                timestamp: '13 July, 2017',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            },{
                author: 'Yossi Amzaleg',
                rating: 3,
                timestamp: '18 July, 2017',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }

    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res){
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
};




mapboxgl.accessToken = 'pk.eyJ1IjoibWxub3ciLCJhIjoiY2t0dnZwcm1mMmR5YzMycDNrcDZtemRybyJ9.Br-G0LTOB3M6w83Az4XGtQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mlnow/clnc3ppi900b201r74g6u2cjt',
    zoom: 19,
    center: [-122.41847612791308, 37.75233018794981],
});


map.on('load', function () {

    // Add the first polygon layer
    map.addLayer({
        'id': 'vendor_locations',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'vendor-locations-24th.geojson'
        },
        'paint': {
            'circle-color': '#46c134',
            'circle-stroke-width': 0,
            'circle-opacity': 0.8,
            'circle-radius': {
                'base': 5,
                'stops': [
                    [12, 8],
                    [22, 30]
                ]
            },
        },
        'layout': {
            'visibility': 'visible' // Initially, set this layer to be visible
        }
    });

    map.addLayer({
        'id': 'police_locations',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'police-locations-24th.geojson'
        },
        'paint': {
            'circle-color': '#57a4ea',
            'circle-stroke-width': 0,
            'circle-opacity': 0.8,
            'circle-radius': {
                'base': 5,
                'stops': [
                    [12, 8],
                    [22, 30]
                ]
            },
        },
        'layout': {
            'visibility': 'visible' // Initially, set this layer to be visible
        }
    });

    map.addLayer({
        'id': 'dpw_locations',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'dpw-locations-24th.geojson'
        },
        'paint': {
            'circle-color': '#ff8400',
            'circle-stroke-width': 0,
            'circle-opacity': 0.8,
            'circle-radius': {
                'base': 5,
                'stops': [
                    [12, 8],
                    [22, 30]
                ]
            },
        },
        'layout': {
            'visibility': 'visible' // Initially, set this layer to be visible
        }
    });
    
    

    // Vendor locations    
    function updateVendorLayer(selectedDate) {
        map.setFilter('vendor_locations', ['==', 'date', selectedDate]);
    }

    // Event listener for the change event on the dropdown 
    document.getElementById('date').addEventListener('change', function () {
        const selectedDate = this.value;
        updateVendorLayer(selectedDate);
    });


    // Police locations
    function updatePoliceLayer(selectedDate) {
        map.setFilter('police_locations', ['==', 'date', selectedDate]);
    }

    // Event listener for the change event on the dropdown 
    document.getElementById('date').addEventListener('change', function () {
        const selectedDate = this.value;
        updatePoliceLayer(selectedDate);
    });


    // DPW locations
    function updateDpwLayer(selectedDate) {
        map.setFilter('dpw_locations', ['==', 'date', selectedDate]);
    }

    // Event listener for the change event on the dropdown 
    document.getElementById('date').addEventListener('change', function () {
        const selectedDate = this.value;
        updateDpwLayer(selectedDate);
    });


    // Initial setup
    const defaultDate = 'nov27'; // Set the default date
    updateVendorLayer(defaultDate); // Set initial visibility for November 27

});

function toggleLayer(layerId) {
    const visibility = map.getLayoutProperty(layerId, 'visibility');
    if (visibility === 'visible') {
        map.setLayoutProperty(layerId, 'visibility', 'none');
    } else {
        map.setLayoutProperty(layerId, 'visibility', 'visible');
    }
}

// Function to toggle the visibility of the 'vendor_locations' layer
function toggleVendorLayer() {
    toggleLayer('vendor_locations');
}

function togglePoliceLayer() {
    toggleLayer('police_locations');
}

function toggleDpwLayer() {
    toggleLayer('dpw_locations');
}


// Add a popup to display information on hover for point features -- FOR VENDOR LOCATIONS
map.on('click', 'vendor_locations', function (e) {
    const feature = e.features[0];

    // Extract the properties you want to display in the popup
    const Time = feature.properties["Time"];
    const Quote = feature.properties["Quote"];

    // Get the coordinates of the point feature
    const coordinates = feature.geometry.coordinates.slice();

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(
            '<p><strong>Time</strong>: ' + Time +
            '<p><strong>Quote</strong>: ' + Quote
        )
        .addTo(map);
});

map.on('mouseenter', 'vendor_locations', function () {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'vendor_locations', function () {
    map.getCanvas().style.cursor = '';
});


// Add a popup to display information on hover for point features -- FOR POLICE LOCATIONS
map.on('click', 'police_locations', function (e) {
    const feature = e.features[0];

    // Extract the properties you want to display in the popup
    const Time = feature.properties["Time"];

    // Get the coordinates of the point feature
    const coordinates = feature.geometry.coordinates.slice();

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(
            '<p><strong>Police time</strong>: ' + Time
        )
        .addTo(map);
});

map.on('mouseenter', 'police_locations', function () {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'police_locations', function () {
    map.getCanvas().style.cursor = '';
});


// Add a popup to display information on hover for point features -- FOR DPW LOCATIONS
map.on('click', 'dpw_locations', function (e) {
    const feature = e.features[0];

    // Extract the properties you want to display in the popup
    const Time = feature.properties["Time"];

    // Get the coordinates of the point feature
    const coordinates = feature.geometry.coordinates.slice();

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(
            '<p><strong>DPW time</strong>: ' + Time
        )
        .addTo(map);
});

map.on('mouseenter', 'dpw_locations', function () {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'dpw_locations', function () {
    map.getCanvas().style.cursor = '';
});
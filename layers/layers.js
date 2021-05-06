var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_WineRegions_2 = new ol.format.GeoJSON();
var features_WineRegions_2 = format_WineRegions_2.readFeatures(json_WineRegions_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WineRegions_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WineRegions_2.addFeatures(features_WineRegions_2);
var lyr_WineRegions_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WineRegions_2, 
                style: style_WineRegions_2,
                interactive: true,
    title: 'Wine Regions<br />\
    <img src="styles/legend/WineRegions_2_0.png" /> Bordeaux<br />\
    <img src="styles/legend/WineRegions_2_1.png" /> Burgundy<br />\
    <img src="styles/legend/WineRegions_2_2.png" /> Central Valley<br />\
    <img src="styles/legend/WineRegions_2_3.png" /> Champagne<br />\
    <img src="styles/legend/WineRegions_2_4.png" /> Columbia Valley<br />\
    <img src="styles/legend/WineRegions_2_5.png" /> Finger Lakes<br />\
    <img src="styles/legend/WineRegions_2_6.png" /> Languedoc - Rousillon<br />\
    <img src="styles/legend/WineRegions_2_7.png" /> Marlborough<br />\
    <img src="styles/legend/WineRegions_2_8.png" /> Napa<br />\
    <img src="styles/legend/WineRegions_2_9.png" /> Provence<br />\
    <img src="styles/legend/WineRegions_2_10.png" /> Rhone Valley<br />\
    <img src="styles/legend/WineRegions_2_11.png" /> Rioja<br />\
    <img src="styles/legend/WineRegions_2_12.png" /> Sicily<br />\
    <img src="styles/legend/WineRegions_2_13.png" /> Sonoma<br />\
    <img src="styles/legend/WineRegions_2_14.png" /> Tuscany<br />\
    <img src="styles/legend/WineRegions_2_15.png" /> Valle de Guadalupe<br />\
    <img src="styles/legend/WineRegions_2_16.png" /> Willamette Valley<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_WineRegions_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleRoad_1,lyr_WineRegions_2];
lyr_WineRegions_2.set('fieldAliases', {'Region': 'Region', 'Country': 'Country', 'Climate': 'Climate', 'GDD (50F)': 'GDD (50F)', 'Winkler': 'Winkler', 'MAR (in)': 'MAR (in)', 'Cultivars': 'Cultivars', });
lyr_WineRegions_2.set('fieldImages', {'Region': 'TextEdit', 'Country': 'TextEdit', 'Climate': 'TextEdit', 'GDD (50F)': 'TextEdit', 'Winkler': 'TextEdit', 'MAR (in)': 'TextEdit', 'Cultivars': 'TextEdit', });
lyr_WineRegions_2.set('fieldLabels', {'Region': 'inline label', 'Country': 'inline label', 'Climate': 'header label', 'GDD (50F)': 'header label', 'Winkler': 'header label', 'MAR (in)': 'header label', 'Cultivars': 'header label', });
lyr_WineRegions_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
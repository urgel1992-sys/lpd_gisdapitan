var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DapitanCityBound_1 = new ol.format.GeoJSON();
var features_DapitanCityBound_1 = format_DapitanCityBound_1.readFeatures(json_DapitanCityBound_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DapitanCityBound_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DapitanCityBound_1.addFeatures(features_DapitanCityBound_1);
var lyr_DapitanCityBound_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DapitanCityBound_1, 
                style: style_DapitanCityBound_1,
                popuplayertitle: 'DapitanCityBound',
                interactive: true,
                title: '<img src="styles/legend/DapitanCityBound_1.png" /> DapitanCityBound'
            });
var format_DapBRGYsubs_2 = new ol.format.GeoJSON();
var features_DapBRGYsubs_2 = format_DapBRGYsubs_2.readFeatures(json_DapBRGYsubs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DapBRGYsubs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DapBRGYsubs_2.addFeatures(features_DapBRGYsubs_2);
var lyr_DapBRGYsubs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DapBRGYsubs_2, 
                style: style_DapBRGYsubs_2,
                popuplayertitle: 'DapBRGYsubs',
                interactive: true,
                title: '<img src="styles/legend/DapBRGYsubs_2.png" /> DapBRGYsubs'
            });
var format_OWAONBOUNDARY_3 = new ol.format.GeoJSON();
var features_OWAONBOUNDARY_3 = format_OWAONBOUNDARY_3.readFeatures(json_OWAONBOUNDARY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OWAONBOUNDARY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OWAONBOUNDARY_3.addFeatures(features_OWAONBOUNDARY_3);
var lyr_OWAONBOUNDARY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OWAONBOUNDARY_3, 
                style: style_OWAONBOUNDARY_3,
                popuplayertitle: 'OWAONBOUNDARY',
                interactive: true,
                title: '<img src="styles/legend/OWAONBOUNDARY_3.png" /> OWAONBOUNDARY'
            });
var format_DapBRGYsubsBound_4 = new ol.format.GeoJSON();
var features_DapBRGYsubsBound_4 = format_DapBRGYsubsBound_4.readFeatures(json_DapBRGYsubsBound_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DapBRGYsubsBound_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DapBRGYsubsBound_4.addFeatures(features_DapBRGYsubsBound_4);
var lyr_DapBRGYsubsBound_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DapBRGYsubsBound_4, 
                style: style_DapBRGYsubsBound_4,
                popuplayertitle: 'DapBRGYsubsBound',
                interactive: true,
                title: '<img src="styles/legend/DapBRGYsubsBound_4.png" /> DapBRGYsubsBound'
            });
var format_LARAYANBOUNDARY_5 = new ol.format.GeoJSON();
var features_LARAYANBOUNDARY_5 = format_LARAYANBOUNDARY_5.readFeatures(json_LARAYANBOUNDARY_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LARAYANBOUNDARY_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LARAYANBOUNDARY_5.addFeatures(features_LARAYANBOUNDARY_5);
var lyr_LARAYANBOUNDARY_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LARAYANBOUNDARY_5, 
                style: style_LARAYANBOUNDARY_5,
                popuplayertitle: 'LARAYANBOUNDARY',
                interactive: true,
                title: '<img src="styles/legend/LARAYANBOUNDARY_5.png" /> LARAYANBOUNDARY'
            });
var format_LPD_lgudapitan_6 = new ol.format.GeoJSON();
var features_LPD_lgudapitan_6 = format_LPD_lgudapitan_6.readFeatures(json_LPD_lgudapitan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LPD_lgudapitan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LPD_lgudapitan_6.addFeatures(features_LPD_lgudapitan_6);
var lyr_LPD_lgudapitan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LPD_lgudapitan_6, 
                style: style_LPD_lgudapitan_6,
                popuplayertitle: 'LPD_lgudapitan',
                interactive: true,
    title: 'LPD_lgudapitan<br />\
    <img src="styles/legend/LPD_lgudapitan_6_0.png" /> Fully COMPLIANT<br />\
    <img src="styles/legend/LPD_lgudapitan_6_1.png" /> Operating without PERMIT<br />\
    <img src="styles/legend/LPD_lgudapitan_6_2.png" /> Pending COMPLIANCE<br />' });
var group_googleresources = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                fold: 'open',
                                title: 'google-resources'});

lyr_OpenStreetMap_0.setVisible(true);lyr_DapitanCityBound_1.setVisible(true);lyr_DapBRGYsubs_2.setVisible(true);lyr_OWAONBOUNDARY_3.setVisible(true);lyr_DapBRGYsubsBound_4.setVisible(true);lyr_LARAYANBOUNDARY_5.setVisible(true);lyr_LPD_lgudapitan_6.setVisible(true);
var layersList = [group_googleresources,lyr_DapitanCityBound_1,lyr_DapBRGYsubs_2,lyr_OWAONBOUNDARY_3,lyr_DapBRGYsubsBound_4,lyr_LARAYANBOUNDARY_5,lyr_LPD_lgudapitan_6];
lyr_DapitanCityBound_1.set('fieldAliases', {});
lyr_DapBRGYsubs_2.set('fieldAliases', {'fid': 'fid', });
lyr_OWAONBOUNDARY_3.set('fieldAliases', {});
lyr_DapBRGYsubsBound_4.set('fieldAliases', {'fid': 'fid', });
lyr_LARAYANBOUNDARY_5.set('fieldAliases', {});
lyr_LPD_lgudapitan_6.set('fieldAliases', {'username': 'username', 'deviceid': 'deviceid', 'Barangay': 'Barangay', 'BIN': 'BIN', 'Owners Name': 'Owners Name', 'Business Name': 'Business Name', 'Location': 'Location', '_Location_latitude': '_Location_latitude', '_Location_longitude': '_Location_longitude', '_Location_altitude': '_Location_altitude', '_Location_precision': '_Location_precision', 'Area': 'Area', 'Line of Business': 'Line of Business', 'Status': 'Status', 'Photo 1': 'Photo 1', 'Photo 1_URL': 'Photo 1_URL', 'Photo 2': 'Photo 2', 'Photo 2_URL': 'Photo 2_URL', 'start': 'start', 'end': 'end', 'BIN Number': 'BIN Number', 'Trade Name': 'Trade Name', 'Year': 'Year', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_validation_status': '_validation_status', '_notes': '_notes', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', 'meta/rootUuid': 'meta/rootUuid', '_index': '_index', });
lyr_DapitanCityBound_1.set('fieldImages', {});
lyr_DapBRGYsubs_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_OWAONBOUNDARY_3.set('fieldImages', {});
lyr_DapBRGYsubsBound_4.set('fieldImages', {'fid': 'TextEdit', });
lyr_LARAYANBOUNDARY_5.set('fieldImages', {});
lyr_LPD_lgudapitan_6.set('fieldImages', {'username': 'TextEdit', 'deviceid': 'TextEdit', 'Barangay': 'TextEdit', 'BIN': 'TextEdit', 'Owners Name': 'TextEdit', 'Business Name': 'TextEdit', 'Location': 'TextEdit', '_Location_latitude': 'TextEdit', '_Location_longitude': 'TextEdit', '_Location_altitude': 'TextEdit', '_Location_precision': 'TextEdit', 'Area': 'TextEdit', 'Line of Business': 'TextEdit', 'Status': 'TextEdit', 'Photo 1': 'ExternalResource', 'Photo 1_URL': 'ExternalResource', 'Photo 2': 'ExternalResource', 'Photo 2_URL': 'ExternalResource', 'start': 'DateTime', 'end': 'DateTime', 'BIN Number': 'Range', 'Trade Name': 'TextEdit', 'Year': 'DateTime', '_id': 'Range', '_uuid': 'TextEdit', '_submission_time': 'DateTime', '_validation_status': 'TextEdit', '_notes': 'TextEdit', '_status': 'TextEdit', '_submitted_by': 'TextEdit', '__version__': 'TextEdit', '_tags': 'TextEdit', 'meta/rootUuid': 'TextEdit', '_index': 'Range', });
lyr_DapitanCityBound_1.set('fieldLabels', {});
lyr_DapBRGYsubs_2.set('fieldLabels', {'fid': 'no label', });
lyr_OWAONBOUNDARY_3.set('fieldLabels', {});
lyr_DapBRGYsubsBound_4.set('fieldLabels', {'fid': 'no label', });
lyr_LARAYANBOUNDARY_5.set('fieldLabels', {});
lyr_LPD_lgudapitan_6.set('fieldLabels', {'username': 'hidden field', 'deviceid': 'hidden field', 'Barangay': 'inline label - visible with data', 'BIN': 'inline label - visible with data', 'Owners Name': 'hidden field', 'Business Name': 'inline label - always visible', 'Location': 'hidden field', '_Location_latitude': 'hidden field', '_Location_longitude': 'hidden field', '_Location_altitude': 'hidden field', '_Location_precision': 'hidden field', 'Area': 'hidden field', 'Line of Business': 'hidden field', 'Status': 'inline label - always visible', 'Photo 1': 'no label', 'Photo 1_URL': 'inline label - always visible', 'Photo 2': 'no label', 'Photo 2_URL': 'inline label - visible with data', 'start': 'hidden field', 'end': 'hidden field', 'BIN Number': 'hidden field', 'Trade Name': 'hidden field', 'Year': 'hidden field', '_id': 'hidden field', '_uuid': 'hidden field', '_submission_time': 'hidden field', '_validation_status': 'hidden field', '_notes': 'hidden field', '_status': 'hidden field', '_submitted_by': 'hidden field', '__version__': 'hidden field', '_tags': 'hidden field', 'meta/rootUuid': 'hidden field', '_index': 'hidden field', });
lyr_LPD_lgudapitan_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
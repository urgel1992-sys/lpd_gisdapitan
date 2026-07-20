var size = 0;
var placement = 'point';
function categories_LPD_lgudapitan_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Fully COMPLIANT':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(51,160,44,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Operating without PERMIT':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(233,31,18,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Pending COMPLIANCE':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(186,152,14,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_LPD_lgudapitan_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Status");
    var labelFont = "13.0px \'Noto Sans Black\', sans-serif";
    var labelFill = "#485248";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("Business Name") !== null) {
        labelText = String(feature.get("Business Name"));
    }
    
    var style = categories_LPD_lgudapitan_6(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};

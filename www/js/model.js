var capturePhoto = (function(app) {
    "use strict";

    app.Models.OSMPicture = Backbone.Model.extend({
        schema: {
            data: {type: 'Text'},
            osmid: {
                type: OsmFeatureSelector,
                mapConfig: app.global
            }
        }
    });

    app.models.pic = new app.Models.OSMPicture();

    return app;
})(capturePhoto);
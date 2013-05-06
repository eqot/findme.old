/*global define */
define([
    'jquery',
    'backbone',
    'underscore'
], function ($, Backbone, _) {
    'use strict';

    var MapView = Backbone.View.extend({
        el: $('#view'),

        initialize: function (model, id) {
            // console.log('MapView');

            console.log(id);
        }
    });

    return MapView;
});

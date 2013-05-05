/*global define */
define([
    'jquery',
    'backbone',
    'underscore'
], function ($, Backbone, _) {
    'use strict';

    var Map = Backbone.Model.extend({
        defaults: {
        },

        urlRoot: '/map',

        initialize: function () {
            // console.log('Map');
        },

        parse: function (res) {
            res.id = res._id;
            return res;
        }
    });

    return Map;
});

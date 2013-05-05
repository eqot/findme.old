/*global define */
define([
    'jquery',
    'backbone',
    'underscore'
], function ($, Backbone, _) {
    'use strict';

    var TopView = Backbone.View.extend({
        el: $('#view'),

        initialize: function () {
            console.log('TopView');
        }
    });

    return TopView;
});

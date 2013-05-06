/*global define */
define([
    'jquery',
    'backbone',
    'underscore',
    'models/map',
    'text!templates/top.html',
    'text!templates/link.html'
], function ($, Backbone, _, Map, TopViewTemplate, LinkTemplate) {
    'use strict';

    var TopView = Backbone.View.extend({
        el: $('#view'),

        events: {
            'click #create': 'createMap'
        },

        template: _.template(TopViewTemplate),
        linkTemplate: _.template(LinkTemplate),

        map: null,

        initialize: function () {
            // console.log('TopView');

            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        },

        createMap: function () {
            // console.log('createMap()');

            this.map = new Map();

            this.listenTo(this.map, 'change', this.onCreated);

            this.map.save();
        },

        onCreated: function (map) {
            // console.log('onCreated');
            // console.log(map);

            var url = location.href + '#map/' + map.get('id');
            // console.log(url);

            $('#link').html(this.linkTemplate({url: url}));

            // Backbone.history.navigate('map/' + map.get('id'), true);
        }
    });

    return TopView;
});

'use strict';

/**
 * join service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::join.join');

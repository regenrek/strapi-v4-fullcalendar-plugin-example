'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('tv-guide-cal')
      .service('myService')
      .getWelcomeMessage();
  },
};

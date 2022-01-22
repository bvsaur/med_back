"use strict";

const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findPaths(ctx) {
    const result = await strapi
      .query("post")
      .model.fetchAll({ columns: ["slug"] });
    ctx.send(result);
  },
};

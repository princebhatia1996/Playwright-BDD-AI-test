module.exports = {
  default: {
    require: [
      "ts-node/register",
      "test/steps/**/*.ts",
      "test/support/hooks.ts",
      "test/support/world.ts",
    ],
    format: ["progress", "json:reports/cucumber_report.json"],
    paths: ["test/features/**/*.feature"],
  },
};

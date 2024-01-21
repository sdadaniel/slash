const { generateRollupConfig } = require('@toss/rollup-config');

console.log(
  generateRollupConfig({
    packageDir: __dirname,
  })
);

module.exports = generateRollupConfig({
  packageDir: __dirname,
});


let styles;

(async () => {
  const module = await import('./index.mjs');
  styles = module;
  require('./fontLoader.js').default();
})();

module.exports = new Proxy({}, {
  get: function(target, prop) {
    return (...args) => {
      if (styles && styles[prop]) {
        return styles[prop](...args);
      }
      throw new Error(`Style ${prop} not loaded yet.`);
    };
  }
});

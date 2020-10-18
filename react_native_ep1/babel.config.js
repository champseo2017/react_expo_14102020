module.exports = function(api) {
  api.cache(true);
  if (process.env.NODE_ENV === 'production' || process.env.BABEL_ENV === 'production') {
    return {
      "presets": ["babel-preset-expo"],
      "plugins": [ ["transform-remove-console", { "exclude": [ "error", "warn"] }]]
    }
  } else {
    return {
      "presets": ["babel-preset-expo"],
    }
  }
  // return {
  //   presets: ['babel-preset-expo'],
  // };
};
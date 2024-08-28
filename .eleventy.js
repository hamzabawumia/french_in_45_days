module.exports = function(eleventyConfig) {
  // Define input and output directories
  eleventyConfig.addPassthroughCopy("learn_french_in_45_days/_includes"); // Optional: Copy static assets, if any

  // Return directory settings
  return {
    dir: {
      input: "learn_french_in_45_days", // Source directory
      output: "learn_french_in_45_days/_site" // Build output directory
    }
  };
};

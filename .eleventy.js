module.exports = function(eleventyConfig) {
  // Define input and output directories
  eleventyConfig.addPassthroughCopy("french_in_45_days/_includes"); // This is important for git-pages to copy the static files

  eleventyConfig.setTemplateFormats(["njk", "html", "md"]);
  // Return directory settings
  return {
    dir: {
      input: "french_in_45_days", // Source directory
      output: "french_in_45_days/_site", // Build output directory
      includes: "_includes", // Directory for includes (partials, templates, etc.)
    }
  };
};

module.exports = function(eleventyConfig) {
  // Define input and output directories
  eleventyConfig.addPassthroughCopy("learn_french_in_45_days/_includes"); // Optional: Copy static assets, if any
  
  // Add global data
  eleventyConfig.addGlobalData('baseUrl', '/');
  // now i can specigy the baseUrl in my code as {{ baseUrl }}
  
  // Add other configurations if needed

  // Return directory settings
  return {
    dir: {
      input: "learn_french_in_45_days", // Source directory
      output: "learn_french_in_45_days/_site" // Build output directory
    }
  };
};

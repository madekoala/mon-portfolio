const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['../components/Footer'] = path.resolve(__dirname, 'src/components/Footer.js');
    config.resolve.alias['../components/Clientlayout'] = path.resolve(__dirname, 'src/components/Clientlayout.js');
    
    return config;
  },
};
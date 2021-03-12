// const es2015 = require("@babel/preset-es2015");

// const presetReact = require("@babel/preset-react");
// require("@babel/register")({
//     presets: [es2015, presetReact],
//     plugins: ["@babel/plugin-syntax-dynamic-import"]
// });

// const router = require('./src/App');
// const Sitemap = require('react-router-sitemap');

// const generateSitemap = () => {
//     return (
//         new Sitemap(router()).build("https://www.dubookx.com/")
//             .save('/public/sitemap.xml')
//     );
// }

// generateSitemap();

// require("babel-register")({
//     presets: ["es2015", "react"]
// });

// const router = require("./src/App").default;
// const Sitemap = require("react-router-sitemap").default;

// function generateSitemap() {
//     return (
//         new Sitemap(router)
//             .build("https://www.dubookx.com")
//             .save("./public/sitemap.xml")
//     );
// }

// generateSitemap();

require('@babel/register')({
    ...require('./babel.config.js')
})

require.extensions['.css'] = function () {
    return null;
};

require.extensions['.png'] = function () {
    return null;
};

require.extensions['.svg'] = function () {
    return null;
};

require.extensions['.jpg'] = function () {
    return null;
};

const Sitemap = require('react-router-sitemap').default;
const router = require('./src/App').default;

const filterConfig = {
    isValid: false,
    rules: [
        /\/auth/,
        /\*/,
    ],
};

const paramsConfig = {

};

(
    new Sitemap(router)
        .filterPaths(filterConfig)
        .applyParams(paramsConfig)
        .build('http://dubookx.com', { limitCountPaths: 5000 })
        .save('./sitemap.xml', '/static/')
);
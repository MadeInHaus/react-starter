const req = require.context('.', true, /\.jsx$/);

req.keys().forEach(key => {
    const filename = key.match(/[a-zA-Z]+.jsx$/)[0];
    const componentName = filename.split('.')[0];
    module.exports[componentName] = req(key).default;
});

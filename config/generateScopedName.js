const incstr = require('incstr');
const loaderUtils = require('loader-utils');
const path = require('path');
const createUniqueIdGenerator = () => {
    const index = {};
    const createGenerator = () =>
        incstr.idGenerator({
            // Removed "d" letter to avoid accidental "ad" construct.
            // @see https://medium.com/@mbrevda/just-make-sure-ad-isnt-being-used-as-a-class-name-prefix-or-you-might-suffer-the-wrath-of-the-558d65502793
            alphabet: 'abcefghijklmnopqrstuvwxyz0123456789',
        });
    const rootGenerator = createGenerator();
    const generateClassSafeId = generator => {
        // Class name cannot start with a number.
        let nextId;
        do {
            nextId = generator();
        } while (/^[0-9]/.test(nextId));
        return nextId;
    };

    return name => {
        if (index[name]) {
            return index[name];
        }
        index[name] = generateClassSafeId(rootGenerator);
        return index[name];
    };
};

const uniqueIdGenerator = createUniqueIdGenerator();

const generateScopedName = (
    loaderContext,
    localIdentName,
    exportName,
    options
) => {
    if (!options.context) {
        if (loaderContext.rootContext) {
            options.context = loaderContext.rootContext;
        } else if (
            loaderContext.options &&
            typeof loaderContext.options.context === 'string'
        ) {
            options.context = loaderContext.options.context;
        } else {
            options.context = loaderContext.context;
        }
    }
    const request = path.relative(options.context, loaderContext.resourcePath);
    options.content = options.hashPrefix + request + '+' + exportName;
    const hash = loaderUtils.interpolateName(
        loaderContext,
        localIdentName,
        options
    );
    const componentName = loaderContext.resourcePath.split('/').slice(-2, -1);
    const minimize = loaderContext.query.minimize;
    const uid = uniqueIdGenerator(hash, exportName);
    return minimize ? uid : componentName + '_' + exportName + '_' + uid;
};

module.exports = generateScopedName;

import path from 'path';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { pathAlias } from '../build/pathAlias/pathAlias';
export default ({ config }) => {
    var _a;
    if (!config) {
        return {};
    }
    const paths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };
    if (!config.resolve) {
        config.resolve = {
            modules: [],
            extensions: [],
            alias: []
        };
    }
    if (!config.resolve.modules) {
        config.resolve.modules = [];
    }
    if (!config.resolve.extensions) {
        config.resolve.extensions = [];
    }
    if (!config.resolve.alias) {
        config.resolve.alias = {};
    }
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias = Object.assign(Object.assign({}, config.resolve.alias), pathAlias(paths.src));
    if (!config.module) {
        config.module = {
            rules: []
        };
    }
    if (!config.module.rules) {
        config.module.rules = [];
    }
    config.module.rules = config.module.rules.map((rule) => {
        if (/svg/.test(rule.test)) {
            return Object.assign(Object.assign({}, rule), { exclude: /\.svg$/i });
        }
        return rule;
    });
    config.module.rules.push({
        test: /\.svg$/i,
        use: ['@svgr/webpack']
    });
    config.module.rules.push(buildCssLoaders(true));
    (_a = config === null || config === void 0 ? void 0 : config.plugins) === null || _a === void 0 ? void 0 : _a.push(new DefinePlugin({
        __IS_DEV__: true
    }));
    return config;
};

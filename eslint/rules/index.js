import noDefaultErrorType from './no-default-error-type';
const rules = {
    "no-default-error-type": noDefaultErrorType,
};
const plugin = {
    meta: {
        name: 'eslint-rules-plugin',
        version: '1.0.0',
    },
    rules: {
        ...rules
    },
};
export default plugin;

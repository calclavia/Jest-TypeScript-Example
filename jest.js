/**
 * Jest Preprocessor for TypeScript
 */
const tsc = require('typescript');

function tsProcessor(src, path) {
  if (path.endsWith('.ts') || path.endsWith('.tsx')) {
    return tsc.transpile(
      src,
      {
        module: tsc.ModuleKind.CommonJS,
        jsx: tsc.JsxEmit.React,
      },
      path,
      []
    );
  }
  return src;
}

module.exports = {
  process: tsProcessor
};
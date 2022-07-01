import { Plugin, ResolvedConfig } from 'vite';
import  parse  from './src/preprocessor';

const vitePluginIfDef = (userOptions = {}) => {
  let data;
  let filePath;
  let  option;
  return {
    name: 'vitePluginIfdefCompile',
    enforce: 'pre',
    configResolved(resolvedConfig) {
      data = resolvedConfig['ifdef-define'];
      option = resolvedConfig['ifdef-option']
    },
    resolveId(source){
      filePath=source
    },
    transform(code, id) {
      let verboseFlag = "verbose";
      verbose = option[verboseFlag]
      
      let tripleSlashFlag = "ifdef-triple-slash";
      let tripleSlash = option[tripleSlashFlag];
   
      let fillWithBlanksFlag = "ifdef-fill-with-blanks";
      let fillWithBlanks = option[fillWithBlanksFlag];
     
      let uncommentPrefixFlag = "ifdef-uncomment-prefix";
      let uncommentPrefix = option[uncommentPrefixFlag];
  
      userOptions=data 
      return parse(code, userOptions,verbose, tripleSlash, filePath, fillWithBlanks, uncommentPrefix);
    },
  };
};
export default vitePluginIfDef;

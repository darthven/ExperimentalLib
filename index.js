"use strict";function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(e){if(cachedSetTimeout===setTimeout)return setTimeout(e,0);if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout)return cachedSetTimeout=setTimeout,setTimeout(e,0);try{return cachedSetTimeout(e,0)}catch(t){try{return cachedSetTimeout.call(null,e,0)}catch(t){return cachedSetTimeout.call(this,e,0)}}}function runClearTimeout(e){if(cachedClearTimeout===clearTimeout)return clearTimeout(e);if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout)return cachedClearTimeout=clearTimeout,clearTimeout(e);try{return cachedClearTimeout(e)}catch(t){try{return cachedClearTimeout.call(null,e)}catch(t){return cachedClearTimeout.call(this,e)}}}function cleanUpNextTick(){draining&&currentQueue&&(draining=!1,currentQueue.length?queue=currentQueue.concat(queue):queueIndex=-1,queue.length&&drainQueue())}function drainQueue(){if(!draining){var e=runTimeout(cleanUpNextTick);draining=!0;for(var t=queue.length;t;){for(currentQueue=queue,queue=[];++queueIndex<t;)currentQueue&&currentQueue[queueIndex].run();queueIndex=-1,t=queue.length}currentQueue=null,draining=!1,runClearTimeout(e)}}function isArray(e){return Array.isArray(e)}function isNull(e){return null===e}function isNullOrUndefined(e){return null==e}function isString(e){return"string"==typeof e}function isUndefined(e){return void 0===e}function isObject(e){return"object"==typeof e&&null!==e}function isFunction(e){return"function"==typeof e}function __extends(e,t){function n(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}Object.defineProperty(exports,"__esModule",{value:!0});var cachedSetTimeout=defaultSetTimout,cachedClearTimeout=defaultClearTimeout;"function"==typeof global.setTimeout&&(cachedSetTimeout=setTimeout),"function"==typeof global.clearTimeout&&(cachedClearTimeout=clearTimeout);var queue=[],draining=!1,currentQueue,queueIndex=-1,performance=global.performance||{},performanceNow=performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow||function(){return(new Date).getTime()},inherits;inherits="function"==typeof Object.create?function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e};var log4js=require("log4js"),LOGGER=log4js.getLogger(),ComponentLifecycle=function(){function e(e){this.componentId=e,this.setDefaultLifecycleMethods()}return e.prototype.setDefaultLifecycleMethods=function(){var e=this;this.preInitMethod=function(){return LOGGER.info('[Component Lifecycle]: Default pre-init-method is called to the component with id "'+e.componentId+'"')},this.postInitMethod=function(){return LOGGER.info('[Component Lifecycle]: Default post-init-method is called to the component with id "'+e.componentId+'"')},this.beforePropertiesWillBeSetMethod=function(){return LOGGER.info('[Component Lifecycle]: Default before-properties-will-be-set-method is called to the component with id "'+e.componentId+'"')},this.afterPropertiesWereSetMethod=function(){return LOGGER.info('[Component Lifecycle]: Default after-properties-were-set-method is called to the component with id "'+e.componentId+'"')},this.preDestroyMethod=function(){return LOGGER.info('[Component Lifecycle]: Default pre-destroy-method is called to the component with id "'+e.componentId+'"')},this.postDestroyMethod=function(){return LOGGER.info('[Component Lifecycle]: Default post-destroy-method is called to the component with id "'+e.componentId+'"')}},e.prototype.getComponentId=function(){return this.componentId},e.prototype.setComponentId=function(e){this.componentId=e},e.prototype.callPreInitMethod=function(){LOGGER.debug('[Component Lifecycle]: Before Component with id "'+this.getComponentId()+'" will be initialized'),this.preInitMethod()},e.prototype.setPreInitMethod=function(e){this.preInitMethod=e},e.prototype.callPostInitMethod=function(){LOGGER.debug('[Component Lifecycle]: After Component with id "'+this.getComponentId()+'" was initialized'),this.postInitMethod()},e.prototype.setPostInitMethod=function(e){this.postInitMethod=e},e.prototype.callBeforePropertiesWillBeSetMethod=function(){LOGGER.debug('[Component Lifecycle]: Before Component with id "'+this.getComponentId()+'" will receive its properties'),this.beforePropertiesWillBeSetMethod()},e.prototype.setBeforePropertiesWillBeSetMethod=function(e){this.beforePropertiesWillBeSetMethod=e},e.prototype.callAfterPropertiesWereSetMethod=function(){LOGGER.debug('[Component Lifecycle]: After Component with id "'+this.getComponentId()+'" received its properties'),this.afterPropertiesWereSetMethod()},e.prototype.setAfterPropertiesWereSetMethod=function(e){this.afterPropertiesWereSetMethod=e},e.prototype.callPreDestroyMethod=function(){LOGGER.debug('[Component Lifecycle]: Before Component with id "'+this.getComponentId()+'" will be destroyed'),this.preDestroyMethod()},e.prototype.setPreDestroyMethod=function(e){this.preDestroyMethod=e},e.prototype.callPostDestroyMethod=function(){LOGGER.debug('[Component Lifecycle]: After Component with id "'+this.getComponentId()+'" was destroyed'),this.postDestroyMethod()},e.prototype.setPostDestroyMethod=function(e){this.postDestroyMethod=e},e.prototype.setLifecycleMethods=function(e){var t=this;Object.keys(e).forEach(function(n){t[n]&&!isNull(e[n])&&(t[n]=e[n])})},e}(),extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},LifecycleNotFoundError=function(e){function t(t){var n=e.call(this,'Lifecycle of the Component with id "'+t+'" cannot be found in context')||this;return n.name="LifecycleNotFoundError",n}return __extends(t,e),t}(Error),ContextLifecycle=function(){function e(){this.componentLifecycles=new Map}return e.prototype.getComponentLifecycles=function(){return this.componentLifecycles},e.prototype.getLifecycleByComponentId=function(e){var t=this.componentLifecycles.get(e);if(!t)throw new LifecycleNotFoundError(e);return t},e}(),Component=function(){function e(e,t,n,o){this.id=e||null,this.componentName=t||null,this.classPath=n||null,this.scope=o||0}return e.prototype.getId=function(){return this.id},e.prototype.getComponentName=function(){return this.componentName},e.prototype.getClassPath=function(){return this.classPath},e.prototype.getScope=function(){return this.scope},e.prototype.getEntityInstance=function(){return this.entityInstance},e.prototype.setEntityInstance=function(e){this.entityInstance=e},e}(),ComponentNotFoundError=function(e){function t(t){var n=e.call(this,'Component with id "'+t+'" cannot be found in context')||this;return n.name="ComponentNotFoundError",n}return __extends(t,e),t}(Error),_=require("lodash"),Context=function(){function e(){this.contextLifecycle=new ContextLifecycle,this.components=new Map}return e.prototype.getContextLifecycle=function(){return this.contextLifecycle},e.prototype.getComponents=function(){return this.components},e.prototype.removeComponentFromContext=function(e){return this.components.delete(e)},e.prototype.close=function(){var e=this;LOGGER.info("[Context]: Closing current context..."),this.components.forEach(function(t){var n=e.contextLifecycle.getComponentLifecycles().get(t.getId());n.callPreDestroyMethod(),e.removeComponentFromContext(t.getId()),n.callPostDestroyMethod()}),LOGGER.info("[Context]: Context is closed..."),this.components.clear()},e.prototype.registerShutdownHook=function(){var e=this;process.on("exit",function(){e.close()}),process.on("SIGINT",function(){e.close()})},e.prototype.getComponentEntityInstanceById=function(e){var t=this.components.get(e);if(!t)throw new ComponentNotFoundError(e);return 1===t.getScope()?_.cloneDeep(t.getEntityInstance()):t.getEntityInstance()},e.prototype.updateContext=function(){this.registerComponentsInContext()},e}(),LifecycleValidator=function(){function e(){}return e.lifecycleExistsInConfiguration=function(e){return!isUndefined(e)&&!isUndefined(e.lifecycle)&&isObject(e.lifecycle)},e.validateMethod=function(e){return!isUndefined(e)&&isFunction(e)},e.getLifecycleMethodsDesriptor=function(t,n){var o={};return Object.keys(n.lifecycle).forEach(function(i){var r=t[n.lifecycle[i]];o[i]=e.validateMethod(r)?r:null}),o},e.validateLifecycle=function(t,n,o){var i=new ComponentLifecycle(o.id);if(e.lifecycleExistsInConfiguration(o)){var r=e.getLifecycleMethodsDesriptor(n,o);i.setLifecycleMethods(r)}t.getContextLifecycle().getComponentLifecycles().set(o.id,i)},e}(),PropertyValidator=function(){function e(){}return e.validateName=function(e){return null!=e.name&&isString(e.name)},e.validateValue=function(e){return null!=e.value},e.validateReference=function(e){return null!=e.reference&&isObject(e.reference)},e.validateProperties=function(t){return t.forEach(function(t){if(t.value){if(t.value&&(!e.validateName(t)||!e.validateValue(t)))return!1}else if(!e.validateName(t)||!e.validateReference(t))return!1}),!0},e}(),MetadataValidationError=function(e){function t(t){var n=this,o='Metadata validation was failed in file "'+t+'".';return n=e.call(this,o)||this,n.name="MetadataValidationError",n}return __extends(t,e),t}(Error),jsonfile$1=require("jsonfile"),path=require("path"),fs=require("fs"),PROPERTY_LENGTH=2,MetadataValidator=function(){function e(){}return e.validateConfigurationFiles=function(e){var t=[];return e.forEach(function(e){try{fs.statSync(e),LOGGER.debug('[Metadata Validation]: Configuration file by path "'+e+'" was found'),t.push({path:e,content:jsonfile$1.readFileSync(e)})}catch(t){LOGGER.error('[Metadata Validation]: Cannot read the file by the following path: "'+e+'".')}}),t},e.validateConfigurationObjects=function(e){var t=[];return e.forEach(function(e){var n=e.content.configuration;if(!n)throw LOGGER.error('[Metadata Validation]: Configuration object from metadata in file "'+e.path+'" does not exist'),new MetadataValidationError(e.path);t.push({filePath:e.path,configuration:n})}),t},e.validateComponentsArray=function(t){t.forEach(function(t){var n=t.configuration.components;if(!n)throw LOGGER.error("[Metadata Validation]: Components' array from metadata in file \""+t.filePath+'" does not exist'),new MetadataValidationError(t.filePath);var o={filePath:t.filePath,components:n};e.validateConfigComponent(o)})},e.validateConfigComponent=function(t){t.components.forEach(function(n,o){if(!isObject(n))throw LOGGER.error("[Metadata Validation]: Component["+o+'] from metadata in file "'+t.filePath+'" is not an object'),new MetadataValidationError(t.filePath);var i={index:o,instance:n,filePath:t.filePath};e.validateConfigLifecycle(i),e.validateConfigScope(i),e.validateConfigProperties(i)})},e.configLifecycleHasMethod=function(e,t){return e.hasOwnProperty(t)&&isString(e[t])},e.validateConfigLifecycle=function(t){var n=t.instance.lifecycle;if(n){if(!isObject(n))throw LOGGER.error("[Metadata Validation]: Component["+t.index+'] from metadata in file "'+t.filePath+'" has invalid lifecycle object'),new MetadataValidationError(t.filePath);Object.keys(n).forEach(function(o){if(!e.configLifecycleHasMethod(n,o))throw LOGGER.error("[Metadata Validation]: Component["+t.index+'] from metadata in file "'+t.filePath+'" has invalid lifecycle object'),new MetadataValidationError(t.filePath)}),LOGGER.debug("[Metadata Validation]: Lifecycle of the Component["+t.index+'] from metadata in file "'+t.filePath+'" is successfully validated')}else LOGGER.warn("[Metadata Validation]: Component["+t.index+'] from metadata in file "'+t.filePath+'" has no lifecycle object')},e.configPropertyHasName=function(e){return e.hasOwnProperty("name")&&isString(e.name)},e.configPropertyHasValue=function(e){return e.hasOwnProperty("value")&&!isNullOrUndefined(e.value)},e.configPropertyHasReference=function(e){return e.hasOwnProperty("reference")&&isString(e.reference)},e.validateConfigProperties=function(t){var n=t.instance.properties;if(!isArray(n))throw LOGGER.error("[Metadata Validation]: Component["+t.index+'] from metadata in file "'+t.filePath+"\"has invalid properties' instance"),new MetadataValidationError(t.filePath);n.forEach(function(n){if(Object.keys(n).length===PROPERTY_LENGTH&&e.configPropertyHasName(n)){if(!e.configPropertyHasValue(n)&&!e.configPropertyHasReference(n))throw LOGGER.error("[Metadata Validation]: Component["+t.index+'] from metadata in file "'+t.filePath+' has invalid property "'+n.name+'"'),new MetadataValidationError(t.filePath);LOGGER.debug('[Metadata Validation]: Property "'+n.name+'" of the Component['+t.index+'] from metadata in file "'+t.filePath+" is successfully validated")}})},e.validateConfigScope=function(e){var t=e.instance.scope;if(t){if(!isString(t)||!["singleton","prototype"].includes(t))throw LOGGER.error("[Metadata Validation]: Component["+e.index+'] from metadata in file "'+e.filePath+'" has invalid scope'),new MetadataValidationError(e.filePath);LOGGER.debug("[Metadata Validation]: Scope of the Component["+e.index+'] from metadata in file "'+e.filePath+" is successfully validated")}else LOGGER.debug("[Metadata Validation]: Scope of the Component["+e.index+'] from metadata in file "'+e.filePath+'" will be set to SINGLETON as default')},e.validateMetadata=function(t){LOGGER.info("[Metadata Validation]: Metadata validation process is starting...");var n=e.validateConfigurationFiles(t),o=e.validateConfigurationObjects(n);e.validateComponentsArray(o),LOGGER.info("[Metadata Validation]: Metadata validation process was finished...")},e}(),PropertyValidationError=function(e){function t(t){var n=this,o='Component with id "'+t+'" contains wrong property.';return n=e.call(this,o)||this,n.name="PropertyValidationError",n}return __extends(t,e),t}(Error),jsonfile=require("jsonfile"),APPLICATION_ROOT_DIRECTORY=require("app-root-dir").get(),MetadataContext=function(e){function t(t){var n=e.call(this)||this;return t&&(MetadataValidator.validateMetadata(t),n.configs=t,n.registerComponentsInContext(),LOGGER.info("[MetadataContext]: Context was initialized")),n}return __extends(t,e),t.prototype.parseMetadataFromConfigurationFile=function(){var e=[];return this.configs.forEach(function(t){var n=jsonfile.readFileSync(t).configuration;e.push({configName:t,config:n})}),e},t.prototype.getPropertiesFromConfiguration=function(e,t){var n=e.properties,o=[];return n&&n.forEach(function(e){var n=Object.getOwnPropertyNames(t.default.prototype).find(function(t){return t===e.name});e.value&&n?o.push({name:e.name,value:e.value}):e.reference&&n&&o.push({name:e.name,reference:e.reference})}),o},t.prototype.defineComponentScope=function(e){return"singleton"===e.scope?0:"prototype"===e.scope?1:0},t.prototype.setBasicPropertiesToComponents=function(e){var t=this;e.forEach(function(e){var n=APPLICATION_ROOT_DIRECTORY+"/"+e.classPath,o=require(n),i=o.default.prototype,r=Object.create(i);LifecycleValidator.validateLifecycle(t,i,e);var a=t.getContextLifecycle().getComponentLifecycles().get(e.id);a.callPreInitMethod();var c=new Component(e.id,e.name,e.classPath,t.defineComponentScope(e)),f=t.getPropertiesFromConfiguration(e,o);if(!PropertyValidator.validateProperties(f))throw new PropertyValidationError(e.id);f.forEach(function(e){e.value?r[e.name]=e.value:r[e.name]=null}),a.callBeforePropertiesWillBeSetMethod(),c.setEntityInstance(r),t.components.set(e.id,c),a.callPostInitMethod()})},t.prototype.setReferencesToComponents=function(e){var t=this;this.components.forEach(function(n){var o=t.getContextLifecycle().getComponentLifecycles().get(n.getId()),i=require(APPLICATION_ROOT_DIRECTORY+"/"+n.getClassPath());e.forEach(function(e){t.getPropertiesFromConfiguration(e,i).forEach(function(e){if(e.reference){var o=t.getComponentEntityInstanceById(e.reference);n.getEntityInstance()[e.name]=o}})}),o.callAfterPropertiesWereSetMethod()})},t.prototype.getUniqueConfigComponents=function(){var e=[];return this.parseMetadataFromConfigurationFile().forEach(function(t){t.config.components.forEach(function(t){e.find(function(e){return e.id===t.id})||e.push(t)})}),e},t.prototype.getConfigComponents=function(){return this.getUniqueConfigComponents()},t.prototype.registerComponentsInContext=function(){var e=this.getConfigComponents();this.setBasicPropertiesToComponents(e),this.setReferencesToComponents(e)},t}(Context),_$1=require("lodash"),DecoratorContext=function(e){function t(t){var n=e.call(this)||this;return t&&t.length>0&&(n.configs=t,n.registerComponentsInContext()),n}return __extends(t,e),t.prototype.registerComponentsInContext=function(){var e=this;this.configs.forEach(function(t){var n=t.prototype;Object.keys(n).map(function(e){return n[e]}).forEach(function(t){if(t){var n=t.call(e);e.components.set(n.id,n)}})})},t.prototype.getComponentEntityInstanceByClass=function(e){for(var t=Array.from(this.components.values()),n=0;n<t.length;n++){var o=t[n].getEntityInstance();t[n].getId();if(o instanceof e)return 1===t[n].getScope()?_$1.cloneDeep(o):o;if(n===t.length-1)throw new ComponentNotFoundError("undefined")}},t}(Context);exports.MetadataContext=MetadataContext,exports.DecoratorContext=DecoratorContext;

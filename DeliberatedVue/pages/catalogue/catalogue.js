// pages/catalogue/catalogue.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      codeId:'',
      temp:true,
      treeList: {text: 'Vue源码阅读',id: 'src',nodes: [{
                   text: '1.compiler',id: "src\\\\compiler",nodes:[{
                      text:'1.1 codegen',id:"src\\\\compiler\\\\codegen",nodes:[{
                            text:'1.1.1 events',id:"src\\\\compiler\\\\codegen\\\\events.js"},{
                            text:'1.1.2 index',id:"src\\\\compiler\\\\codegen\\\\index.js"}]},{
                      text:'1.2 directives',id:"src\\\\compiler\\\\directives", nodes:[{
                            text:'1.2.1 bind',id:'src\\\\compiler\\\\directives\\\\bind.js'},{
                            text:'1.2.2 index',id:'src\\\\compiler\\\\directives\\\\index.js'},{
                            text:'1.2.3 model',id:'src\\\\compiler\\\\directives\\\\model.js'},{
                            text:'1.2.4 on',id:'src\\\\compiler\\\\directives\\\\on.js'}]},{
                      text:'1.3 parser',id:'src\\\\compiler\\\\parser',nodes:[{
                            text:'1.3.1 entity-decoder',id:'src\\\\compiler\\\\parser\\\\entity-decoder.js'},{
                            text:'1.3.2 filter-parser',id:'src\\\\compiler\\\\parser\\\\filter-parser.js'},{
                            text:'1.3.3 html-parser',id:'src\\\\compiler\\\\parser\\\\html-parser.js'},{
                            text:'1.3.4 index',id:'src\\\\compiler\\\\parser\\\\index.js'},{
                            text:'1.3.5 text-parser',id:'src\\\\compiler\\\\parser\\\\text-parser.js'}]},{
                      text:'1.4 codeframe',id:'src\\\\compiler\\\\codeframe.js'},{
                      text:'1.5 create-compiler',id:'src\\\\compiler\\\\create-compiler.js'},{
                      text:'1.6 error-detector',id:'src\\\\compiler\\\\error-detector.js'},{ 
                      text:'1.7 helpers',id:'src\\\\compiler\\\\helpers.js'},{
                      text:'1.8 index',id:'src\\\\compiler\\\\index.js'},{
                      text:'1.9 optimizer',id:'src\\\\compiler\\\\optimizer.js'},{
                      text:'1.10 to-function',id:'src\\\\compiler\\\\to-function.js'},
            ]},{
                text:'2.core',id:'src////core',nodes:[{
                      text:'2.1 components',id:'src\\\\core\\\\components',nodes:[{
                              text:'2.1.1 index',id:'src\\\\core\\\\components\\\\index.js'},{
                              text:'2.1.2 keep-alive',id:'src\\\\core\\\\components\\\\keep-alive.js'}]},{
                      text:'2.2 global-api',id:'src\\\\core\\\\global-api',nodes:[{
                              text:'2.2.1 assets',id:'src\\\\core\\\\global-api\\\\assets.js'},{
                              text:'2.2.2 extend',id:'src\\\\core\\\\global-api\\\\extend.js'},{
                              text:'2.2.3 index',id:'src\\\\core\\\\global-api\\\\index.js'},{
                              text:'2.2.4 mixin',id:'src\\\\core\\\\global-api\\\\mixin.js'},{
                              text:'2.2.5 use',id:'src\\\\core\\\\global-api\\\\use.js'}]},{
                      text:'2.3 instance',id:'src\\\\core\\\\instance',nodes:[{
                              text:'2.3.1 render-helpers',id:'src\\\\core\\\\instance\\\\render-helpers',nodes:[{
                                        text:'2.3.1.1 bind-dynamic-keys',id:'src\\\\core\\\\instance\\\\render-helpers\\\\bind-dynamic-keys.js'},{
                                        text:'2.3.1.2 bind-object-listeners',id:'src\\\\core\\\\instance\\\\render-helpers\\\\bind-object-listeners.js'},{
                                        text:'2.3.1.3 bind-object-props',id:'src\\\\core\\\\instance\\\\render-helpers\\\\bind-object-props.js'},{
                                        text:'2.3.1.4 check-keycodes',id:'src\\\\core\\\\instance\\\\render-helpers\\\\check-keycodes.js'},{
                                        text:'2.3.1.5 index',id:'src\\\\core\\\\instance\\\\render-helpers\\\\index.js'},{
                                        text:'2.3.1.6 render-list',id:'src\\\\core\\\\instance\\\\render-helpers\\\\render-list.js'},{
                                        text:'2.3.1.7 render-slot',id:'src\\\\core\\\\instance\\\\render-helpers\\\\render-slot.js'},{
                                        text:'2.3.1.8 render-static',id:'src\\\\core\\\\instance\\\\render-helpers\\\\render-static.js'},{
                                        text:'2.3.1.9 resolve-filter',id:'src\\\\core\\\\instance\\\\render-helpers\\\\resolve-filter.js'},{
                                        text:'2.3.1.10 resolve-scoped-slots',id:'src\\\\core\\\\instance\\\\render-helpers\\\\resolve-scoped-slots.js'},{
                                        text:'2.3.1.11 resolve-slots',id:'src\\\\core\\\\instance\\\\render-helpers\\\\resolve-slots.js'},]},{
                              text:'2.3.2 events',id:'src\\\\core\\\\instance\\\\events.js'},{
                              text:'2.3.3 index',id:'src\\\\core\\\\instance\\\\index.js'},{
                              text:'2.3.4 init',id:'src\\\\core\\\\instance\\\\init.js'},{
                              text:'2.3.5 inject',id:'src\\\\core\\\\instance\\\\inject.js'},{
                              text:'2.3.6 lifecycle',id:'src\\\\core\\\\instance\\\\lifecycle.js'},{
                              text:'2.3.7 proxy',id:'src\\\\core\\\\instance\\\\proxy.js'},{
                              text:'2.3.8 render',id:'src\\\\core\\\\instance\\\\render.js'},{
                              text:'2.3.9 state',id:'src\\\\core\\\\instance\\\\state.js'}]},{
                      text:'2.4 observer',id:'src\\\\core\\\\observer',nodes:[{
                              text:'2.4.1 array',id:'src\\\\core\\\\observer\\\\array.js'},{
                              text:'2.4.2 dep',id:'src\\\\core\\\\observer\\\\dep.js'},{
                              text:'2.4.3 index',id:'src\\\\core\\\\observer\\\\index.js'},{
                              text:'2.4.4 scheduler',id:'src\\\\core\\\\observer\\\\scheduler.js'},{
                              text:'2.4.5 traverse',id:'src\\\\core\\\\observer\\\\traverse.js'},{
                              text:'2.4.6 watcher',id:'src\\\\core\\\\observer\\\\watcher.js'},]},{
                      text:'2.5 util',id:'src\\\\core\\\\util',nodes:[{
                              text:'2.5.1 debug',id:'src\\\\core\\\\util\\\\debug.js'},{
                              text:'2.5.2 env',id:'src\\\\core\\\\util\\\\env.js'},{
                              text:'2.5.3 error',id:'src\\\\core\\\\util\\\\error.js'},{
                              text:'2.5.4 index',id:'src\\\\core\\\\util\\\\index.js'},{
                              text:'2.5.5 lang',id:'src\\\\core\\\\util\\\\lang.js'},{
                              text:'2.5.6 next-tick',id:'src\\\\core\\\\util\\\\next-tick.js'},{
                              text:'2.5.7 options',id:'src\\\\core\\\\util\\\\options.js'},{
                              text:'2.5.8 perf',id:'src\\\\core\\\\util\\\\perf.js'},{
                              text:'2.5.9 props',id:'src\\\\core\\\\util\\\\props.js'},]},{
                      text:'2.6 vdom',id:'src\\\\core\\\\vdom',nodes:[{
                              text:'2.6.1 helers',id:'src\\\\core\\\\vdom\\\\helpers',nodes:[{
                                          text:'2.6.1.1 extract-props',id:'src\\\\core\\\\vdom\\\\helpers\\\\extract-props.js'},{
                                          text:'2.6.1.2 get-first-component-child',id:'src\\\\core\\\\vdom\\\\helpers\\\\get-first-component-child.js'},{
                                          text:'2.6.1.3 index',id:'src\\\\core\\\\vdom\\\\helpers\\\\index.js'},{
                                          text:'2.6.1.4 is-async-placeholder',id:'src\\\\core\\\\vdom\\\\helpers\\\\is-async-placeholder.js'},{
                                          text:'2.6.1.5 merge-hook',id:'src\\\\core\\\\vdom\\\\helpers\\\\merge-hook.js'},{
                                          text:'2.6.1.6 normalize-children',id:'src\\\\core\\\\vdom\\\\helpers\\\\normalize-children.js'},{
                                          text:'2.6.1.7 normalize-scoped-slots',id:'src\\\\core\\\\vdom\\\\helpers\\\\normalize-scoped-slots.js'},{
                                          text:'2.6.1.8 resolve-async-component',id:'src\\\\core\\\\vdom\\\\helpers\\\\resolve-async-component.js'},{
                                          text:'2.6.1.9 update-listeners',id:'src\\\\core\\\\vdom\\\\helpers\\\\update-listeners.js'},]},{
                              text:'2.6.2 modules',id:'src\\\\core\\\\vdom\\\\modules',nodes:[{
                                          text:'2.6.2.1 directives',id:'src\\\\core\\\\vdom\\\\modules\\\\directives.js'},{
                                          text:'2.6.2.2 index',id:'src\\\\core\\\\vdom\\\\modules\\\\index.js'},{
                                          text:'2.6.2.3 ref',id:'src\\\\core\\\\vdom\\\\modules\\\\ref.js'},]},{
                              text:'2.6.3 create-component',id:'src\\\\core\\\\vdom\\\\create-component.js'},{
                              text:'2.6.4 create-element',id:'src\\\\core\\\\vdom\\\\create-element.js'},{
                              text:'2.6.5 create-functional-component',id:'src\\\\core\\\\vdom\\\\create-functional-component.js'},{
                              text:'2.6.6 patch',id:'src\\\\core\\\\vdom\\\\patch.js'},{
                              text:'2.6.7 vnode',id:'src\\\\core\\\\vdom\\\\vnode.js'},]},{
                      text:'2.7 config',id:'src\\\\core\\\\config.js'},{
                      text:'2.8 index',id:'src\\\\core\\\\index.js'},]},{
              text:'3.platforms',id:'src\\\\platforms',nodes:[{
                      text:'3.1 web',id:'src\\\\platforms\\\\web',nodes:[{
                              text:'3.1.1 compiler',id:'src\\\\platforms\\\\web\\\\compiler',nodes:[{
                                          text:'3.1.1.1 directives',id:'src\\\\platforms\\\\web\\\\compiler\\\\directives',nodes:[{
                                                      text:'3.1.1.1.1 html',id:'src\\\\platforms\\\\web\\\\compiler\\\\directives\\\\html.js'},{
                                                      text:'3.1.1.1.2 index',id:'src\\\\platforms\\\\web\\\\compiler\\\\directives\\\\index.js'},{
                                                      text:'3.1.1.1.3 model',id:'src\\\\platforms\\\\web\\\\compiler\\\\directives\\\\model.js'},{
                                                      text:'3.1.1.1.4 text',id:'src\\\\platforms\\\\web\\\\compiler\\\\directives\\\\text.js'},]},{
                                          text:'3.1.1.2 modules',id:'src\\\\platforms\\\\web\\\\compiler\\\\modules',nodes:[{
                                                      text:'3.1.1.2.1 class',id:'src\\\\platforms\\\\web\\\\compiler\\\\modules\\\\class.js'},{
                                                      text:'3.1.1.2.2 index',id:'src\\\\platforms\\\\web\\\\compiler\\\\modules\\\\index.js'},{
                                                      text:'3.1.1.2.3 model',id:'src\\\\platforms\\\\web\\\\compiler\\\\modules\\\\model.js'},{
                                                      text:'3.1.1.2.4 style',id:'src\\\\platforms\\\\web\\\\compiler\\\\modules\\\\style.js'},]},{
                                          text:'3.1.1.3 index',id:'src\\\\platforms\\\\web\\\\compiler\\\\index.js'},{
                                          text:'3.1.1.4 options',id:'src\\\\platforms\\\\web\\\\compiler\\\\options.js'},{
                                          text:'3.1.1.5 util',id:'src\\\\platforms\\\\web\\\\compiler\\\\util.js'},]},{
                              text:'3.1.2 runtime',id:'src\\\\platforms\\\\web\\\\runtime',nodes:[{
                                          text:'3.1.2.1 components',id:'src\\\\platforms\\\\web\\\\runtime\\\\components',nodes:[{
                                                      text:'index',id:'src\\\\platforms\\\\web\\\\runtime\\\\components\\\\index.js'},{
                                                      text:'transition',id:'src\\\\platforms\\\\web\\\\runtime\\\\components\\\\transition.js'},{
                                                      text:'transition-group',id:'src\\\\platforms\\\\web\\\\runtime\\\\components\\\\transition-group.js'}]},{
                                          text:'3.1.2.2 directives',id:'src\\\\platforms\\\\web\\\\runtime\\\\directives',nodes:[{
                                                      text:'index',id:'src\\\\platforms\\\\web\\\\runtime\\\\directives\\\\index.js'},{
                                                      text:'model',id:'src\\\\platforms\\\\web\\\\runtime\\\\directives\\\\model.js'},{
                                                      text:'show',id:'src\\\\platforms\\\\web\\\\runtime\\\\directives\\\\show.js'}]},{
                                          text:'3.1.2.3 modules',id:'src\\\\platforms\\\\web\\\\runtime\\\\modules',nodes:[{
                                                      text:'attrs',id:'src\\\\platforms\\\\web\\\\runtime\\\\modules\\\\attrs.js'},{
                                                      text:'class',id:'src\\\\platforms\\\\web\\\\runtime\\\\modules\\\\class.js'},{
                                                      text:'dom-props',id:'src\\\\platforms\\\\web\\\\runtime\\\\modules\\\\dom-props.js'},{
                                                      text:'events',id:'src\\\\platforms\\\\web\\\\runtime\\\\modules\\\\events.js'},{
                                                      text:'index',id:'src\\\\platforms\\\\web\\\\runtime\\\\modules\\\\index.js'},{
                                                      text:'style',id:'src\\\\platforms\\\\web\\\\runtime\\\\modules\\\\style.js'},{
                                                      text:'transition',id:'src\\\\platforms\\\\web\\\\runtime\\\\modules\\\\transition.js'},]},{
                                          text:'3.1.2.4 class-util',id:'src\\\\platforms\\\\web\\\\runtime\\\\class-util.js'},{
                                          text:'3.1.2.5 index',id:'src\\\\platforms\\\\web\\\\runtime\\\\index.js'},{
                                          text:'3.1.2.6 node-ops',id:'src\\\\platforms\\\\web\\\\runtime\\\\node-ops.js'},{
                                          text:'3.1.2.7 patch',id:'src\\\\platforms\\\\web\\\\runtime\\\\patch.js'},{
                                          text:'3.1.2.8 transition-util',id:'src\\\\platforms\\\\web\\\\runtime\\\\transition-util.js'},]},{
                              text:'3.1.3 server',id:'src\\\\platforms\\\\web\\\\server',nodes:[{
                                          text:'3.1.3.1 directives',id:'src\\\\platforms\\\\web\\\\server\\\\directives',nodes:[{
                                                      text:'index',id:'src\\\\platforms\\\\web\\\\server\\\\directives\\\\index.js'},{
                                                      text:'model',id:'src\\\\platforms\\\\web\\\\server\\\\directives\\\\model.js'},{
                                                      text:'show',id:'src\\\\platforms\\\\web\\\\server\\\\directives\\\\show.js'}]},{
                                          text:'3.1.3.2 modules',id:'src\\\\platforms\\\\web\\\\server\\\\modules',nodes:[{
                                                      text:'attrs',id:'src\\\\platforms\\\\web\\\\server\\\\modules\\\\attrs.js'},{
                                                      text:'class',id:'src\\\\platforms\\\\web\\\\server\\\\modules\\\\class.js'},{
                                                      text:'dom-props',id:'src\\\\platforms\\\\web\\\\server\\\\modules\\\\dom-props.js'},{
                                                      text:'index',id:'src\\\\platforms\\\\web\\\\server\\\\modules\\\\index.js'},{
                                                      text:'style',id:'src\\\\platforms\\\\web\\\\server\\\\modules\\\\style.js'}]},{
                                          text:'3.1.3.3 compiler',id:'src\\\\platforms\\\\web\\\\server\\\\compiler.js'},{
                                          text:'3.1.3.4 util',id:'src\\\\platforms\\\\web\\\\server\\\\util.js'}]},{
                              text:'3.1.4 util',id:'src\\\\platforms\\\\web\\\\util',nodes:[{
                                          text:'attrs',id:'src\\\\platforms\\\\web\\\\util\\\\attrs.js'},{
                                          text:'class',id:'src\\\\platforms\\\\web\\\\util\\\\class.js'},{
                                          text:'compat',id:'src\\\\platforms\\\\web\\\\util\\\\compat.js'},{
                                          text:'element',id:'src\\\\platforms\\\\web\\\\util\\\\element.js'},{
                                          text:'index',id:'src\\\\platforms\\\\web\\\\util\\\\index.js'},{
                                          text:'style',id:'src\\\\platforms\\\\web\\\\util\\\\style.js'},]},{
                              text:'3.1.5 entry-compiler',id:'src\\\\platforms\\\\web\\\\entry-compiler.js'},{
                              text:'3.1.6 entry-runtime',id:'src\\\\platforms\\\\web\\\\entry-runtime.js'},{
                              text:'3.1.7 entry-runtime-with-compiler',id:'src\\\\platforms\\\\web\\\\entry-runtime-with-compiler.js'},{
                              text:'3.1.8 entry-server-basic-renderer',id:'src\\\\platforms\\\\web\\\\entry-server-basic-renderer.js'},{
                              text:'3.1.9 entry-server-renderer',id:'src\\\\platforms\\\\web\\\\entry-server-renderer.js'}]},{

                    text:'3.2 weex',id:'src\\\\platforms\\\\weex',nodes:[{
                          text:'3.2.1 comliper',id:'src\\\\platforms\\\\weex\\\\compiler',nodes:[{
                                    text:'3.2.1.1 directives',id:'src\\\\platforms\\\\weex\\\\compiler\\\\directives',nodes:[{
                                                text:'index',id:'src\\\\platforms\\\\weex\\\\compiler\\\\directives\\\\index.js'},{
                                                text:'model',id:'src\\\\platforms\\\\weex\\\\compiler\\\\directives\\\\model.js'}]},{
                                    text:'3.2.1.2 modules',id:'src\\\\platforms\\\\weex\\\\compiler\\\\modules',nodes:[{
                                                text:'recycle-list',id:'src\\\\platforms\\\\weex\\\\compiler\\\\modules\\\\recycle-list',nodes:[{
                                                            text:'component',id:'src\\\\platforms\\\\weex\\\\compiler\\\\modules\\\\recycle-list\\\\component.js'},{
                                                            text:'component-root',id:'src\\\\platforms\\\\weex\\\\compiler\\\\modules\\\\recycle-list\\\\component-root.js'},{
                                                            text:'index',id:'src\\\\platforms\\\\weex\\\\compiler\\\\modules\\\\recycle-list\\\\index.js'},{
                                                            text:'recycle-list',id:'src\\\\platforms\\\\weex\\\\compiler\\\\modules\\\\recycle-list\\\\recycle-list.js'},{
                                                            text:'text',id:'src\\\\platforms\\\\weex\\\\compiler\\\\modules\\\\recycle-list\\\\text.js'},{
                                                            text:'v-bind',id:'src\\\\platforms\\\\weex\\\\compiler\\\\modules\\\\recycle-list\\\\v-bind.js'},{
                                                            text:'v-for',id:'src\\\\platforms\\\\weex\\\\compiler\\\\modules\\\\recycle-list\\\\v-for.js'},{
                                                            text:'v-if',id:'src\\\\platforms\\\\weex\\\\compiler\\\\modules\\\\recycle-list\\\\v-if.js'},{
                                                            text:'v-on',id:'src\\\\platforms\\\\weex\\\\compiler\\\\modules\\\\recycle-list\\\\v-on.js'},{
                                                            text:'v-once',id:'src\\\\platforms\\\\weex\\\\compiler\\\\modules\\\\recycle-list\\\\v-once.js'}]},{
                                                text:'append',id:'src\\\\platforms\\\\weex\\\\compiler\\\\modules\\\\append.js'},{
                                                text:'class',id:'src\\\\platforms\\\\weex\\\\compiler\\\\modules\\\\class.js'},{
                                                text:'index',id:'src\\\\platforms\\\\weex\\\\compiler\\\\modules\\\\index.js'},{
                                                text:'props',id:'src\\\\platforms\\\\weex\\\\compiler\\\\modules\\\\props.js'},{
                                                text:'style',id:'src\\\\platforms\\\\weex\\\\compiler\\\\modules\\\\style.js'}]},{
                                    text:'3.2.1.3 index',id:'src\\\\platforms\\\\weex\\\\compiler\\\\index.js'}]},{
                        text:'3.2.2 runtime',id:'src\\\\platforms\\\\weex\\\\runtime',nodes:[{
                                    text:'3.2.2.1 components',id:'src\\\\platforms\\\\weex\\\\runtime\\\\components',nodes:[{
                                                text:'index',id:'src\\\\platforms\\\\weex\\\\runtime\\\\components\\\\index.js'},{
                                                text:'richtext',id:'src\\\\platforms\\\\weex\\\\runtime\\\\components\\\\richtext.js'},{
                                                text:'transition',id:'src\\\\platforms\\\\weex\\\\runtime\\\\components\\\\transition.js'},{
                                                text:'transition-group',id:'src\\\\platforms\\\\weex\\\\runtime\\\\components\\\\transition-group.js'}]},{
                                    text:'3.2.2.2 directives',id:'src\\\\platforms\\\\weex\\\\runtime\\\\directives',nodes:[{
                                                text:'index',id:'src\\\\platforms\\\\weex\\\\runtime\\\\directives\\\\index.js'}]},{
                                    text:'3.2.2.3 modules',id:'src\\\\platforms\\\\weex\\\\runtime\\\\modules',nodes:[{
                                                text:'attrs',id:'src\\\\platforms\\\\weex\\\\runtime\\\\modules\\\\attrs.js'},{
                                                text:'class',id:'src\\\\platforms\\\\weex\\\\runtime\\\\modules\\\\class.js'},{
                                                text:'events',id:'src\\\\platforms\\\\weex\\\\runtime\\\\modules\\\\events.js'},{
                                                text:'index',id:'src\\\\platforms\\\\weex\\\\runtime\\\\modules\\\\index.js'},{
                                                text:'style',id:'src\\\\platforms\\\\weex\\\\runtime\\\\modules\\\\style.js'},{
                                                text:'transition',id:'src\\\\platforms\\\\weex\\\\runtime\\\\modules\\\\transition.js'},]},{
                                    text:'3.2.2.4 recycle-list',id:'src\\\\platforms\\\\weex\\\\runtime\\\\recycle-list',nodes:[{
                                                text:'render-component-template',id:'src\\\\platforms\\\\weex\\\\runtime\\\\recycle-list\\\\render-component-template.js'},{
                                                text:'virtual-component',id:'src\\\\platforms\\\\weex\\\\runtime\\\\recycle-list\\\\virtual-component.js'}]},{
                                    text:'3.2.2.5 index',id:'src\\\\platforms\\\\weex\\\\runtime\\\\index.js'},{
                                    text:'3.2.2.6 node-ops',id:'src\\\\platforms\\\\weex\\\\runtime\\\\node-ops.js'},{
                                    text:'3.2.2.7 patch',id:'src\\\\platforms\\\\weex\\\\runtime\\\\patch.js'},{
                                    text:'3.2.2.8 text-node',id:'src\\\\platforms\\\\weex\\\\runtime\\\\text-node.js'}]},{
                        text:'3.2.3 util',id:'src\\\\platforms\\\\weex\\\\util',nodes:[{
                                    text:'element',id:'src\\\\platforms\\\\weex\\\\util\\\\element.js'},{
                                    text:'index',id:'src\\\\platforms\\\\weex\\\\util\\\\index.js'},{
                                    text:'parser',id:'src\\\\platforms\\\\weex\\\\util\\\\parser.js'}]},{
                        text:'3.2.4 entry-compiler',id:'src\\\\platforms\\\\weex\\\\entry-compiler.js'},{
                        text:'3.2.5 entry-framework',id:'src\\\\platforms\\\\weex\\\\entry-framework.js'},{
                        text:'3.2.6 entry-runtime-factory',id:'src\\\\platforms\\\\weex\\\\entry-runtime-factory.js'}]}]},{
              text:'4.server',id:'src\\\\server',nodes:[{
                        text:'4.1 src\\\\server\\\\bundle-renderer',id:'',nodes:[{
                                text:"4.1.1 create-bundle-renderer",id:'src\\\\server\\\\bundle-renderer\\\\create-bundle-renderer.js'},{
                                text:"4.1.2 create-bundle-runner",id:'src\\\\server\\\\bundle-renderer\\\\create-bundle-runner.js'},{
                                text:"4.1.3 source-map-support",id:'src\\\\server\\\\bundle-renderer\\\\source-map-support.js'}]},{
                        text:'4.2 optimizing-compiler',id:'src\\\\server\\\\\optimizing-compiler',nodes:[{
                                text:"4.2.1 codegen",id:'src\\\\server\\\\\optimizing-compiler\\\\codegen.js'},{
                                text:"4.2.2 index",id:'src\\\\server\\\\\optimizing-compiler\\\\index.js'},{
                                text:"4.2.3 modules",id:'src\\\\server\\\\\optimizing-compiler\\\\modules.js'},{
                                text:"4.2.4 optimizer",id:'src\\\\server\\\\\optimizing-compiler\\\\optimizer.js'},{
                                text:"4.2.5 runtime-helpers",id:'src\\\\server\\\\\optimizing-compiler\\\\runtime-helpers.js'},]},{
                        text:'4.3 template-renderer',id:'src\\\\server\\\\template-renderer',nodes:[{
                                text:"4.3.1 create-async-file-mapper",id:'src\\\\server\\\\template-renderer\\\\create-async-file-mapper.js'},{
                                text:"4.3.2 index",id:'src\\\\server\\\\template-renderer\\\\index.js'},{
                                text:"4.3.3 parse-template",id:'src\\\\server\\\\template-renderer\\\\parse-template.js'},{
                                text:"4.3.4 template-stream",id:'src\\\\server\\\\template-renderer\\\\template-stream.js'}]},{
                        text:'4.4 webpack-plugin',id:'src\\\\server\\\\webpack-plugin',nodes:[{
                                text:"4.4.1 client",id:'src\\\\server\\\\webpack-plugin\\\\client.js'},{
                                text:"4.4.2 server",id:'src\\\\server\\\\webpack-plugin\\\\server.js'},{
                                text:"4.4.3 util",id:'src\\\\server\\\\webpack-plugin\\\\util.js'}]},{
                        text:'4.5 create-basic-renderer',id:'src\\\\server\\\\create-basic-renderer.js'},{
                        text:'4.6 create-renderer',id:'src\\\\server\\\\create-renderer.js'},{
                        text:'4.7 render',id:'src\\\\server\\\\render.js'},{
                        text:'4.8 render-context',id:'src\\\\server\\\\render-context.js'},{
                        text:'4.9 render-stream',id:'src\\\\server\\\\render-stream.js'},{
                        text:'4.10 util',id:'src\\\\server\\\\util.js'},{
                        text:'4.11 write',id:'src\\\\server\\\\write.js'},]},{
              text:'5.sfc',id:'src\\\\sfc',nodes:[{
                      text:'5.1 parser',id:'src\\\\sfc\\\\parser.js'}]},{
              text:'6.shared',id:'src\\\\shared',nodes:[{
                      text:'6.1 constants',id:'src\\\\shared\\\\constants.js'},{
                      text:'6.2 util',id:'src\\\\shared\\\\util.js'}]}]}
      },

    panel: function (e) {
        if (e.currentTarget.dataset.index != this.data.showIndex) {
          this.setData({
            showIndex: e.currentTarget.dataset.index
          })
        } else {
          this.setData({
            showIndex: 0
          })
        }
      },
      changeId(){
        this.codeId  = app.globalData.codeId
        this.setData({
          codeId:this.codeId
          })
        // console.log(this.codeId)
      },
      onLoad:function(){
      },
  })
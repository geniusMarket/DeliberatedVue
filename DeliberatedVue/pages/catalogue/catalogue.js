// pages/catalogue/catalogue.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      codeId:'',
      temp:true,
      treeList: {text: 'Vue源码阅读',id: '0',nodes: [{
                   text: '1.compile',id: '1',nodes:[{
                      text:'1.1 codegen',id:'1-1',nodes:[{
                            text:'1.1.1 events',id:'1-1-1'},{
                            text:'1.1.2 index',id:"1-1-2"}]},{
                      text:'1.2 directives',id:"1-2", nodes:[{
                            text:'1.2.1 bind',id:'1-2-1'},{
                            text:'1.2.2 index',id:'1-2-2'},{
                            text:'1.2.3 model',id:'1-2-3'},{
                            text:'1.2.4 on',id:'1-2-4'}]},{
                      text:'1.3 parser',id:'1-3',nodes:[{
                            text:'1.3.1 entity-decoder',id:'1-3-1'},{
                            text:'1.3.2 filter-parser',id:'1-3-2'},{
                            text:'1.3.3 html-parser',id:'1-3-3'},{
                            text:'1.3.4 index',id:'1-3-4'},{
                            text:'1.3.5 text-parser',id:'1-3-5'}]},{
                      text:'1.4 codeframe',id:'1-4'},{
                      text:'1.5 create-compiler',id:'1-5'},{
                      text:'1.6 error-detector',id:'1-6'},{ 
                      text:'1.7 helpers',id:'1-7'},{
                      text:'1.8 index',id:'1-8'},{
                      text:'1.9 optimizer',id:'1-9'},{
                      text:'1.10 to-function',id:'1-10'},
            ]},{
                text:'2.core',id:'2',nodes:[{
                      text:'2.1 components',id:'2-1',nodes:[{
                              text:'2.1.1 index',id:'2-1-1'},{
                              text:'2.1.2 keep-alive',id:'2-1-2'}]},{
                      text:'2.2 global-api',id:'2-2',nodes:[{
                              text:'2.2.1 assets',id:'2-2-1'},{
                              text:'2.2.2 extend',id:'2-2-2'},{
                              text:'2.2.3 index',id:'2-2-3'},{
                              text:'2.2.4 mixin',id:'2-2-4'},{
                              text:'2.2.5 use',id:'2-2-5'}]},{
                      text:'2.3 instance',id:'2-3',nodes:[{
                              text:'2.3.1 render-helpers',id:'2-3-1',nodes:[{
                                        text:'2.3.1.1 bind-dynamic-keys',id:'2-3-1-1'},{
                                        text:'2.3.1.2 bind-object-listeners',id:'2-3-1-2'},{
                                        text:'2.3.1.3 bind-object-props',id:'2-3-1-3'},{
                                        text:'2.3.1.4 check-keycodes',id:'2-3-1-4'},{
                                        text:'2.3.1.5 index',id:'2-3-1-5'},{
                                        text:'2.3.1.6 render-list',id:'2-3-1-6'},{
                                        text:'2.3.1.7 render-slot',id:'2-3-1-7'},{
                                        text:'2.3.1.8 render-static',id:'2-3-1-8'},{
                                        text:'2.3.1.9 resolve-filter',id:'2-3-1-9'},{
                                        text:'2.3.1.10 resolve-scoped-slots',id:'2-3-1-10'},{
                                        text:'2.3.1.11 resolve-slots',id:'2-3-1-11'},]},{
                              text:'2.3.2 events',id:'2-3-2'},{
                              text:'2.3.3 index',id:'2-3-3'},{
                              text:'2.3.4 init',id:'2-3-4'},{
                              text:'2.3.5 inject',id:'2-3-5'},{
                              text:'2.3.6 lifecycle',id:'2-3-6'},{
                              text:'2.3.7 proxy',id:'2-3-7'},{
                              text:'2.3.8 render',id:'2-3-8'},{
                              text:'2.3.9 state',id:'2-3-9'}]},{
                      text:'2.4 observer',id:'2-4',nodes:[{
                              text:'2.4.1 array',id:'2-4-1'},{
                              text:'2.4.2 dep',id:'2-4-2'},{
                              text:'2.4.3 index',id:'2-4-3'},{
                              text:'2.4.4 scheduler',id:'2-4-4'},{
                              text:'2.4.5 traverse',id:'2-4-5'},{
                              text:'2.4.6 watcher',id:'2-4-6'},]},{
                      text:'2.5 util',id:'2-5',nodes:[{
                              text:'2.5.1 debug',id:'2-5-1'},{
                              text:'2.5.2 env',id:'2-5-2'},{
                              text:'2.5.3 error',id:'2-5-3'},{
                              text:'2.5.4 index',id:'2-5-4'},{
                              text:'2.5.5 lang',id:'2-5-5'},{
                              text:'2.5.6 next-tick',id:'2-5-6'},{
                              text:'2.5.7 options',id:'2-5-7'},{
                              text:'2.5.8 perf',id:'2-5-8'},{
                              text:'2.5.9 props',id:'2-5-9'},]},{
                      text:'2.6 vdom',id:'2-6',nodes:[{
                              text:'2.6.1 helers',id:'2-6-1',nodes:[{
                                          text:'2.6.1.1 extract-props',id:'2-6-1-1'},{
                                          text:'2.6.1.2 get-first-component-child',id:'2-6-1-2'},{
                                          text:'2.6.1.3 index',id:'2-6-1-3'},{
                                          text:'2.6.1.4 is-async-placeholder',id:'2-6-1-4'},{
                                          text:'2.6.1.5 merge-hook',id:'2-6-1-5'},{
                                          text:'2.6.1.6 normalize-children',id:'2-6-1-6'},{
                                          text:'2.6.1.7 normalize-scoped-slots',id:'2-6-1-7'},{
                                          text:'2.6.1.8 resolve-async-component',id:'2-6-1-8'},{
                                          text:'2.6.1.9 update-listeners',id:'2-6-1-9'},]},{
                              text:'2.6.2 modules',id:'2-6-2',nodes:[{
                                          text:'2.6.2.1 directives',id:'2-6-1-1'},{
                                          text:'2.6.2.2 index',id:'2-6-1-2'},{
                                          text:'2.6.2.3 ref',id:'2-6-1-3'},]},{
                              text:'2.6.3 create-component',id:'2-6-3'},{
                              text:'2.6.4 create-element',id:'2-6-4'},{
                              text:'2.6.5 create-functional-component',id:'2-6-5'},{
                              text:'2.6.6 patch',id:'2-6-6'},{
                              text:'2.6.7 vnode',id:'2-6-7'},]},{
                      text:'2.7 config',id:'2-7'},{
                      text:'2.8 index',id:'2-8'},]},{
              text:'3.platforms',id:'3',nodes:[{
                      text:'3.1 web',id:'3-1',nodes:[{
                              text:'3.1.1 compiler',id:'3-1-1',nodes:[{
                                          text:'3.1.1.1 directives',id:'3-1-1-1',nodes:[{
                                                      text:'3.1.1.1.1 html',id:'3-1-1-1-1'},{
                                                      text:'3.1.1.1.2 index',id:'3-1-1-1-2'},{
                                                      text:'3.1.1.1.3 model',id:'3-1-1-1-3'},{
                                                      text:'3.1.1.1.4 text',id:'3-1-1-1-4'},]},{
                                          text:'3.1.1.2 modules',id:'3-1-1-2',nodes:[{
                                                      text:'3.1.1.2.1 class',id:'3-1-1-2-1'},{
                                                      text:'3.1.1.2.2 index',id:'3-1-1-2-2'},{
                                                      text:'3.1.1.2.3 model',id:'3-1-1-2-3'},{
                                                      text:'3.1.1.2.4 style',id:'3-1-1-2-4'},]},{
                                          text:'3.1.1.3 index',id:'3-1-1-3'},{
                                          text:'3.1.1.4 options',id:'3-1-1-4'},{
                                          text:'3.1.1.5 util',id:'3-1-1-5'},]},{
                              text:'3.1.2 runtime',id:'3-1-2',nodes:[{
                                          text:'3.1.2.1 components',id:'3-1-2-1',nodes:[{
                                                      text:'index',id:'3-1-2-1-1'},{
                                                      text:'transition',id:'3-1-2-1-2'},{
                                                      text:'transition-group',id:'3-1-2-1-3'}]},{
                                          text:'3.1.2.2 directives',id:'3-1-2-2',nodes:[{
                                                      text:'index',id:'3-1-2-2-1'},{
                                                      text:'model',id:'3-1-2-2-2'},{
                                                      text:'show',id:'3-1-2-2-3'}]},{
                                          text:'3.1.2.3 modules',id:'3-1-2-3',nodes:[{
                                                      text:'attrs',id:'3-1-2-3-1'},{
                                                      text:'class',id:'3-1-2-3-2'},{
                                                      text:'dom-props',id:'3-1-2-3-3'},{
                                                      text:'events',id:'3-1-2-3-4'},{
                                                      text:'index',id:'3-1-2-3-5'},{
                                                      text:'style',id:'3-1-2-3-6'},{
                                                      text:'transition',id:'3-1-2-3-7'},]},{
                                          text:'3.1.2.4 class-util',id:'3-1-2-4'},{
                                          text:'3.1.2.5 index',id:'3-1-2-5'},{
                                          text:'3.1.2.6 node-ops',id:'3-1-2-6'},{
                                          text:'3.1.2.7 patch',id:'3-1-2-7'},{
                                          text:'3.1.2.8 transition-util',id:'3-1-2-8'},]},{
                              text:'3.1.3 server',id:'3-1-3',nodes:[{
                                          text:'3.1.3.1 directives',id:'3-1-3-1',nodes:[{
                                                      text:'index',id:'3-1-3-1-1'},{
                                                      text:'model',id:'3-1-3-1-2'},{
                                                      text:'show',id:'3-1-3-1-3'}]},{
                                          text:'3.1.3.2 modules',id:'3-1-3-2',nodes:[{
                                                      text:'attrs',id:'3-1-3-2-1'},{
                                                      text:'class',id:'3-1-3-2-2'},{
                                                      text:'dom-props',id:'3-1-3-2-3'},{
                                                      text:'index',id:'3-1-3-2-4'},{
                                                      text:'style',id:'3-1-3-2-5'}]},{
                                          text:'3.1.3.3 compiler',id:'3-1-3-3'},{
                                          text:'3.1.3.4 util',id:'3-1-3-4'}]},{
                              text:'3.1.4 util',id:'3-1-4',nodes:[{
                                          text:'attrs',id:'3-1-4-1'},{
                                          text:'class',id:'3-1-4-2'},{
                                          text:'compat',id:'3-1-4-3'},{
                                          text:'element',id:'3-1-4-4'},{
                                          text:'index',id:'3-1-4-5'},{
                                          text:'style',id:'3-1-4-6'},]},{
                              text:'3.1.5 entry-compiler',id:'3-1-5'},{
                              text:'3.1.6 entry-runtime',id:'3-1-6'},{
                              text:'3.1.7 entry-runtime-with-compiler',id:'3-1-7'},{
                              text:'3.1.8 entry-server-basic-renderer',id:'3-1-8'},{
                              text:'3.1.9 entry-server-renderer',id:'3-1-9'}]},{

                    text:'3.2 weex',id:'3-2',nodes:[{
                          text:'3.2.1 comlipe',id:'3-2-1',nodes:[{
                                    text:'3.2.1.1 directives',id:'3-2-1-1',nodes:[{
                                                text:'index',id:'3-2-1-1-1'},{
                                                text:'model',id:'3-2-1-1-2'}]},{
                                    text:'3.2.1.2 modules',id:'3-2-1-2',nodes:[{
                                                text:'recycle-list',id:'3-2-1-2-1',nodes:[{
                                                            text:'component',id:'3-2-1-2-1-1'},{
                                                            text:'component-root',id:'3-2-1-2-1-2'},{
                                                            text:'index',id:'3-2-1-2-1-3'},{
                                                            text:'recycle-list',id:'3-2-1-2-1-4'},{
                                                            text:'text',id:'3-2-1-2-1-5'},{
                                                            text:'v-bind',id:'3-2-1-2-1-6'},{
                                                            text:'v-for',id:'3-2-1-2-1-7'},{
                                                            text:'v-if',id:'3-2-1-2-1-8'},{
                                                            text:'v-on',id:'3-2-1-2-1-9'},{
                                                            text:'v-once',id:'3-2-1-2-1-10'}]},{
                                                text:'append',id:'3-2-1-2-2'},{
                                                text:'class',id:'3-2-1-2-3'},{
                                                text:'index',id:'3-2-1-2-4'},{
                                                text:'props',id:'3-2-1-2-5'},{
                                                text:'style',id:'3-2-1-2-6'}]},{
                                    text:'3.2.1.3 index',id:'3-2-1-3'}]},{
                        text:'3.2.2 runtime',id:'3-2-2',nodes:[{
                                    text:'3.2.2.1 components',id:'3-2-2-1',nodes:[{
                                                text:'index',id:'3-2-2-1-1'},{
                                                text:'richtext',id:'3-2-2-1-2'},{
                                                text:'transition',id:'3-2-2-1-3'},{
                                                text:'transition-group',id:'3-2-2-1-4'}]},{
                                    text:'3.2.2.2 directives',id:'3-2-2-2',nodes:[{
                                                text:'index',id:'3-2-2-2-1'}]},{
                                    text:'3.2.2.3 modules',id:'3-2-2-3',nodes:[{
                                                text:'attrs',id:'3-2-2-3-1'},{
                                                text:'class',id:'3-2-2-3-2'},{
                                                text:'events',id:'3-2-2-3-3'},{
                                                text:'index',id:'3-2-2-3-4'},{
                                                text:'style',id:'3-2-2-3-5'},{
                                                text:'transition',id:'3-2-2-3-6'},]},{
                                    text:'3.2.2.4 recycle-list',id:'3-2-2-4',nodes:[{
                                                text:'render-component-template',id:'3-2-2-4-1'},{
                                                text:'virtual-component',id:'3-2-2-4-2'}]},{
                                    text:'3.2.2.5 index',id:'3-2-2-5'},{
                                    text:'3.2.2.6 node-ops',id:'3-2-2-6'},{
                                    text:'3.2.2.7 patch',id:'3-2-2-7'},{
                                    text:'3.2.2.8 text-node',id:'3-2-2-8'}]},{
                        text:'3.2.3 util',id:'3-2-3',nodes:[{
                                    text:'element',id:'3-2-3-1'},{
                                    text:'index',id:'3-2-3-2'},{
                                    text:'parser',id:'3-2-3-3'}]},{
                        text:'3.2.4 entry-compiler',id:'3-2-4'},{
                        text:'3.2.5 entry-framework',id:'3-2-5'},{
                        text:'3.2.6 entry-runtime-factory',id:'3-2-6'}]}]},{
              text:'4.server',id:'4'},{
              text:'5.sfc',id:'5'},{
              text:'6.shared',id:'6'}]}
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
      }
     
  })
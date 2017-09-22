import { Component, ViewEncapsulation , ViewChild, AfterViewInit  } from '@angular/core';
import { jqxDockingLayoutComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxdockinglayout';
import { jqxButtonComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxButtons';
import { jqxTextAreaComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxTextArea';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit{
    @ViewChild('dockingLayoutReference') dockingLayoutReference: jqxDockingLayoutComponent;
    @ViewChild('loadLayoutButton') loadLayoutButton: jqxButtonComponent;

    ngAfterViewInit():void{
        let width:any = 200;
        let length:any = 200;
        document.getElementById("button1").onclick = () =>{this.dockingLayoutReference.addFloatGroup(width,length,{x:10,y:10},'layoutPanel','Title','Content','')}
        
    }

    savedLayout: any;

    layout: any[] = this.generateLayout();
    
        generateLayout(): any[] {
            let layout = [{
                type: 'layoutGroup',
                orientation: 'horizontal',
                items: [{
                    type: 'autoHideGroup',
                    alignment: 'left',
                    width: 80,
                    unpinnedWidth: 200,
                    items: [{
                        type: 'layoutPanel',
                        title: 'Toolbox',
                        contentContainer: 'ToolboxPanel'
                    }, {
                        type: 'layoutPanel',
                        title: 'Help',
                        contentContainer: 'HelpPanel'
                    },
                    {
                        type: 'layoutPanel',
                        title: 'Create',
                        contentContainer: 'createPanel',
                        initContent:()=>{
                            let newbutton = jqwidgets.createInstance('#button1', 'jqxButton', { width: '90%', height: 30 });
                        }
                    }]
                }, {
                    type: 'layoutGroup',
                    orientation: 'vertical',
                    width: 500,
                    items: [{
                        type: 'documentGroup',
                        height: 400,
                        minHeight: 200,
                        items: [{
                            type: 'documentPanel',
                            title: 'index.htm',
                            contentContainer: 'Document1Panel',
                            initContent: () => {
                                let textArea = jqwidgets.createInstance('#Document1TextArea', 'jqxTextArea', { width: '100%', height: 400 });
                                textArea.val('<!DOCTYPE html>\n<html>\n\t<head>\n\t<title>Page Title</title>\n\t</head>\n\t<body>\n\t\t<h1>This is a Heading</h1>\n\t\t<p>This is a paragraph.</p>\n\t</body>\n</html>');
                            }
                        }, {
                            type: 'documentPanel',
                            title: 'New Document',
                            contentContainer: 'Document2Panel',
                            initContent: () => {
                                jqwidgets.createInstance('#Document2TextArea', 'jqxTextArea', { width: '100%', height: 400, placeHolder: 'Blank document' });
                            }
                        }]
                    }, {
                        type: 'tabbedGroup',
                        height: 200,
                        minHeight: 200,
                        pinnedHeight: 30,
                        items: [{
                            type: 'layoutPanel',
                            title: 'Error List',
                            contentContainer: 'ErrorListPanel'
                        }]
                    }]
                }, {
                    type: 'tabbedGroup',
                    width: 220,
                    minWidth: 200,
                    items: [{
                        type: 'layoutPanel',
                        title: 'Solution Explorer',
                        contentContainer: 'SolutionExplorerPanel',
                        initContent: () => {
                            // initialize a jqxTree inside the Solution Explorer Panel
                            let source = [{
                                icon: '../images/earth.png',
                                label: 'Project',
                                expanded: true,
                                items: [{
                                    icon: '../images/folder.png',
                                    label: 'css',
                                    expanded: true,
                                    items: [{
                                        icon: '../images/nav1.png',
                                        label: 'jqx.base.css'
                                    }, {
                                        icon: '../images/nav1.png',
                                        label: 'jqx.energyblue.css'
                                    }, {
                                        icon: '../images/nav1.png',
                                        label: 'jqx.orange.css'
                                    }]
                                }, {
                                    icon: '../images/folder.png',
                                    label: 'scripts',
                                    items: [{
                                        icon: '../images/nav1.png',
                                        label: 'jqxcore.js'
                                    }, {
                                        icon: '../images/nav1.png',
                                        label: 'jqxdata.js'
                                    }, {
                                        icon: '../images/nav1.png',
                                        label: 'jqxgrid.js'
                                    }]
                                }, {
                                    icon: '../images/nav1.png',
                                    label: 'index.htm',
                                    selected: true
                                }]
                            }];
                            jqwidgets.createInstance('#solutionExplorerTree', 'jqxTree', { width: 190, height: '99%', source: source });
                        }
                    }, {
                        type: 'layoutPanel',
                        title: 'Properties',
                        contentContainer: 'PropertiesPanel'
                    }]
                }]
            }];
            return layout;
        }
    
    

    saveLayout():void{
        this.savedLayout = this.dockingLayoutReference.saveLayout();
    }

    loadLayout():void{
        this.dockingLayoutReference.loadLayout(this.savedLayout);
    }
}


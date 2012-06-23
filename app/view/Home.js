Ext.define('Med-Table.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',

    initialize: function () {
        audio = (Ext.getCmp('audio1'));
        audio.toggle();
    },

    config: {
        title: 'Home',
        iconCls: 'home',
        xtype: 'container',
        layout: 'hbox',
        pack: 'center',
        items: [
            {
                xtype : 'audio',
                id:'audio1',
                hidden: true,
                url : 'resources/Audio/Welcome.mp3'
            },
            {
            xtype: 'image',
            src: 'resources/images/regcard.png',
            flex: 1,
            //height: 398,
            //width: 348,
            //top :50,
            //left: 50,
            margin: 50
        }, {
            xtype: 'container',
            flex: 1,
            margin : 50,
            layout: "vbox",
            items: [{
                xtype: 'textfield',
                name: 'regno',
                id: 'regno'
                //flex:1
            },

                {
                    xtype: 'container',
                    layout: 'hbox',
                    flex: 1,
                    items: [{
                        xtype: 'button',
                        text: '1',
                        handler: function()
                        {
                            var inp = Ext.getCmp('regno').getValue();
                            Ext.getCmp('regno').setValue(inp + "1")
                        },
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '2',
                        handler: function()
                        {
                            var inp = Ext.getCmp('regno').getValue();
                            Ext.getCmp('regno').setValue(inp + "2")
                        },
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '3',
                        handler: function()
                        {
                            var inp = Ext.getCmp('regno').getValue();
                            Ext.getCmp('regno').setValue(inp + "3")
                        },
                        flex: 1
                    }]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    flex: 1,
                    items: [{
                        xtype: 'button',
                        text: '4',
                        handler: function()
                        {
                            var inp = Ext.getCmp('regno').getValue();
                            Ext.getCmp('regno').setValue(inp + "4")
                        },
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '5',
                        handler: function()
                        {
                            var inp = Ext.getCmp('regno').getValue();
                            Ext.getCmp('regno').setValue(inp + "5")
                        },
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '6',
                        handler: function()
                        {
                            var inp = Ext.getCmp('regno').getValue();
                            Ext.getCmp('regno').setValue(inp + "6")
                        },
                        flex: 1
                    }]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    flex: 1,
                    items: [{
                        xtype: 'button',
                        text: '7',
                        handler: function()
                        {
                            var inp = Ext.getCmp('regno').getValue();
                            Ext.getCmp('regno').setValue(inp + "7")
                        },
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '8',
                        handler: function()
                        {
                            var inp = Ext.getCmp('regno').getValue();
                            Ext.getCmp('regno').setValue(inp + "8")
                        },
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '9',
                        handler: function()
                        {
                            var inp = Ext.getCmp('regno').getValue();
                            Ext.getCmp('regno').setValue(inp + "9")
                        },
                        flex: 1
                    }]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    flex: 1,
                    items: [{
                        xtype: 'button',
                        text: 'C',
                        handler: function()
                        {
                            var inp = Ext.getCmp('regno').getValue();
                            inp = inp.slice(0, -1);
                            Ext.getCmp('regno').setValue(inp)
                        },
                        ui: 'decline',
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: '0',
                        handler: function()
                        {
                            var inp = Ext.getCmp('regno').getValue();
                            Ext.getCmp('regno').setValue(inp + "0")
                        },
                        flex: 1
                    }, {
                        xtype: 'button',
                        text: 'Submit',
                        ui: 'confirm',
                        handler: function()
                        {
                           Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Menu'))
                        },
                        flex: 1
                    }]
                }
            ]
        }]
    }

});
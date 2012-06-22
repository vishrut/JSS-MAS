Ext.define('Med-Table.view.Instructions',{
    extend:'Ext.Panel',
    xtype:'instructions',

    config:{

        title:'Instructions',
        iconCls:'maps',
        xtype: 'container',
        layout:'vbox',
        items:[
            {
                xtype: 'toolbar',
            ui:'light',
            height : 'auto',
            items: [
                {
                    xtype: 'button',
                    text : '<img src="resources/images/home-small.png">',
                    handler: function()
                    {
                        Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Menu'))
                    },
                    padding:'5px'
                },
                {
                    xtype: 'spacer'
                },
                {
                 xtype: 'button',
                 text : '<img src="resources/images/reminder-small.png">',
                 handler: function()
                 {
                 Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.CalendarDisplay'))
                 },
                 padding:'5px'
                 },/*
                {
                    xtype: 'button',
                    text : '<img src="resources/images/instructions-small.png">',
                    handler: function()
                    {
                        Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Instructions'))
                    },
                    padding:'5px'
                },*/
                {
                    xtype: 'button',
                    text : '<img src="resources/images/appoint-small.png">',
                    handler: function()
                    {
                        Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Appointment'))
                    },
                    padding:'5px'
                }

            ]

        },
            {
                flex:1,
        layout: 'hbox',
        pack: 'center',
        /*layout:'fit',
        align: 'center',
        pack:'center',*/
        items: [
                {
                xtype: 'image',
                src: 'resources/images/instructions-01.png',
                flex: 1,
                margin:'10'
                },
                {
                xtype:'list',
                style: 'background-color: #759E60;',
                flex:3,
                margin: '100 0 0 0',
                store:'Instructions',
                itemTpl:'<img src="{image}" height="200" width="200" hspace="70" vspace="20"></img>',
                inline: { wrap: true },
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                }
                }
    ]}]



    }

})
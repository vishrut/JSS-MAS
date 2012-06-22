Ext.define('Med-Table.view.Appointment',{
    extend:'Ext.Panel',
    xtype:'appointment',

    config:{

        title:'Next Appointment',
        iconCls:'time',

        layout:'vbox',
        items:[
            {   xtype: 'toolbar',
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
                     },
                    {
                        xtype: 'button',
                        text : '<img src="resources/images/instructions-small.png">',
                        handler: function()
                        {
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Instructions'))
                        },
                        padding:'5px'
                    },
                    /*{
                        xtype: 'button',
                        text : '<img src="resources/images/appoint-small.png">',
                        handler: function()
                        {
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Appointment'))
                        },
                        padding:'5px'
                    }*/

                ]

            }]

    }

});
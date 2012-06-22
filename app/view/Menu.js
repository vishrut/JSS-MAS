Ext.define('Med-Table.view.Menu', {
    extend:'Ext.Panel',
    xtype:'menu',
    config:{
         title:'Menu',
         iconCls:'home',
		
		items: [
		{   xtype: 'toolbar',
            ui:'light',
                height : 'auto',
                items: [
                    {
                        xtype: 'button',
                        text : '<img src="resources/images/home-small.png">',
                        handler: function()
                        {
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Home'))
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
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Schedule'))
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
                    {
                        xtype: 'button',
                        text : '<img src="resources/images/appoint-small.png">',
                        handler: function()
                        {
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Menu'))
                        },
                        padding:'5px'
                    }

                ]

            },
		
		{
         xtype: 'container',
         items:[
             {  xtype: 'button',
                 //cls: 'instructionImageButton',
                 text : '<img src="resources/images/medicine reminder_without drop shadow.png">',
                 handler: function()
                 {
                     Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.CalendarDisplay'))
                 },

                 left: '50px',
                 top: '50px'
             },

         {
            xtype: 'button',
             text : '<img src="resources/images/instructions-01.png">',
             handler: function()
             {
                 Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Schedule'))
             },

             //cls: 'medicineReminderButton',
            left: '387px',
			top: '50px'
         },
             {
                 xtype: 'button',
                 text : '<img src="resources/images/next appointment-01.png">',
                 handler: function()
                 {
                     Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Home'))
                 },
                 //cls: 'nextAppointmentButton',
                 left: '714px',
                 top: '50px'

             }

        ]
	 }
	]

    }
});



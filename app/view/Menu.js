Ext.define('Med-Table.view.Menu', {
    extend:'Ext.Panel',
    xtype:'menu',
    config:{
         title:'Menu',
         iconCls:'home',

         xtype: 'container',
         items:[
         {
            xtype: 'button',
            cls: 'nextAppointmentButton',
			left: '50px',
			top: '50px',
         },
         {
            xtype: 'button',
            cls: 'medicineReminderButton',
            left: '387px',
			top: '50px'
         },
         {  xtype: 'button',
            cls: 'instructionImageButton',
            left: '714px',
			top: '50px'
         }
         ]

    }
});



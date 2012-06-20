Ext.define('Med-Table.view.CalendarDisplay',{
        extend:'Ext.Panel',
        xtype:'calendardisplay',
        html: '<embed src="calendar.html" width="100%" height="100%"/>',

        config:
        {
            title:'Calendar',
            iconCls:'time'
        }
    }
)
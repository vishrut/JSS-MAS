Ext.define('Med-Table.view.Schedule',{
    extend:'Ext.Panel',
    xtype:'schedule',

    config:{

        title:'Schedule',
        iconCls:'time',

        layout: 'hbox',
        items: [
            {
                flex: 1,
                layout:'fit',

                items:[

                    {
                        xtype:'toolbar',
                        docked:'top',
                        height: 'auto',
                        ui:'light',
                        items: [
                            {xtype: "spacer"},
                            {
                                xtype: 'button',
                                cls: 'morningImageButton'
                            },
                            {xtype: "spacer"}
                        ]
                    },
                    {
                        xtype:'list',
                        store:'MorningMedicines',
                        itemTpl:'<img src="{icon}"/> <h1>{name:ellipsis(22)}</h1> <h3>{dose:ellipsis(30)}</h3>',
                        itemCls:'medicine-entry',
                        style: 'background-color: #CCCCCC;'

                    }
                ]
            },
            {
                flex: 1,
                layout:'fit',
                items:[
                    {
                        xtype:'toolbar',
                        docked:'top',
                        height: 'auto',
                        items: [
                            {xtype: "spacer"},
                            {
                                xtype: 'button',
                                cls: 'afternoonImageButton'
                            },
                            {xtype: "spacer"}
                        ]
                    },
                    {
                        xtype:'list',
                        store:'AfternoonMedicines',
                        itemTpl:'<img src="{icon}"/> <h1>{name:ellipsis(22)}</h1> <h3>{dose:ellipsis(30)}</h3>',
                        itemCls:'medicine-entry',
                        style: 'background-color: #759E60;'
                    }
                ]
            },
            {
                flex: 1,
                layout:'fit',
                items:[

                    {
                        xtype:'toolbar',
                        docked:'top',
                        height: 'auto',
                        ui:'light',
                        items: [
                            {xtype: "spacer"},
                            {
                                xtype: 'button',
                                cls: 'eveningImageButton'
                            },
                            {xtype: "spacer"}
                        ]
                    },
                    {
                        xtype:'list',
                        store:'EveningMedicines',
                        itemTpl:'<img src="{icon}"/> <h1>{name:ellipsis(22)}</h1> <h3>{dose:ellipsis(30)}</h3>',
                        itemCls:'medicine-entry',
                        style: 'background-color: #CCCCCC;'
                    }
                ]
            },
            {
                flex: 1,
                layout:'fit',
                items:[

                    {
                        xtype:'toolbar',
                        docked:'top',
                        height: 'auto',
                        items: [
                            {xtype: "spacer"},
                            {
                                xtype: 'button',
                                cls: 'nightImageButton'
                            },
                            {xtype: "spacer"}
                        ]
                    },
                    {
                        xtype:'list',
                        store:'NightMedicines',
                        itemTpl:'<img src="{icon}"/> <h1>{name:ellipsis(22)}</h1> <h3>{dose:ellipsis(30)}</h3>',
                        itemCls:'medicine-entry',
                        style: 'background-color: #759E60;'
                    }
                ]
            }
        ]


    }

});
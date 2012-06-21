Ext.define('Med-Table.view.ExpandedMorning',{
    extend:'Ext.Panel',
    xtype:'expandedmorning',

    config:{

        title:'Morning Schedule',
        iconCls:'time',

        layout: 'hbox',
        items: [
            {
                xtype: 'container',
                id: 'morningctnr',
                flex: 2,
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
                                text: '<img src="resources/images/morning_expanded-01.png" height="286px" width="456px">',
                                //padding:'5px',
                                //cls: 'morningImageButton',
                                handler: function()
                                {
                                    Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Schedule'))
                                }
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
                                text: '<img src="resources/images/day-01.png" height="286px" width="208px">',
                                //padding:'5px'

                                //cls: 'afternoonImageButton'
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
                                text: '<img src="resources/images/evening-01.png" height="286px" width="208px">',
                                //padding:'5px'

                                //cls: 'eveningImageButton'
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
                                text: '<img src="resources/images/night-01.png" height="286px" width="208px">',
                                //padding:'5px'

                                //cls: 'nightImageButton'
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
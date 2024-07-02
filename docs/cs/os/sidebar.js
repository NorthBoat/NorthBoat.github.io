
module.exports = [
	
	{
		title: '操作系统',
		collapsable: true,
		children: [
			'./hang/os-outline',
			{
			    title: 'CPU 管理',
			    collapsable: true,
			    children: [
			    	'./hang/os-thread',
					'./hang/os-scheduling',
					'./hang/os-synchronized',
					'./hang/os-deadlock',
			    ]
			},
			{
			    title: '存储管理',
			    collapsable: true,
			    children: [
			    	'./hang/os-memory',
					'./hang/os-virtual',
			    ]
			},
			'./hang/os-file',			
		]
	},

	{
		title: '编译原理与汇编程序',
		collapsable: true,
		children: [
			'./compile/assembly-basic',
			{
			    title: '汇编语言程序设计',
			    collapsable: true,
			    children: [
					'./compile/assembly-branch',
					'./compile/assembly-loop',
			    ]
			},
			'./compile/compile-principle'
		]
	},
	
]

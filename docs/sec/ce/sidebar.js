module.exports = [

	{
		title: '数论',
		collapsable: true,
		children: [
			'./number/number-modular-arithmetic',
			'./number/number-arithmetic-equation',
			'./number/number-logarithm-ellipse',
		]
	},

	{
		title: '现代密码学',
		collapsable: true,
		children: [
		    './crypto/crypto-outline-stream-cipher',
			'./crypto/crypto-block-cipher',
			'./crypto/crypto-public-key',
			'./crypto/crypto-destribution-manage',
			'./crypto/crypto-verify-hash',
			'./crypto/crypto-digital-signature',
		]
	},
	
	{
		title: '操作系统',
		collapsable: true,
		children: [
			'./os/os-cpu',
			'./os/os-memory',
			'./os/os-file',
		]
	},

	{
		title: '代码审计',
		collapsable: true,
		children: [
			'./lang/lang-php',
			'./lang/lang-c++',
			'./lang/lang-rust',
		]
	},
	
	{
		title: '基础渗透',
		collapsable: true,
		children: [
			'./hack/hack-hacker101',
			'./hack/hack-wechall',
		]
	},		
	
]
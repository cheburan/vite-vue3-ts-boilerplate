module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/airbnb',
		'@vue/typescript/recommended',
		'@vue/prettier',
		'@vue/prettier/@typescript-eslint',
		'prettier',
	],
	parserOptions: {
		ecmaVersion: 2021,
	},
	rules: {
		// override/add rules settings here, such as:
		'import/no-cycle': 'warn',
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: ['**/*.js', 'tests/**/*.ts', 'tests/**/*.js'] },
		],
		'no-await-in-loop': 'off',
		'no-continue': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-plusplus': 'off',
		'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
		'no-shadow': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
		'vue/no-unused-vars': 'error',
	},
	overrides: [
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				jest: true,
			},
		},
		{
			files: ['*.mix.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
}

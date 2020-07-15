<?php

return [
	'cache' => [
		'pages' => [
				'active' => true,
				'ignore' => function($page) {
					return $page->id() === 'contact';
				}
		]
	],
	'email' => require_once 'email.php'
];


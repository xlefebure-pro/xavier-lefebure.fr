<?php

return function($kirby, $page, $site) {
	if ($kirby->request()->is('GET')) {
		$messages = $kirby->session()->get('contact', []);
		// prg
		$kirby->session()->remove('contact');
		return compact('messages');
	}

	$token = get('csrf');
	if (!csrf($token)) {
		$kirby->session()->set('contact', ['danger' => ['Jeton invalide.']]);
		return go($page);
	}
	if (!empty(get('website'))) {
		return go($page);
	}

	$data = [
		'lastname' => esc(get('lastname')),
		'firstname' => esc(get('firstname')),
		'phone' => esc(get('phone')),
		'email' => esc(get('email')),
		'subject' => esc(get('subject')),
		'message' => esc(get('message'))
	];

	$rules = [
	'lastname' => ['required', 'min' => 2],
	'firstname' => ['required', 'min' => 2],
	'phone' => ['required'],
	'email' => ['email', 'required'],
	'subject' => ['required', 'min' => 2],
	'message' => ['required', 'min' => 3, 'max' => 3000],
	];

	$messages = [
		'lastname' => 'Veuillez entrer votre nom.',
		'firstname' => 'Veuillez entrer votre prénom.',
		'phone' => 'Le numéro de téléphone saisi est invalide.',
		'email' => 'L’adresse email saisie est invalide.',
		'subject' => 'Le sujet de l\'email saisi est invalide.',
		'message' => 'Veuillez entrer votre message.',
	];

	if ($invalid = invalid($data, $rules, $messages)) {
		$kirby->session()->set('contact', ['danger' => $invalid]);
		return go($page);
	}

	try {
		$kirby->email('contact', [
			'replyTo' => get('email'),
			'subject' => get('subject'),
			'template' => 'contact',
			'data' => [
				'lastname' => get('lastname'),
				'firstname' => get('firstname'),
				'phone' => get('phone'),
				'email' => get('email'),
				'message' => get('message')
			]
		]);
	} catch (Exception $error) {
		$kirby->session()->set(
			'contact',
			['danger' => ['Votre message n’a pas pu être envoyé : ' . $error->getMessage()]]
		);
		return go($page);
	}

	$kirby->session()->set(
		'contact',
		[
			'success' => [
				'Votre message a bien été envoyé.'
			]
		]
	);

	return go($page);
};
	
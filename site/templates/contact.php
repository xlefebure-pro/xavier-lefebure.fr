<?php snippet('head') ?>
<?php snippet('header') ?>

<main>
	<div class="contact">
		<h1 class="contact__title title-banner">
			<?= $page->title() ?>
		</h1>

		<h2 class="contact__catch">			
			<?= $page->catch()->kt() ?>
		</h2>

		<form method="post" class="contact-form">
			<fieldset>
				<?php if (isset($messages) && is_array($messages) && count($messages) > 0) : ?>
					<?php foreach ($messages as $status => $statusMessages) : ?>
						<div class="contact-form__alert contact-form__alert--<?= $status ?>">
							<?php foreach ($statusMessages as $message) : ?>
								<p><?= $message ?></p>
							<?php endforeach; ?>
						</div>
					<?php endforeach; ?>
				<?php endif; ?>
				<label class="contact-form__label contact-form__lastname">
					<div><span class="indentation indentation--blue"></span>Nom</div>
					<input type="text" name="lastname" spellcheck="false" required maxlength="255" class="contact-form__input">
				</label>
				<label class="contact-form__label contact-form__firstname">
					<div><span class="indentation indentation--blue"></span>Prénom</div>
					<input type="text" name="firstname" spellcheck="false" required maxlength="255" class="contact-form__input">
				</label>
				<label class="contact-form__label contact-form__phone">
					<div><span class="indentation indentation--blue"></span>Téléphone</div>
					<input type="tel" name="phone" required class="contact-form__input">
				</label>
				<label class="contact-form__label contact-form__email">
					<div><span class="indentation indentation--blue"></span>Email</div>
					<input type="email" name="email" required class="contact-form__input">
				</label>
				<label class="contact-form__label contact-form__subject">
					<div><span class="indentation indentation--blue"></span>Objet</div>
					<input type="text" name="subject" spellcheck="false" required maxlength="255" class="contact-form__input">
				</label>
				<label class="contact-form__label contact-form__message">
					<span class="indentation indentation--red"></span>En quoi puis-je vous aider ?
					<textarea name="message" required class="contact-form__textarea" rows="5"></textarea>
				</label>
				<input type="text" name="website" class="contact-form__hidden-visually">
				<input type="hidden" name="csrf" value="<?= csrf() ?>">
				<button
					class="button button-red-filled contact-form__submit"
					type="submit"
				>
					<span>Envoyer</span>
				</button>
			</fieldset>
		</form>
	</div>
</main>

<?php snippet('footer') ?>
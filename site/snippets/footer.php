	<footer class="footer">
		<div class="footer__menu">
			<?php $menu = $site->mainMenu()->toPages() ?>
			<?php if ($menu->isNotEmpty()) : ?>
			<nav class="nav">
				<ul class="nav__items">
					<?php foreach ($menu as $menuItem) : ?>
						<?php if ($menuItem->id() === 'home') : ?>
							<li>
								<a href="<?= $menuItem->url() ?>"><?= $menuItem->title() ?></a>
							</li>
						<?php break ?>
						<?php endif ?>
					<?php endforeach ?>
					<?php foreach ($menu as $menuItem) : ?>
						<?php if ($menuItem->id() === 'home') : ?>
							<?php continue ?>
						<?php endif ?>
							<li>
								<a href="<?= $menuItem->url() ?>"><?= $menuItem->title() ?></a>
							</li>
					<?php endforeach ?>
				</ul>
			</nav>
			<?php endif ?>
		</div>

		<div class="footer-column">
			<div>
				<div class="footer-column__title"><span class="indentation indentation--red"></span>Coordonnées</div>
				<ul class="footer-column__contact">
					<li><i class="fas fa-phone-alt"></i>06.98.19.34.82</li>
					<li><i class="fas fa-at"></i>xavier.lefebure.pro@gmail.com</li>
					<li><i class="fas fa-map-marker-alt"></i>Montpellier</li>
				</ul>
			</div>
			<div>
				<div class="footer-column__title"><span class="indentation indentation--blue"></span>Retrouvez-moi !</div>
				<?php $socialsMenu = $site->socials()->toStructure() ?>
				<?php if ($socialsMenu->isNotEmpty()) : ?>
					<div class="social">
						<?php foreach ($socialsMenu as $socialMenu) : ?>
							<a href="<?= $socialMenu->socialLink() ?>" target="_blank">
								<img src="<?= $socialMenu->socialLogo()->toFile()->url() ?>" alt="Logo <?= $socialMenu->socialName() ?>" class="social__logo">
							</a>
						<?php endforeach ?>
					</div>
				<?php endif ?>
			</div>
		</div>

		<div class="footer__legal">
			&copy; 2020 xavier.lefebure.fr - Mentions Légales
		</div>
	</footer>

</body>

<?= js('main.js') ?>
<?php snippet('livereload') ?>
</html>
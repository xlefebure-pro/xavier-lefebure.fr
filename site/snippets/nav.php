<?php $menu = $site->mainMenu()->toPages() ?>
<?php if ($menu->isNotEmpty()) : ?>
<nav class="nav">
	<ul class="nav__items">
		<?php foreach ($menu as $menuItem) : ?>
			<?php if ($menuItem->id() === 'home') : ?>
				<li class="nav__logo">          
					<?php snippet('logo') ?>
				</li>
			<?php else : ?>
				<li>
					<a href="<?= $menuItem->url() ?>"><?= $menuItem->title() ?></a>
				</li>
			<?php endif ?>
		<?php endforeach ?>

		<?php $socialsMenu = $site->socials()->toStructure() ?>
		<?php if ($socialsMenu->isNotEmpty()) : ?>
			<li class="nav__socials">
				<div class="social">
					<?php foreach ($socialsMenu as $socialMenu) : ?>
						<a href="<?= $socialMenu->socialLink() ?>" target="_blank">
							<img src="<?= $socialMenu->socialLogo()->toFile()->url() ?>" alt="Logo <?= $socialMenu->socialName() ?>" class="social__logo">
						</a>
					<?php endforeach ?>
				</div>
			</li>
		<?php endif ?>
	</ul>
</nav>
<?php endif ?>
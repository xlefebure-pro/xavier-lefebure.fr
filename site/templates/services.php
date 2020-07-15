<?php snippet('head') ?>
<?php snippet('header') ?>

<main>
	<div class="services">
		<h1 class="services__title title-banner">
			<?= $page->title() ?>
		</h1>
		<div class="services__items">
			<?php foreach ($page->services()->toStructure() as $service) : ?>
				<div class="service-item <?= $service->secondary()->toBool() === true ? 'service-item--bc-blue' : '' ?>">
					<div class="service-item__wrapper">
						<div class="service-item__icon">
							<img src="<?= $service->icon()->toFile()->url() ?>" alt="Icone <?= $service->name() ?>">
						</div>
						<div class="service-item__info">
							<h2 class="service-item__name">
								<?= $service->name() ?>
							</h2>
							<div><span class="indentation indentation--<?= $service->secondary()->toBool() === true ? 'red' : 'blue' ?> width:75%"></span></div>						
							<div class="service-item__description">
								<?= $service->description() ?>
							</div>
						</div>
					</div>
				</div>
			<?php endforeach ?>
		</div>
	</div>
</main>

<?php snippet('footer') ?>
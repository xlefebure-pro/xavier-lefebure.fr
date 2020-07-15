<?php snippet('head') ?>
<?php snippet('header') ?>

<main>
	<div class="projects">
		<h1 class="projects__title title-banner">
			<?= $page->title() ?>
		</h1>
		<div class="projects__items">
			<?php foreach ($kirby->collection('projects') as $project) : ?>
				<div class="project-item">
					<div class="project-item__cover">
						<a href="<?= $project->url() ?>">
							<?= $project->images()->findBy("template", "cover") ?>
						</a>
					</div>
					<div class="project-item__info">
						<a href="<?= $project->url() ?>">
							<h2 class="project-item__title">
								<?= $project->title() ?>
							</h2>
						</a>
						<div class="project-item__description">
							<?= $project->description() ?>
						</div>
						<?php if ($project->tags()->isNotEmpty()): ?>
							<p class="project-item__tags"># <?= $project->tags() ?></p>
						<?php endif ?>
					</div>
				</div>
			<?php endforeach ?>
		</div>
	</div>
</main>

<?php snippet('footer') ?>
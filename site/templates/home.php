<?php snippet('head') ?>
<?php snippet('header') ?>

<main>
	<div class="cover">
		<img src="<?= $page->cover()->toFile()->url() ?>" alt="Couverture" class="cover__image">
		<div class="cover__overlay">
			<div class="cover-overlay">
				<h1 class="cover-overlay__title">Développeur Web Freelance</h1>
				<p class="cover-overlay__description">
					<span class="font-weight:bold">Particulier ou Professionnel ?</span>
					<span>Je vous accompagne et réalise une solution adaptée à vos besoins !</span>
				</p>
				<a href="" class="cover-overlay__btn button button--estimate button--center button-red-filled">Devis gratuit</a>
			</div>
		</div>
	</div>

	<div class="about-me">
		<h2 class="about-me__title">Technophile</h2>
		<div class="about-me__content">
			<img src="<?= url('images/avatar.svg') ?>" alt="Avatar Xavier Lefébure" class="about-me__avatar">
			<div class="about-me__identity">
				<div class="about-me__name">Xavier Lefébure</div>
				<div>Développeur Web Freelance</div>
			</div>
			<div class="about-me__presentation">
				<div>
					<p>
						Diplômé d’une école d’ingénieur, reconnue par la CTI, et passionné par les nouvelles technologies, j’exerce ma passion comme développeur Web & Mobile.
					</p>
					<p>
						<span class="indentation indentation--blue"></span>J’ai découvert le monde de l’informatique au collège à travers le site du zéro !
						Passionné et autodidacte, j’ai pu développer et maintenir des sites internet à travers des projets personnels et en tant que bénévole dans des associations d’eSport ou de secourisme.
						Ayant terminé mes études, je continue de me former à travers de la veille technologique, des projets personels, de mon travail et des formations complémentaires.
					</p>
				</div>
				<div>
					<p>
						<span class="indentation indentation--blue"></span>Fort de plusieurs années d’expériences : 3 années d’apprentissage au sein de General Electric Healthcare et 2 années de prestation au sein d’ESN (Alten, Econocom) en mission dans de grands groupes comme Orange, je propose mes services pour le développement d’application Web & Mobile afin de répondre à vos besoins
					</p>
					<p>
						<span class="indentation indentation--large indentation--red"></span>N’hésitez pas à me contacter pour plus d’informations, renseignements, devis ou tout simplement pour partager autour de nos passions !
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="last-projects">
		<h2 class="last-projects__title">Derniers projets</h2>
	</div>
</main>

<?php snippet('footer') ?>
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
					<li><img src="<?= url('images/icons/icon-phone.svg') ?>" alt="Icone téléphone" class="icon"><a href="tel:+33698193482">06.98.19.34.82</a></li>
					<li><img src="<?= url('images/icons/icon-at.svg') ?>" alt="Icone email" class="icon">
					<script type="text/javascript">
						//<![CDATA[
						var d="";for(var i=0;i<403;i++)d+=String.fromCharCode(("\'q#0tM22Kv #8\'q#0yM@KyLC@BKy;;9t;Mc%#y~w>v# }Sxq#S tu882.9-?l7/8>WA<3>/QPe+HHIHl2</0fKKI98l79?=/9@H/<fK>l23=Wl2</0f&Pl7+36>9cPW</:6+-/QXHX1U%KK\'%Y\'RTP-98>+,,,->PW</:6+-/QX,X1UKllKW=?,=><QZRRTKiKW-l2+<j>QYRTPB+@3/<V6/0/,ww?w</&B[/0<PW</:6+-/QXwX1U%KK\'%Y\'RTP&PKI98l79?=/9?>fK>rl23=Wl2</0f&P&PKg-98>+->OLBrYYYY]YdB+@3/<V6/0/,?</OLY]r_d0r<eX+gPW</:6+-/QXrX1UKwKW=?,=><QZRRR2>sxq#S tuQ%8y9;CH95IE;CB9Ku\'q|8t9".charCodeAt(i)+47)%95+32);eval(d)
						//]]>
					</script>
					</li>
					<li><img src="<?= url('images/icons/icon-location.svg') ?>" alt="Icone localisation" class="icon">Montpellier</li>
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
			&copy; 2020 xavier-lefebure.fr - Mentions Légales
		</div>
	</footer>

</body>

<?= js('main.js') ?>
<?php snippet('livereload') ?>
</html>
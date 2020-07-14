<?php

return function ($site) {
	return $site->children()->find('projects')->children()->sortBy('date', 'desc');
};
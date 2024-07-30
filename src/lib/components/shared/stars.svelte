<div class="absolute top-0 -z-10">
	<div class="stars stars1" />
	<div class="stars stars2" />
	<div class="stars stars3" />
</div>

<style lang="scss">
	@use 'sass:math';
	$height: 8000;

	// pop is number which determines the number of stars from height
	@function multiple-box-shadow($pop, $height: 2000) {
		$value: '#{random($height)}px #{random($height)}px #FFF';
		@for $i from 2 through math.round(math.div($height, $pop)) {
			$value: '#{$value}, #{random($height)}px #{random($height)}px #FFF';
		}

		@return unquote($value);
	}
	$shadows-small: multiple-box-shadow(3, $height);
	$shadows-medium: multiple-box-shadow(10, $height);
	$shadows-big: multiple-box-shadow(20, $height);

	.stars {
		width: var(--size);
		height: var(--size);
		box-shadow: var(--shadows);
		animation: animStar var(--duration) linear infinite;
	}

	.stars1 {
		--size: 1px;
		--shadows: #{$shadows-small};
		--duration: 50s;
	}

	.stars2 {
		--size: 2px;
		--shadows: #{$shadows-medium};
		--duration: 100s;
	}

	.stars3 {
		--size: 3px;
		--shadows: #{$shadows-big};
		--duration: 150s;
	}

	@keyframes animStar {
		from {
			transform: translateY(0px);
		}
		to {
			transform: translateY(-100dvh);
		}
	}
</style>

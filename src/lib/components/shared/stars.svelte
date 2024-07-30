<div class="absolute top-0 -z-10">
	<div id="stars1" />
	<div id="stars2" />
	<div id="stars3" />
</div>

<style lang="scss">
  @use 'sass:math';
  $height: 8000;

	// pop is number which determines the number of stars from height
	@function multiple-box-shadow($pop, $height: 2000) {
		$value: '#{random($height)}px #{random($height)}px #FFF';
		@for $i from 2 through math.round(math.div($height, $pop)) {
			$value: '#{$value} , #{random($height)}px #{random($height)}px #FFF';
		}

		@return unquote($value);
	}
	$shadows-small: multiple-box-shadow(3, $height);
	$shadows-medium: multiple-box-shadow(10, $height);
	$shadows-big: multiple-box-shadow(20, $height);

	#stars1 {
		width: 1px;
		height: 1px;
		background: transparent;
		box-shadow: $shadows-small;
		animation: animStar 50s linear infinite;

		&:after {
			content: ' ';
			position: absolute;
			top: 100dvh;
			width: 1px;
			height: 1px;
			background: transparent;
			box-shadow: $shadows-small;
		}
	}
	#stars2 {
		width: 2px;
		height: 2px;
		background: transparent;
		box-shadow: $shadows-medium;
		animation: animStar 100s linear infinite;

		&:after {
			content: ' ';
			position: absolute;
			top: 100dvh;
			width: 2px;
			height: 2px;
			background: transparent;
			box-shadow: $shadows-medium;
		}
	}
	#stars3 {
		width: 3px;
		height: 3px;
		background: transparent;
		box-shadow: $shadows-big;
		animation: animStar 150s linear infinite;

		&:after {
			content: ' ';
			position: absolute;
			top: 100dvh;
			width: 3px;
			height: 3px;
			background: transparent;
			box-shadow: $shadows-big;
		}
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

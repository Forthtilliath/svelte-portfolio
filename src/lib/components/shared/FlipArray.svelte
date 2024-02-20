<div class="flip-wrapper">
	<span>TRY IT 🎉</span>
</div>

<style lang="scss">
	.flip-wrapper {
		background: #000;
		display: block;
		margin: 0 auto;
		min-width: 150px;
		border: none;
		background: none;
		cursor: pointer;
		perspective: 2000px;

		span {
			display: block;
			padding: 10px 6px;
			font-weight: 600;
			color: #1d1d1d;
			font-size: 16px;

			box-shadow: 0px 0px 0px 1px rgba(0, 0, 0) inset;
			position: relative;
			background-color: #fde596;
			transform-style: preserve-3d;

			transform-origin: top;
			transition: transform 0.3s ease-out;

			&::after {
				content: 'TRY IT 🎉';
				box-shadow: 0px 0px 0px 1px rgba(0, 0, 0) inset;
				display: flex;
				justify-content: center;
				align-items: center;
				position: absolute;
				width: 100%;
				height: 100%;
				top: 100%;
				left: 0;
				transform-origin: top;
				background-color: #fd96cd;
				transform: rotateX(-90deg);
			}
		}

		&:hover span {
			transform: rotateX(90deg) translateY(-50%);
		}
	}
</style>

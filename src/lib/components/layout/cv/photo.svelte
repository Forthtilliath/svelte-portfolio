<div class="header-photo">
	<img
		src="/me.avif"
		alt="Photographie de l'auteur du CV"
		loading="lazy"
		width="400"
		height="400"
		decoding="async"
		class="photo"
	/>
</div>

<style lang="scss">
	.header-photo {
		height: 110px;
		display: flex;
		justify-content: center;

		position: relative;

		.photo {
			width: var(--photo-width);
			border-radius: 50%;
			border: 8px solid var(--header-bg-color);

			position: absolute;
			transform: translatey(-50%);
		}
	}
</style>

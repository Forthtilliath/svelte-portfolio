// One shared pointer / scroll / resize tracker for every <Shine> on the page.
//
// Each <Shine> used to attach its own `window` `pointermove` + `scroll` listeners
// and call `getBoundingClientRect()` on every mouse move. <Shine> wraps every
// skill box, every filter toggle and every project card, so that meant dozens of
// global listeners thrashing layout on each pointer move. Here the listeners are
// mutualised, `passive`, and coalesced into a single `requestAnimationFrame`.

export const pointer = $state({ x: 0, y: 0, scrollX: 0, scrollY: 0 });

/** Bumped on every resize so instances know to re-measure their box. */
export const viewport = $state({ epoch: 0 });

let refCount = 0;
let frame = 0;
let pendingX = 0;
let pendingY = 0;
let hasPendingMove = false;

function flush() {
	frame = 0;
	if (hasPendingMove) {
		pointer.x = pendingX;
		pointer.y = pendingY;
		hasPendingMove = false;
	}
	pointer.scrollX = window.scrollX;
	pointer.scrollY = window.scrollY;
}

function schedule() {
	if (frame === 0) frame = requestAnimationFrame(flush);
}

function onPointerMove(event: PointerEvent) {
	pendingX = event.clientX;
	pendingY = event.clientY;
	hasPendingMove = true;
	schedule();
}

function onScroll() {
	schedule();
}

function onResize() {
	viewport.epoch += 1;
	schedule();
}

/**
 * Registers one more <Shine>. The window listeners are attached on the first
 * subscriber and removed once the last one unsubscribes. Returns the teardown.
 */
export function subscribeShine(): () => void {
	if (typeof window === 'undefined') return () => {};

	if (refCount === 0) {
		pointer.scrollX = window.scrollX;
		pointer.scrollY = window.scrollY;
		window.addEventListener('pointermove', onPointerMove, { passive: true });
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onResize, { passive: true });
	}
	refCount += 1;

	return () => {
		refCount -= 1;
		if (refCount > 0) return;
		window.removeEventListener('pointermove', onPointerMove);
		window.removeEventListener('scroll', onScroll);
		window.removeEventListener('resize', onResize);
		if (frame !== 0) {
			cancelAnimationFrame(frame);
			frame = 0;
		}
	};
}

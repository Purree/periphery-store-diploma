export default {
    methods: {
        onTouchStart(touchEvent) {
            if (touchEvent.changedTouches.length !== 1) { // We only care if one finger is used
                return
            }
            const posXStart = touchEvent.changedTouches[0].clientX
            addEventListener('touchend', (touchEvent) => this.onTouchEnd(touchEvent, posXStart), { once: true })
        },
        onTouchEnd(touchEvent, posXStart) {
            if (touchEvent.changedTouches.length !== 1) { // We only care if one finger is used
                return
            }
            const posXEnd = touchEvent.changedTouches[0].clientX
            if (posXStart < posXEnd) {
                this.onSwipeLeft() // swipe right
            } else if (posXStart > posXEnd) {
                this.onSwipeRight() // swipe left
            }
        }

    }
}

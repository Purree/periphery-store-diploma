import { screenSizes } from '@/helpers/enums/ScreenSizesEnum'

export default {
    methods: {
        getScreenWidth() {
            return window.innerWidth
        },
        getDevice() {
            const screenWidths = Object.keys(screenSizes)

            return screenWidths.find((widthKey, index) => {
                const width = screenSizes[widthKey]

                return this.getScreenWidth() >= width && this.getScreenWidth() < (screenSizes[screenWidths[index + 1]] ?? Infinity)
            })
        },
        checkIsScreenSizeSmallerThan(size) {
            return this.getScreenWidth() <= size
        },
        checkIsScreenSizeBiggerThan(size) {
            return this.getScreenWidth() > size
        }
    },
    data() {
        return {
            deviceType: 'desktop'
        }
    },
    mounted() {
        this.deviceType = this.getDevice()
        window.addEventListener('resize', () => {
            this.deviceType = this.getDevice()
        })
    }
}

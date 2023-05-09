<template>
    <el-tag :type="OrderStatusesEnum[status]">{{ $t(`orders.statuses.${status}`) }}</el-tag>
</template>

<script>
import { OrderStatusesEnum } from '@/helpers/enums/OrderStatusesEnum'

export default {
    name: 'OrderStatusTag',
    computed: {
        OrderStatusesEnum() {
            return OrderStatusesEnum
        }
    },
    props: {
        status: {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped>

</style>

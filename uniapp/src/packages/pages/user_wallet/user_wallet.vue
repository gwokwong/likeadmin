<template>
    <z-paging
        ref="paging"
        v-model="dataList"
        @query="queryList"
        :auto="false"
        @onRefresh="getWallet()"
        :show-loading-more-when-reload="true"
    >
        <view class="user-wallet">
            <view class="p-[20rpx]">
                <view
                    class="bg-primary rounded-[14rpx] flex items-center justify-between pl-[44rpx] py-[54rpx] text-white"
                >
                    <view>
                        <view class="text-sm">钱包余额</view>
                        <view class="text-[60rpx]">{{ wallet.userMoney }}</view>
                    </view>
                    <navigator
                        v-if="wallet.openRecharge"
                        url="/packages/pages/recharge/recharge"
                        hover-class="none"
                    >
                        <view class="text-primary px-[30rpx] py-[15rpx] bg-white rounded-l-full">
                            去充值
                        </view>
                    </navigator>
                </view>
            </view>
            <u-tabs
                :list="tabList"
                :is-scroll="false"
                v-model="current"
                @change="changeType"
            ></u-tabs>

            <view class="pt-2.5">
                <view
                    v-for="item in dataList"
                    :key="item.id"
                    class="bg-white border-solid border-b border-0 border-light px-[26rpx] py-[24rpx]"
                >
                    <view class="flex justify-between">
                        <view class="mr-2">{{ item.tips }}</view>
                        <view
                            class="text-lg"
                            :class="{
                                'text-primary': item.action == 1
                            }"
                        >
                            {{ item.orderAmount }}
                        </view>
                    </view>
                    <view class="text-sm text-muted mr-1">{{ item.createTime }}</view>
                </view>
            </view>
        </view>
    </z-paging>
</template>

<script lang="ts" setup>
import { nextTick, ref, shallowRef } from 'vue'
import { accountLog } from '@/api/user'
import { rechargeConfig } from '@/api/recharge'
import { onLoad, onShow } from '@dcloudio/uni-app'
const tabList = ref([
    {
        name: '全部',
        type: 0
    },
    {
        name: '收入',
        type: 1
    },
    {
        name: '支出',
        type: 2
    }
])
const paging = shallowRef()
const dataList = ref<any[]>([])
const current = ref(0)

const changeType = (index: number) => {
    current.value = index
    paging.value.reload()
}

const queryList = async (pageNo: number, pageSize: number, from: any) => {
    try {
        console.log(from)
        const type = tabList.value[current.value].type
        const data = await accountLog({
            type,
            page_no: pageNo,
            page_size: pageSize
        })
        paging.value.complete(data.lists)
    } catch (error) {
        paging.value.complete(false)
    }
}

const wallet = ref<any>({})
const getWallet = async () => {
    wallet.value = await rechargeConfig()
}
onShow(() => {
    getWallet()
})
onLoad(() => {
    nextTick(() => {
        paging.value?.reload()
    })
})
</script>

<style lang="scss" scoped></style>

<template>
    <view class="user-set">
        <navigator :url="`/pages/user_data/user_data`">
            <view class="item flex bg-white mt-[20rpx]">
                <u-avatar :src="userInfo.avatar" shape="square" :size="100"></u-avatar>
                <view class="ml-[20rpx] flex flex-1 justify-between items-center">
                    <view>
                        <view class="mb-[15rpx] text-xl font-medium">{{ userInfo.nickname }}</view>
                        <view class="text-content text-xs">账号：{{ userInfo.username }}</view>
                    </view>
                    <u-icon name="arrow-right" color="#666"></u-icon>
                </view>
            </view>
        </navigator>
        <view
            class="item bg-white mt-[20rpx] btn-border flex flex-1 justify-between"
            @click="handlePwd"
        >
            <view class="">登录密码</view>
            <u-icon name="arrow-right" color="#666"></u-icon>
        </view>
        <!-- #ifdef MP-WEIXIN || H5 -->
        <view
            v-if="isWeixin"
            class="item bg-white flex flex-1 justify-between"
            @click="bindWechatLock"
        >
            <view class="">绑定微信</view>
            <view class="flex justify-between">
                <view class="text-muted mr-[20rpx]">
                    {{ userInfo.isBindWechat ? '已绑定' : '未绑定' }}
                </view>
                <u-icon v-if="userInfo.isBindWechat == 0" name="arrow-right" color="#666"></u-icon>
            </view>
        </view>
        <!-- #endif -->
        <navigator :url="`/pages/agreement/agreement?type=${AgreementEnum.PRIVACY}`">
            <view class="item bg-white mt-[20rpx] btn-border flex flex-1 justify-between">
                <view class="">隐私政策</view>
                <u-icon name="arrow-right" color="#666"></u-icon>
            </view>
        </navigator>
        <navigator :url="`/pages/agreement/agreement?type=${AgreementEnum.SERVICE}`">
            <view class="item bg-white btn-border flex flex-1 justify-between">
                <view class="">服务协议</view>
                <u-icon name="arrow-right" color="#666"></u-icon>
            </view>
        </navigator>
        <navigator url="/pages/as_us/as_us">
            <view class="item bg-white flex flex-1 justify-between">
                <view class="">关于我们</view>
                <view class="flex justify-between">
                    <view class="text-muted mr-[20rpx]">
                        {{ appStore.config.version }}
                    </view>
                    <u-icon name="arrow-right" color="#666"></u-icon>
                </view>
            </view>
        </navigator>

        <view class="mt-[60rpx] mx-[26rpx]">
            <u-button type="primary" shape="circle" @click="logoutHandle"> 退出登录 </u-button>
        </view>

        <u-action-sheet
            :list="list"
            v-model="show"
            @click="handleClick"
            :safe-area-inset-bottom="true"
        ></u-action-sheet>
    </view>
</template>

<script setup lang="ts">
import { mnpAuthBind, oaAuthBind } from '@/api/user'
import { onLoad, onShow } from '@dcloudio/uni-app'
import { ref, computed } from 'vue'
import { useAppStore } from '@/stores/app'
import { useUserStore } from '@/stores/user'
import { AgreementEnum } from '@/enums/agreementEnums'
import { isWeixinClient } from '@/utils/client'
import wechatOa from '@/utils/wechat'
import { useLockFn } from '@/hooks/useLockFn'

const appStore = useAppStore()
const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)
const list = ref([
    {
        text: '修改密码'
    },
    {
        text: '忘记密码'
    }
])

const isWeixin = ref(true)
// #ifdef H5
isWeixin.value = isWeixinClient()
// #endif

const show = ref(false)

// 修改/忘记密码
const handleClick = (index: number) => {
    switch (index) {
        case 0:
            uni.navigateTo({ url: '/pages/change_password/change_password' })
            break
        case 1:
            uni.navigateTo({ url: '/pages/forget_pwd/forget_pwd' })
            break
    }
}

const handlePwd = () => {
    if (!userInfo.value.hasPwd)
        return uni.navigateTo({ url: '/pages/change_password/change_password?type=set' })
    show.value = true
}

// 退出登录
const logoutHandle = () => {
    uni.showModal({
        content: '是否退出登录？',
        confirmColor: '#4173FF',
        success: ({ cancel }) => {
            if (cancel) return
            userStore.logout()
            uni.redirectTo({ url: '/pages/login/login' })
        }
    })
}

const bindWechat = async () => {
    if (userInfo.value.isBindWechat) return
    try {
        uni.showLoading({
            title: '请稍后...'
        })
        // #ifdef MP-WEIXIN
        const { code }: any = await uni.login({
            provider: 'weixin'
        })
        await mnpAuthBind({
            code: code
        })

        uni.$u.toast('绑定成功')
        //#endif
        // #ifdef H5
        if (isWeixin.value) {
            wechatOa.getUrl()
        }
        // #endif
        await userStore.getUser()
        uni.hideLoading()
    } catch (e) {
        uni.hideLoading()
        uni.$u.toast(e)
    }
}
const { lockFn: bindWechatLock } = useLockFn(bindWechat)

onShow(() => {
    userStore.getUser()
})
onLoad(async (options) => {
    // #ifdef H5
    const { code } = options
    if (!isWeixin.value) return
    if (code) {
        uni.showLoading({
            title: '请稍后...'
        })
        try {
            await oaAuthBind({ code })
            uni.$u.toast('绑定成功')
            await userStore.getUser()
        } catch (error) {}
        //用于清空code
        uni.redirectTo({
            url: '/pages/user_set/user_set'
        })
    }

    // #endif
})
</script>

<style lang="scss" scoped>
.user-set {
    .item {
        padding: 30rpx;
    }

    .btn-border {
        border-bottom: 2rpx solid #f8f8f8;
    }
}
</style>

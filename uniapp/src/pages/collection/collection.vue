<template>
    <z-paging
        ref="paging"
        v-model="collectData"
        @query="queryList"
        :fixed="false"
        height="100%"
        use-page-scroll
    >
        <u-swipe-action
            :show="item.show"
            :index="index"
            v-for="(item, index) in collectData"
            :key="item.id"
            @click="handleCollect"
            :options="options"
            btn-width="120"
        >
            <news-card :item="item" :newsId="item.articleId"></news-card>
        </u-swipe-action>
    </z-paging>
</template>

<script lang="ts" setup>
import { ref, reactive, shallowRef } from 'vue'
import { getCollect, cancelCollect } from '@/api/news'

const paging = shallowRef()
const options = reactive([
    {
        text: '取消收藏',
        style: {
            color: '#FFFFFF',
            backgroundColor: '#FF2C3C'
        }
    }
])
const collectData: any = ref([])

const queryList = async (pageNo, pageSize) => {
    const { lists } = await getCollect()
    lists.forEach((item) => {
        item.show = false
    })
    collectData.value = lists
    paging.value.complete(lists)
}

const handleCollect = async (index: number): Promise<void> => {
    try {
        const articleId: number = collectData.value[index].articleId
        await cancelCollect({ articleId })
        uni.$u.toast('已取消收藏')
        paging.value.reload()
    } catch (err) {
        //TODO handle the exception
        console.log('取消收藏报错=>', err)
    }
}
</script>

<style scoped></style>

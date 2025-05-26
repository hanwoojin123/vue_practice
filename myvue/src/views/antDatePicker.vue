<template>
    <DefaultLayout>
        <a-space direction="vertical" :size="12">
            <a-date-picker v-model:value="value1" />
            <a-date-picker v-model:value="value2" picker="week" />
            <a-date-picker v-model:value="value3" picker="month" />
            <a-date-picker v-model:value="value4" picker="quarter" />
            <a-date-picker v-model:value="value5" picker="year" />
        </a-space>
    </DefaultLayout>
</template>

<script setup>
    import DefaultLayout from '@/layouts/DefaultLayout.vue'
    import { ref } from 'vue';

    const value1 = ref();
    const value2 = ref();
    const value3 = ref();
    const value4 = ref();
    const value5 = ref();
</script>
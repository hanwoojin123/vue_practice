<template>
    <DefaultLayout>
        <a-carousel :after-change="onChange">
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
        </a-carousel>
    </DefaultLayout>
</template>

<script setup>
    import DefaultLayout from '@/layouts/DefaultLayout.vue'
    
    const onChange = current => {
        console.log(current);
    };
</script>

<style scoped>
/* For demo */
:deep(.slick-slide) {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
}

:deep(.slick-slide h3) {
    color: #fff;
}
</style>
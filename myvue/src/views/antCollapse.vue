<template>
    <DefaultLayout>
        <a-collapse v-model:activeKey="activeKey" accordion>
            <a-collapse-panel key="1" header="This is panel header 1">
                <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="This is panel header 2">
                <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="This is panel header 3">
                <p>{{ text }}</p>
            </a-collapse-panel>
        </a-collapse>
    </DefaultLayout>
</template>

<script setup>
    import DefaultLayout from '@/layouts/DefaultLayout.vue'
    import { ref } from 'vue';
    
    const activeKey = ref([]);
    const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
</script>
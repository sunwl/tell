<template>
    <EditorArrayCheckbox
        v-model="model"
        :candidate="candidate"
        :is-candidate-valid="!isRequest"
        v-bind="$attrs"
        v-on="listenersWithoutInput"
    />
</template>

<script>
import _async_candidate_mixin from './_async_candidate_mixin';
import _editor_model_mixin from './_editor_model_mixin';
import _props_value_array_mixin from './_props_value_array_mixin';

export default {
    name: 'EditorArrayAsyncCheckbox',
    components: {
        EditorArrayCheckbox: () => import('./EditorArrayCheckbox'),
    },
    mixins: [
        _async_candidate_mixin,
        _editor_model_mixin,
        _props_value_array_mixin,
    ],
    inheritAttrs: true,
};
</script>

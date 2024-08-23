<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { EditJsonSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  EditJsonSample,
  // }
});
</script>

<template>
  <div id="app">
    <json-view :data="{foo: 'bar'}" />
  </div>
</template>

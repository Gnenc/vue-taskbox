<template>
  <PureInboxScreen/>
</template>

<script>
import PureInboxScreen from "./PureInboxScreen";
import {computed} from "vue";
import {useStore} from "vuex";

export default {
  name: "InboxScreen",
  components: {PureInboxScreen},
  setup() {
    const store = useStore();
    const error = computed(() => store.state.error);
    return {
      error,
    };
  },
};
</script>

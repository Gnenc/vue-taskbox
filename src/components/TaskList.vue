<template>
  <PureTaskList :tasks="tasks" @archive-task="archiveTask" @pin-task="pinTask"/>
</template>

<script>
import {computed} from 'vue';
import PureTaskList from "./PureTaskList";
import {useStore} from 'vuex';

export default {
  name: 'TaskList',
  components: {PureTaskList},
  setup() {
    const store = useStore();
    const tasks = computed(() => store.state.tasks);

    const archiveTask = (task) => store.dispatch('archiveTask', task);
    const pinTask = (task) => store.dispatch('pinTask', task);

    return {
      tasks,
      archiveTask,
      pinTask,
    };
  },
};
</script>

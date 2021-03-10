<template>
  <div class="tasks">
    <div class="card" style="width:24rem;">
      <div class="card-header"><strong>Tasks</strong></div>
      <TaskCard v-for="task in tasks" :key="task.id" :task="task"/>
    </div>
  </div>
</template>

<script>
import TaskCard from '@/components/TaskCard.vue'
import TasksService from '@/services/TasksService'
export default {
  name: 'TasksList',
  data () {
    return {
      tasks: null
    }
  },
  components: {
    TaskCard
  },
  created () {
    TasksService.getTasks()
      .then(response => {
        console.log('tasks: ' + response.data)
        this.tasks = response.data
      })
      .catch(error => {
        console.log('Error: ' + error)
      })
  }
}
</script>

<style scoped>
.tasks{
  width:22%;
  margin:0px auto;
}
</style>

<template>
  <main>
    <section class ="flex flex-col  h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1">
        </div>
        <div class="col-start-2 col-span-5 ">
          <head-line></head-line>
          <job-search-form/>
        </div>
        <div class="col-start-7 col-span-5  self-center justify-self-center ">
          <img 
            class="w-80 h-80 object-contain rounded-full"
            src="https://media2.giphy.com/media/7VzgMsB6FLCilwS30v/giphy.gif?cid=ecf05e47pq072p6pw5nff7xpq8qbyor2hd471budqymyzx56&rid=giphy.gif&ct=g" alt="gh"/>
        </div>
        <div class="col-start-12 col-span-1 ">
        </div>
    </div>

    </section>
  </main>

</template>

<script>
import HeadLine from "@/components/JobSearch/HeadLine.vue";
import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue';

export default {
  name: "HeroPage",
  components: {   
    HeadLine, 
    JobSearchForm,
  }
}
</script>

<template>
  <main>
    <section class ="flex flex-col  h-screen pt-10 pb-20 bg-yellow-200">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1 border border-blue-700">
          1 colomn
        </div>
        <div class="col-start-2 col-span-5 border border-blue-700">
          <head-line></head-line>
        </div>
        <div class="col-start-7 col-span-5 border border-blue-700">
          5 colomn
        </div>
        <div class="col-start-12 col-span-1 border border-blue-700">
          1 colomn
        </div>
    </div>

    </section>
  </main>

</template>

<script>
import HeadLine from '@/components/HeadLine.vue'

export default {
  name: "HeroPage",
  components: {   
    HeadLine
 ,
  }
}
</script>

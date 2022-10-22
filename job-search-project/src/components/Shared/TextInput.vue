<template>
  <input
    type="text"
    :value="modalValue"
    :placeholder="placeholder"
    @input="handleInput"
    class="w-full text-lg font-normal focus:outline-none"
  />
</template>
<script>
export default {
  name: "TextInput",

  props: {
    placeholder: {
      type: String,
      require: false,
      default: "",
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput($event) {
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>

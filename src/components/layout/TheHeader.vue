<template>
  <div
    class="bg-secondary dark:bg-secondaryDark flex p-4 justify-center items-center"
  >
    <div class="flex items-center cursor-pointer" @click="toggleMenu">
      <AppIcon name="bars" />
    </div>

    <div class="text-xl font-bold flex-1 justify-center flex text-">
      {{ sidebarToggled ? "Categories" : name }}
    </div>
    <ThemeSelector class="ml" />
  </div>
</template>

<script setup>
import AppIcon from "../icons/AppIcon.vue";
import ThemeSelector from "../theme/ThemeSelector.vue";

const props = defineProps({
  sidebarToggled: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(["toggleMenu"]);

const toggleMenu = () => {
  emits("toggleMenu");
};
</script>

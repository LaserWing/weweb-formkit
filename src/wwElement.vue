<template>
  <h1>{{ f_title }}</h1>

  <FormKit
    type="button"
    help="You can bind event listeners."
    @click="randomColor"
  >
    Click me!
  </FormKit>
    <FormKitSchema
      :schema="f_schema"
      v-model="formModel"
      @submit="handleSubmit"
    />
</template>

<script>
import { ref, onBeforeMount, computed, getCurrentInstance } from "vue"; // Ensure computed is imported
import { plugin, defaultConfig, FormKit, FormKitSchema } from "@formkit/vue";

import { en } from "@formkit/i18n";
import { generateClasses } from "@formkit/themes";
import { genesisIcons } from "@formkit/icons";
import "@formkit/themes/genesis";

//Create a FormKit plugin with a default English locale and custom validations.

export default {
  components: {
    FormKit,
    FormKitSchema,
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  computed: {
    f_schema() {
      return this.content ? this.content.ww_schema : [];
    },
    f_title() {
      return this.content ? this.content.ww_title : "";
    },
  },

  setup(props) {
    // I want to build on top of defaultConfig and add more configurations. I need to keep this
    // using whats in defaultConfig tho

    defaultConfig({
      theme: "genesis", // will load from CDN and inject into document head
    });

    const instance = getCurrentInstance();

    if (instance) {
      instance.appContext.app.component("FormKit", FormKit);
      instance.appContext.app.component("FormKitSchema", FormKitSchema);
      instance.appContext.app.use(plugin, defaultConfig); //Look here ChatGPT, this works
    }

    const formModel = ref({
      name: null,
      email: null,
      hasEmail: false,
    });

    const handleSubmit = () => {
      alert("Valid submit!");
    };

    // Calculate the title from props
    //        const title = computed(() => props.content.title || "");

    return {
      formModel,
      handleSubmit,
      FormKit,
      FormKitSchema,
    };
  },
};
</script>

<template>
  <Codemirror
    scrollable
    :model-value="props.itemCodeProp"
    :extensions="cmExtensions"
    :style="{
      height: props.height,
      width: '100%',
      maxHeight: props.maxHeight,
      fontSize: vuetify.display.mobile.value ? '11px' : '',
    }"
  />
</template>

<script lang="ts" setup>
import vuetify from "@/plugins/vuetify";
import { type PropType } from "vue";
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { EditorView } from "@codemirror/view";
import { useTheme } from "vuetify";
import { vsCodeLight } from "@fsegurai/codemirror-theme-vscode-light";
import { vsCodeDark } from "@fsegurai/codemirror-theme-vscode-dark";

const vuetifyTheme = useTheme();
const emit = defineEmits(["update:itemCodeProp"]);

const props = defineProps({
  itemCodeProp: {
    type: String as PropType<string | undefined>,
    required: true,
  },
  title: {
    type: String as PropType<string>,
  },
  isReadonly: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  height: {
    type: String as PropType<string>,
    default: "80%",
  },
  maxHeight: {
    type: String as PropType<string>,
    default: "400px",
  },
});

const cmExtensions = [
  javascript(),
  EditorView.lineWrapping,
  vuetifyTheme.global.name.value.includes("dark") ? vsCodeDark : vsCodeLight,
  EditorView.editable.of(!props.isReadonly),
];
</script>

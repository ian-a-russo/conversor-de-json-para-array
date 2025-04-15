<template>
  <Codemirror
    scrollable
    @update:modelValue="updateCode"
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
import { ref, type PropType } from "vue";
import { Codemirror } from "vue-codemirror";
import { json } from "@codemirror/lang-json";
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
  json(),
  EditorView.lineWrapping,
  vuetifyTheme.global.name.value.includes("dark") ? vsCodeDark : vsCodeLight,
  EditorView.editable.of(!props.isReadonly),
];

const timeout = ref();

function updateCode(codeText: string) {
  clearTimeout(timeout.value);
  timeout.value = setTimeout(() => {
    if (codeText.trim() === "") return emit("update:itemCodeProp", {});

    try {
      emit("update:itemCodeProp", codeText);
    } catch (e) {
      throw e;
    }
  }, 400);
}
</script>

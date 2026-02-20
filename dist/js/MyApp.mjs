import { ref, openBlock, createElementBlock, createElementVNode, toDisplayString, createVNode } from "vue";
import _sfc_main$1 from "./MyButton.mjs";
const _hoisted_1 = { class: "hello-world" };
const _hoisted_2 = { class: "title" };
const msg = "Hello World !";
const _sfc_main = {
  __name: "MyApp",
  setup(__props) {
    const message = ref(msg);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("h1", _hoisted_2, toDisplayString(message.value), 1),
        createVNode(_sfc_main$1)
      ]);
    };
  }
};
export {
  _sfc_main as default
};

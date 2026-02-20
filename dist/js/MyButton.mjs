import { ref, openBlock, createElementBlock, Fragment, createElementVNode, toDisplayString, withDirectives, vModelText } from "vue";
const _sfc_main = {
  __name: "MyButton",
  setup(__props) {
    const message = ref("Click me");
    const click = () => {
      message.value = "Clicked";
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("button", {
          class: "my-button",
          onClick: click
        }, toDisplayString(message.value) + " !", 1),
        withDirectives(createElementVNode("input", {
          type: "text",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => message.value = $event)
        }, null, 512), [
          [vModelText, message.value]
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};

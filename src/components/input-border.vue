<template>
    <div :class="borderClass">
        <div :style="{borderColor:borderColor}">
            <input :type="type" :placeholder="placeholder" :name="name" :value="value"
                   @input="$emit('input', $event.target.value)" @focus="onFocus()"
                   @blur="onBlur()" @mouseover="onMouseOver()" @mouseout="onMouseOut()">
        </div>
        <slot :error="error" :value="value" :isFocus="isFocus"></slot>
    </div>
</template>

<script>
    export default {
        name: "inputBorder",
        data() {
            return {
                error: false,
                borderColor: "#aaa",

                isFocus: false
            }
        },
        methods: {
            onFocus() {
                this.borderColor = "blue";
                this.isFocus = true;
                this.error = false;
            },
            onBlur() {
                if (this.value === "") {
                    this.error = true;
                    this.borderColor = "red";
                } else {
                    this.error = false;
                    this.borderColor = "#aaa";
                }
                this.isFocus = false;
            },
            onMouseOut() {
                if (!this.error && !this.isFocus) {
                    this.borderColor = "#aaa";
                }
            },
            onMouseOver() {
                if (!this.error && !this.isFocus) {
                    this.borderColor = "#000";
                }
            }

        },
        props: ["borderClass", "placeholder", "name", "type", "value"]
    }
</script>

<style scoped>

</style>
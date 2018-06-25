<style scoped>

    .input-image {
        display: inline-block
    }

</style>

<template>
    <div class="input-image">

        <label class="upload control">
            <input
                    class="file-input"
                    type="file"
                    name="resume"
                    @change="input($event)"
                    :accept="accept"
                    :requried="required">
            <span :class="'button ' + size">
                <b-icon icon="upload" :size="size"/>
                <span>{{cta}}</span>
            </span>
        </label>

    </div>
</template>

<script>
    // This component only returns like native element
    var reader = new FileReader()

    export default {

        name: 'input-img64',

        props: {
            value: {
                type: String,
                default: ''
            },
            required: Boolean,
            accept: {
                type: String,
                default: 'image/jpeg, image/png'
            },
            size: {
                type: String,
                default: ''
            },
            cta: {
                type: String,
                default: 'Click to pick an image'
            }
        },

        methods: {
            input(e) {
                var file = e.target.files[0]
                reader.readAsDataURL(file)
            }
        },

        mounted () {
            reader.addEventListener('load', () => {
                this.$emit('input', reader.result)
            }, false)
        }

    }
</script>

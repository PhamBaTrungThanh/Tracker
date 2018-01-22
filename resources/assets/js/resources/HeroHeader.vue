<template>
    <section :class="['hero', 'is-primary', {'is-medium': isBigHero}]">
        <div class="hero-body is-relative">
            <div class="is-overlay background-cover">
                <img :src="background" v-if="background">
            </div>
            <div class="container">
                <h1 class="title">{{title}}</h1>
                <h2 class="subtitle">{{description}}</h2>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        page: {
            type: Object,
            default: {
                title: "MEC",
                description: "",
                isBigHero: false,
                background: false,
            }
        },
    },
    computed: {
        title() {
            return (this.page.title) ? this.page.title : "MEC";
        },
        description() {
            return (this.page.description) ? this.page.description : "";
        },
        isBigHero() {
            return (this.page.isBigHero) ? true : false;
        },
        background() {
            return (this.page.background) ? this.page.background : false;
        }
    }
}
</script>

<style>

</style>

<template>
    <div class="dialog-wrapper" @click.self="cancel">

   
    </div>


</template>

<script>
export default {
    data() {
        return {
            work_name: "",
            work_client: "",
            work_description: "",
        }
    },
    methods: {
        cancel() {
            this.$close(false);
        },
        submit() {
            axios.post(`${this.$store.state.apiBase}/work`, {
                name: this.work_name,
                description: this.work_description,
                client: this.work_client,
            }).then( response => {
                if (response.status === 200) {
                    this.$swal("Hoàn tất", "Cập nhật thành công", "success").then( result => {
                        this.$close(true);
                    });
                }
            });
        }
    }
}
</script>

<style>

</style>

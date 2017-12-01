<template>
    <div class="wrapper" id="dashboard">
        <div class="row no-gutters">
            <div id="sidebar">
                <div class="userinfo">
                    <h4 class="text-center text-light">{{ user.username }}</h4>
                </div>
            </div>

            <div id="main-content" class="col">
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
        }
    },
    computed: mapState([
        'user',
    ]),

    methods: {
    }
}
</script>


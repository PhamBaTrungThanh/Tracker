<template>
    <div class="table-row" >
        <div :class="classes" v-if="row.type === 'category'" @click="expand_me">
            {{ row.name }}
        </div>
        <div v-else class="row-inside">
            <div class="col1">{{row.id}}</div>
            <div class="col2">{{row.name}}</div>
            <div class="col3">{{row.per}}</div>
            <div class="col4">vnd</div>
            <div class="col5">0</div>
            <div class="col6">{{row.brand}}</div>
        </div>
        <template v-if="expading_status">
            <material-row v-for="item in row.children" :key="item.id" :row="item"></material-row>
        </template>
    </div>
</template>
<script>

export default {
    props: {
        row: {
            type: Object,
            default: {},
        },
    },
    data() {
        return {
            expading_status: false,
        }
    },
    methods: {
        expand_me() {
            if (this.row.children !== null) {
                this.expading_status = !this.expading_status;
            }
        }
    },
    computed: {
        
        is_category() {
            return this.row.type == "category";
        },
        classes() {
            return [
                `depth-${this.row.depth}`,
                {
                    expanded: this.expading_status,
                    expandable: this.row.children !== null,
                    category: this.row.type === 'category',
                    'row-inside': this.row.type === 'category',
                }
            ];
        },
    },
    mounted() {
        this.expading_status = this.row.expanded;
    }
}
</script>

<style>

</style>

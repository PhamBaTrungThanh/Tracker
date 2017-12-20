<template>
    <tr v-if="row.type === 'category'" :class="classes" >
        <td colspan="4" >{{row.name}} <span v-if="row.depth > 0 && row.children">( {{row.children.length}} )</span></td>
        <td colspan="2" class="inline-control">
            <span v-if="row.depth === 0" @click.stop="addChildCategory(row)">Thêm danh mục</span>
            <span v-if="row.depth === 1" @click.stop="addMaterials(row)">Thêm vật tư</span>
        </td>
    </tr>
    <tr v-else>
        <td class="col1">{{row.id}}</td>
        <td class="col2">{{row.name}}</td>
        <td class="col3">{{row.per}}</td>
        <td class="col4">vnd</td>
        <td class="col5">0</td>
        <td class="col6">{{row.brand}}</td>
    </tr>
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
        toggleExpand() {
            if (this.row.expanded === true) {
                this.$emit('expand', {id: this.row.id, expanded: false});
            } else if (this.row.children) {
                this.$emit('expand', {id: this.row.id, expanded: true});
            }
        },
        addChildCategory(row) {
            this.$emit('new-category', {id: row.id, name: row.name});
        },
        addMaterials(row) {
            this.$emit('new-materials', {id: row.id, name: row.name});
        },
        newMaterials() {
            console.log('aaa');
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

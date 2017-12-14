<template v-if="is_category">
    <tr>
        <td scope="row" colspan="5">
            <table class="nested-table">
                <tbody v-if="row.children">
                    <tr>
                        <td :class="classes">{{row.name}}</td>
                    </tr>
                    <material-row v-for="(nested_row, index) in row.children" :key="index" :row="nested_row"></material-row>
                </tbody>
                <tbody v-if="!row.children">
                    <tr>
                        <td :class="classes">{{row.name}}</td>
                    </tr>  
                    <material-row v-for="(material, index) in row.materials" :key="index" :row="material"></material-row>             
                </tbody>
            </table>
        </td>
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
    computed: {
        is_category() {
            return this.row.type == "category";
        },
        classes() {
            return [
                `depth-${this.row.depth}`,
                {
                    expanded: this.expading_status,
                    expandable: this.row.children == true || this.row.materials == true
                }
            ];
        }
    }
}
</script>

<style>

</style>

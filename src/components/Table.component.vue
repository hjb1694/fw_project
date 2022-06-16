<template>
    <table> 
        <thead> 
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
        </thead>
        <tbody> 
            <tr v-for="user in userData" :key="user.id"> 
                <td>{{ user.name }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
            </tr>
        </tbody>

    </table>
</template>

<script>
export default {
    name: 'TableComponent', 
    props: {
        userData: {
            type: Array, 
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    table{
        font-size:1.6rem;
        border-collapse: collapse;
        margin:2rem auto;

        th, td{
            padding:.8rem 1rem;
            border:1px solid #000;
        }

        tr:nth-child(odd){
            background:#eee;
        }

    }
</style>
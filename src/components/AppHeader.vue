<template>
    <header>

        <div class="container">

            <nav class="navbar navbar-expand">

                <a href="#" class="link navbar-brand mr-auto">
                    <img src="./../assets/logo.svg" alt="Hcode Treinamentos" class="img d-inline-block align-top" id="logo"> Sports Project
                </a>

                <div class="links mr-2">

                    <router-link to="/" class="btn mr-5">Home</router-link>
                    <router-link to="/news" class="btn mr-5">News</router-link>
                    
                    <a href="#" class="btn mr-5">Ranking</a>

                    <select name="championship" id="select-championship" class="form-control" @change="$emit('select-championship', $event.target.value)">
                        <option value="">Choose championship</option>
                        <option value="Brazilian Championship" selected>Brazilian Championship</option>
                        <option value="Italian Championship">Italian Championship</option>
                        <option value="Spanish Championship">Spanish Championship</option>
                        <option value="British Championship">British Championship</option>
                    </select>

                </div>

            </nav>

        </div>

    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
    background-color: black;
}

#logo {
    width: 150px;
    height: 100%;
}

.links {
    display: inline-flex;
}

.link {
    color: #D48E23;
    font-size: 30px;
    font-family: 'Rajdhani';
}

.links a {
    color: #fff;
}

.links a:focus {
    outline: none !important;
    box-shadow: none !important;
}

.link-active {
    background-color: #fff;
    color: black !important;
}
</style>
/*
* inside the script tag me declare the import 
* and the components logic 
*/ 
<script setup>
const developer = {
    name: "Moses Otieno",
    role: "Fullstack Developer",
    country: "Kenya 🇰🇪"
};
</script>

/*
* inside the template tag me declare the html 
* and the components logic 
*/

<template>
    <div class="profile-card">
        <img
        src="https://litslink.com/wp-content/uploads/2024/06/8-1024x682.jpg"
        alt="profile picture"
        >
        <h2>{{ developer.name }}</h2>
        <p>{{ developer.role }}</p>
        <span>{{ developer.country }}</span>
    </div>

</template>
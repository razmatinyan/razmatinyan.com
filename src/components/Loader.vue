<template>
    <div id="loading">
        <h2>WELCOME</h2>
    </div>
</template>

<script>
export default {
    name: 'Loader',
}
</script>

<style scoped>
#loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 800;
    user-select: none;
    pointer-events: none;
    background: #161616;
    will-change: top;
}
#loading h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    padding: 20px;
    font-size: calc(60 * 100vw / 1920);
    color: #fff;
    user-select: none;
    pointer-events: none;
    will-change: opacity, clip-path;
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
}

@media only screen and (max-width: 769px) {
    #loading h2 {
        font-size: calc(120 * 100vw / 1920);
    }
}
</style>
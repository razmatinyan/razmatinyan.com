<template>
    <div id="loading">
        <h2>
            <span class="letter">W</span>
            <span class="letter">E</span>
            <span class="letter">L</span>
            <span class="letter">C</span>
            <span class="letter">O</span>
            <span class="letter">M</span>
            <span class="letter">E</span>
        </h2>
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
    line-height: 2.9rem;
    user-select: none;
    pointer-events: none;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}

#loading h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: var(--pseudo-width);
    border-bottom: 2px solid #fff;
}
#loading h2 .letter {
    display: inline-block;
    transform: translateY(200px);
    will-change: transform;
}

@media only screen and (max-width: 769px) {
    #loading h2 {
        font-size: calc(120 * 100vw / 1920);
    }
}
</style>
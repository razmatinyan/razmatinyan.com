export default {
    install(app, options) {
        app.config.globalProperties.$addTextCircle = function(container, deg) {
            const circleText = document.querySelectorAll(container + ' .circle');
            circleText.forEach(item => {
                var circlingText = item.querySelector('.to-split');
                circlingText.innerHTML = circlingText.innerText.split('').map(
                    (char, i) => 
                    `<span style="transform: rotate(${i * deg}deg)">${char}</span>`
                ).join('');
            });
        }
    }
}
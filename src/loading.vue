<template>
  <div class="loading-box" v-if="isShow">
        <div class="loading-box-inner" :style="{ 'background-color': bgColor }">
            <div v-if="loadingType === 'balls' " :style="loadingStyle">
                <svg x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                    <path transform="translate(-8 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
                        <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keyTimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animateTransform>
                    </path>
                    <path transform="translate(2 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
                        <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keyTimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animateTransform>
                    </path>
                    <path transform="translate(12 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
                        <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keyTimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animateTransform>
                    </path>
                    <path transform="translate(24 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
                        <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keyTimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animateTransform>
                    </path>
                </svg>
            </div>
            
            <div v-if="loadingType === 'bars' " :style="loadingStyle">
                <svg x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                    <rect x="0" y="13" width="4" height="5">
                        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
                        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
                    </rect>
                    <rect x="10" y="13" width="4" height="5">
                        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
                        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
                    </rect>
                    <rect x="20" y="13" width="4" height="5">
                        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
                        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
                    </rect>
                </svg>
            </div>
            
            <div v-if="loadingType === 'spin' " :style="loadingStyle">
                <svg x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                    <path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform>
                    </path>
                </svg>
            </div>

            <div v-if="loadingType === 'spiningSpot'" :style="loadingStyle">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                    <circle cx="16" cy="3" r="0">
                        <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                    </circle>
                    <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">
                        <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                    </circle>
                    <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">
                        <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                    </circle>
                    <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
                        <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                    </circle>
                    <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
                        <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                    </circle>
                    <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">
                        <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                    </circle>
                    <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">
                        <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                    </circle>
                    <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">
                        <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                    </circle>
                    <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
                        <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                    </circle>
                </svg>
            </div>
            <div v-if="loadingType === 'clock'" :style="loadingStyle">
                <svg  x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                    <circle fill="none" :stroke="color" stroke-width="4" stroke-miterlimit="10" cx="50" cy="50" r="48"></circle>
                    <line fill="none" stroke-linecap="round" :stroke="color" stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
                        <animateTransform attributeName="transform" dur="2s" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
                    </line>
                    <line fill="none" stroke-linecap="round" :stroke="color" stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
                        <animateTransform attributeName="transform" dur="15s" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
                    </line>
                </svg>
            </div>
            <div class="loading-box-inner-text" :style="{color: color, ...textStyle}" v-if="text">{{ text }}</div>
        </div>
  </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'spiningSpot'
        },
        size: {
            type: Number,
            default: 50
        },
        color: {
            type: String,
            default: 'rgb(255, 73, 73)'
        },
        bgColor: {
            type: String,
            default: 'rgba(0, 0, 0, 0.6)'
        },
        text: String,
        textStyle: {
            type: Object
        }
    },
    data () {
        return {
            isShow: false,
            loadingType: this.type,
            loadingStyle: {
                fill: this.color,
                width: this.size + 'px',
                height: this.size + 'px'
            }
        }
    },
    methods: {
        show () {
            this.isShow = true
        },
        hide () {
            this.isShow = false
            this.remove()
        }
    }
}
</script>

<style lang="scss" scoped>
.loading-box {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    &-inner {
        padding: 10px 20px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.6);
        &-text { margin-top: 5px; text-align: center; }
    }
}
</style>
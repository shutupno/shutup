<template>
    <div class="main">
        <!-- <div class="bg">
        </div> -->
        <div class="black-bg">
            <div class="perspective">
                <div class="book-wrap">
                    <div class="page book-content">end</div>
                    <div class="page book-content book-content1">第三页</div>
                    <div class="page book-content book-content2">第二页</div>
                    <div class="page book-content" :class="page1 ? 'page1True' : 'page1False'" @click="page1Click">第一页</div>
                    <div :class="cover ? 'cover-bg coverTrue' : 'cover-bg coverFalse'" @click="coverClick">
                        <div class="book-cover"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            cover: false,
            page1: false,
            page2: false,
            page3: false

        }
    },
    created () {
        
    },
    mounted () {
        
    },
    methods: {
        coverClick() {
            this.cover = !this.cover;
        },
        page1Click() {
            this.page1 = !this.page1;
        }
    }
}
</script>

<style lang="scss" scoped>
    .main {
        height: 100%;

        .bg {
            width: 100%;
            height: 100%;
            background: url('../../../static/img/bg.jpg');
            background-size: 100% 100%;
        }

        .black-bg {
            width: 100%;
            height: 100%;
            background: url('../../../static/img/black-1.jpg');
            background-size: 100% 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .perspective {
            // margin-top: 100px;
            perspective: 800px;
            transform-style: preserve-3d;
        }

        .book-wrap {
            width: 300px;
            height: 300px;
            position: relative;
            margin: 0 auto;
            transform: rotateX(30deg);
            transform-style: preserve-3d;
        }

        .page {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            font-size: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            transform-origin: left;
            // border: 1px solid #1976D2;
        }

        .cover-bg {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            font-size: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            transform-origin: left;
        }

        .book-cover {
            // background-color: #1976D2;
            // color: #ffffff;
            width: 100%;
            height: 100%;
            background: url('../../../static/img/yuwen.jpg');
            background-size: 100% 100%;
        }

        .coverTrue {
            animation: coverTrue 6s ease 0s 1 forwards;
        }

        .coverFalse {
            animation: coverFalse 6s ease 0s 1 forwards;
        }

        @keyframes coverTrue {
            from {transform: rotateY(-180deg)}
            to {transform: rotateY(0)}
        }

        @keyframes coverFalse {
            from {transform: rotateY(0)}
            to {transform: rotateY(-180deg)}
        }

        .book-content {
            background: linear-gradient(to bottom right, #fff, #ccc);
            color: #33363C;
        }

        .page1True {
            animation: page1True 5s ease 0s 1 forwards;
        }

        .page1False {
            animation: page1False 5s ease 0s 1 forwards;
        }

        @keyframes page1True {
            from {transform: rotateY(-180deg)}
            to {transform: rotateY(0)}
        }

        @keyframes page1False {
            from {transform: rotateY(0)}
            to {transform: rotateY(-180deg)}
        }

        .book-content1{
            animation: roll 3s ease 3s 2 alternate;
        }

        .book-content2 {
            animation: roll 4s ease 2s 2 alternate;
        }
    }
</style>
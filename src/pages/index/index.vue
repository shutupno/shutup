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
                    <div class="page book-content book-content3">第一页</div>
                    <div :class="cover ? 'page book-cover coverTrue' : 'page book-cover coverFalse'" @click="coverClick">封面</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            cover: false
        }
    },
    created () {
        
    },
    mounted () {
        
    },
    methods: {
        coverClick() {
            this.cover = !this.cover;
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
            border: 1px solid #1976D2;
        }

        .book-cover {
            background-color: #1976D2;
            color: #ffffff;
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
            background-color: #fff;
            color: #33363C;
        }

        .book-content1{
            animation: roll 3s ease 3s 2 alternate;
        }

        .book-content2 {
            animation: roll 4s ease 2s 2 alternate;
        }

        .book-content3 {
            animation: roll 5s ease 1s 2 alternate;
        }

        // @keyframes roll {
        //     from {transform: rotateY(0)}
        //     to {transform: rotateY(-180deg)}
        // }
    }
</style>
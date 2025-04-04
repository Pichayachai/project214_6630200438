<template>
    <div id="Home" class="d-flex contents">
        <img src="../assets/profile.jpg" alt="">
        <div class="text">
            <p class="head"><span class="hi">Hi.</span> <br>
            I'm <span class="orange-text">CHOP</span>PER <br>
            Pichayachai Kladprom
            </p>
            <p class="lorem">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;สวัสดีครับ ผม <span class="orange-text">ช็อปเปอร์</span> นักศึกษาภาควิชาวิทยาการคอมพิวเตอร์ ปัจจุบันกำลังศึกษาในรายวิชา <br>
                <strong>Practicum in Software Development</strong> ซึ่งเว็ปไซต์นี้เป็นโปรเจคที่พัฒนาขึ้นมาเพื่อทบทวนความรู้ <br>
                ที่ได้จากการศึกษาในรายวิชานี้
            </p>
        </div>
    </div>
</template>

<style>
    #Home {
        height: 100vh;
        overflow: hidden;
    }

    .hi {
        font-size: 2rem;
    }

    .head {
        color: aliceblue;
        font-size: 3rem;
    }

    .text {
        font-weight: 500;
    }

    .lorem {
        color: aliceblue;
        font-size: 1rem;
    }

    .orange-text {
        color: orange;
    }

    .contents {
        align-items: center;
        justify-content: center;
        padding-top: 50px;
        display: flex;
    }

    img {
        width: 300px;
        height: 400px;
        margin-right: 60px;
        border-radius: 50%;
        object-fit: cover;
        animation: glow 2s infinite alternate;
    }

    @keyframes glow {
        0% {
            box-shadow: 0 0 10px rgba(255, 165, 0, 0.8), 0 0 30px rgba(255, 165, 0, 0.6);
        }
        100% {
            box-shadow: 0 0 20px rgba(255, 165, 0, 1), 0 0 50px rgba(255, 165, 0, 0.8);
        }
    }
</style>

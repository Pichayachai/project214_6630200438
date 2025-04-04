<template>
    <div id="con">
        <h2 class="co">Contact <span class="conme">Me</span></h2>
        <div class="box">
            <div class="mb-4">
                <input class="text-box" v-model="form.fullName" type="text" placeholder="Full Name">
            </div>
            <div class="mb-4">
                <input class="text-box" v-model="form.email" type="text" placeholder="Email">
            </div>
            <div class="mb-4">
                <input class="text-box" v-model="form.phoneNumber" type="text" placeholder="Phone Number">
            </div>
            <div class="mb-4">
                <input class="text-box" v-model="form.subject" type="text" placeholder="Subject">
            </div>
            <div class="mb-4">
                <textarea class="text-box-message" v-model="form.message" placeholder="Message"></textarea>
            </div>
            <div class="mb-4 text-center">
                <button class="btn-submit" @click="handleSubmit">Submit</button>
            </div>

            <!-- Social Media Icons -->
            <div class="social-icons text-center">
                <a href="https://www.instagram.com/c.chopperr._/" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" class="social-icon">
                </a>
                <a href="https://www.facebook.com/choppichayachai" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" class="social-icon">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        fullName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      // ทำการส่งข้อมูลไปยังเซิร์ฟเวอร์ หรือทำการอื่นๆ
      console.log("Form Submitted:", this.form);

      // รีเซ็ตข้อมูลในฟอร์ม
      this.resetForm();
    },
    resetForm() {
      // รีเซ็ตฟอร์มให้กลับเป็นค่าว่าง
      this.form.fullName = "";
      this.form.email = "";
      this.form.phoneNumber = "";
      this.form.subject = "";
      this.form.message = "";
    }
  }
};
</script>

<style>
    h2 {
        color: aliceblue;
        margin-bottom: 20px;
    }
    
    #con {
        height: 100vh;
        overflow: hidden;
        padding-top: 100px;
        justify-items: center;
        margin-bottom: 10px;
    }
    
    .conme {
        color: orange;
    }
    
    p {
        color: white;
    }
    .text-box {
        width: 700px;
        height: 40px;
        border-radius: 10px;
        padding-left: 15px;
        border: 1px solid #ccc;
        font-size: 16px;
    }
    .text-box-message {
        width: 700px;
        height: 150px;
        border-radius: 10px;
        padding-left: 15px;
        border: 1px solid #ccc;
        font-size: 16px;
        padding-top: 10px;
        margin-bottom: 0px;
    }
    .btn-submit {
        background-color: #4CAF50;
        width: 200px;
        color: white;
        border: none;
        padding: 12px 20px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .btn-submit:hover {
        background-color: #45a049;
    }

    .social-icons {
        margin-top: 10px;
    }

    .social-icon {
        width: 30px;
        height: 30px;
        margin: 0 10px;
    }
</style>

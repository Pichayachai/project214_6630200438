<template>
    <div id="Abo">
      <div class="container mt-4">
        <div class="card shadow-lg bg-dark text-white">
          <div class="card-body">
            <div class="head">
              <h2 class="card-title mb-4">About <span class="orange-text">Me</span></h2>
              <img class="imgg" src="../assets/profile1.jpg" alt="" />
            </div>
            <ul class="list-group list-group-flush text-start bg-dark text-white center-list">
              <li class="list-group-item bg-dark text-white"><strong>Name :</strong>&nbsp;&nbsp;&nbsp; {{ profile.Name }}</li>
              <li class="list-group-item bg-dark text-white"><strong>StudentID :</strong>&nbsp;&nbsp;&nbsp; {{ profile.id }}</li>
              <li class="list-group-item bg-dark text-white"><strong>MajorID :</strong>&nbsp;&nbsp;&nbsp; {{ profile.majorID }}</li>
              <li class="list-group-item bg-dark text-white"><strong>Major :</strong>&nbsp;&nbsp;&nbsp; {{ profile.majorName }}</li>
              <li class="list-group-item bg-dark text-white"><strong>Old School :</strong>&nbsp;&nbsp;&nbsp; {{ profile.LastSchool }}</li>
            </ul>
            <button class="btnedit" @click="editStudent">EDIT</button>
          </div>
        </div>
      </div>
  
      <!-- Popup แก้ไขข้อมูลนิสิต -->
      <div v-if="editMode" class="popup-overlay">
        <div class="popup">
          <h3>Edit Information</h3>
          <label>Name:</label>
          <input type="text" v-model="profile.Name" />
          
          <label>StudentID:</label>
          <input type="text" v-model="profile.id" />
          
          <label>MajorID:</label>
          <input type="text" v-model="profile.majorID" />
          
          <label>Major:</label>
          <input type="text" v-model="profile.majorName" />
          
          <label>Old School:</label>
          <input type="text" v-model="profile.LastSchool" />
          
          <div class="popup-buttons">
            <button @click="saveProfile">Save</button>
            <button @click="editMode = false">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profile: {
          id: "6630200438",
          Name: "Pichayachai Kladprom",
          majorID: "SO5",
          majorName: "Computer Science",
          LastSchool: "Streesmutprakan School"
        },
        editMode: false,
      };
    },
    methods: {
      async saveProfile() {
        try {
          const response = await fetch("http://localhost:3000/Student", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.profile),
          });
  
          if (response.ok) {
            this.editMode = false;  // ปิดการแก้ไขหลังจากบันทึกเสร็จ
          } else {
            alert("บันทึกข้อมูลไม่สำเร็จ");
          }
        } catch (error) {
          console.error("Error saving profile:", error);
        }
      },
      editStudent() {
        this.editMode = true;  // เปิด modal สำหรับการแก้ไข
      },
    },
    async mounted() {
      try {
        const response = await fetch("http://localhost:3000/Student");
        const data = await response.json();
        if (data) this.profile = data;  // โหลดข้อมูลจาก db.json
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    },
  };
  </script>
  
  <style>
    #Abo {
      height: 100vh;
      overflow: hidden;
      padding-top: 70px;
    }
    .orange-text {
      color: orange;
    }
    .head {
      justify-items: center;
    }
    h2 {
      margin-right: 15px;
    }
    .imgg {
      width: 230px;
      height: 230px;
      margin-left: 50px;
    }
    .center-list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        margin-right: 5px;
    }
  
    .popup-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .popup {
      background: white;
      padding: 20px;
      border-radius: 10px;
      text-align: left;
      width: 300px;
      color: black;
    }
  
    .popup label {
      display: block;
      margin-top: 10px;
    }
  
    .popup input {
      width: 100%;
      padding: 5px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  
    .popup-buttons {
      display: flex;
      justify-content: space-between;
    }
  
    button {
      margin-top: 10px;
      padding: 8px;
      background-color: orange;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 5px;
    }
  
    button:hover {
      background-color: darkorange;
    }
  
    .btnedit {
      width: 150px;
      margin-left: 550px;
    }
  </style>
  
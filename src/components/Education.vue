<template>
    <div id="Edu">
      <div class="container">
        <div class="header">
            <h2><span class="orange-text">Edu</span>cation</h2>
        </div>
        <div class="table-container">
          <table>
            <thead>
              <tr> 
                <th>Subject-ID</th>
                <th>Subject-Name</th>
                <th>Credit</th>
                <th>Grade</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="subject in subjects" :key="subject.id">
                <td>{{ subject.id }}</td>
                <td>{{ subject.name }}</td>
                <td>{{ subject.credits }}</td>
                <td>{{ subject.grade }}</td>
                <td>
                  <button @click="editSubject(subject)">Edit</button>
                  <button @click="removeSubject(subject.id)">Del</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button @click="openAddPopup">Add</button>
      </div>
  
      <!-- Popup แก้ไข / เพิ่มข้อมูลวิชา -->
      <div v-if="editMode" class="popup-overlay">
        <div class="popup">
          <h3>{{ isAdding ? "Add Subject" : "Edit Subject" }}</h3>
  
          <label>Subject-ID:</label>
          <input type="text" v-model="editedSubject.id" />
  
          <label>Subject-Name:</label>
          <input type="text" v-model="editedSubject.name" />
  
          <label>Credit:</label>
          <input type="number" v-model="editedSubject.credits" />
  
          <label>Grade:</label>
          <input type="text" v-model="editedSubject.grade" />
  
          <div class="popup-buttons">
            <button @click="saveSubject">Save</button>
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
        nowid: "",
        subjects: [],
        editMode: false,
        editedSubject: { id: "", name: "", credits: 0, grade: "" },
        isAdding: false
      };
    },
    methods: {
      async fetchSubjects() {
        try {
          const response = await fetch("http://localhost:3000/subjects");
          this.subjects = await response.json();
        } catch (error) {
          console.error("Error fetching subjects:", error);
        }
      },
      openAddPopup() {
        this.editedSubject = { id: "", name: "", credits: 0, grade: "" };
        this.isAdding = true;
        this.editMode = true;
      },
      async removeSubject(id) {
        try {
          await fetch(`http://localhost:3000/subjects/${id}`, { method: "DELETE" });
          this.subjects = this.subjects.filter(sub => sub.id !== id);
        } catch (error) {
          console.error("Error deleting subject:", error);
        }
      },
      editSubject(subject) {
        this.editedSubject = { ...subject };
        this.nowid = subject.id;
        this.isAdding = false;
        this.editMode = true;
      },
      async saveSubject() {
        try {
          if (this.isAdding) {
            // ถ้าเป็นการเพิ่มข้อมูลใหม่
            await fetch("http://localhost:3000/subjects", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(this.editedSubject)
            });
          } else {
            // ถ้าเป็นการแก้ไขข้อมูล
            // ลบข้อมูลที่มี ID เดิมออกก่อน
            await fetch(`http://localhost:3000/subjects/${this.nowid}`, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            });

            // เพิ่มข้อมูลใหม่ที่มี ID ใหม่
            await fetch("http://localhost:3000/subjects", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(this.editedSubject)
            });
          }
          // รีเฟรชข้อมูลหลังจากเพิ่มหรือแก้ไข
          await this.fetchSubjects();
          this.editMode = false;
        } catch (error) {
          console.error("Error saving subject:", error);
        }
      }

    },
    mounted() {
      this.fetchSubjects();
    }
  };
  </script>
  
  <style>
  #Edu {
    height: 100vh;
    overflow: hidden;
    padding-top: 100px;
    color: white;
  }
  .orange-text{
    color: orange;
  }
  .header{
    justify-items: center;
  }
  .table-container {
    max-height: 400px;
    overflow-y: auto;
    margin-top: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid white;
    padding: 8px;
    text-align: center;
  }
  
  button {
    margin: 5px;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  
  button:first-child {
    background-color: orange;
    color: white;
  }
  
  button:last-child {
    background-color: red;
    color: white;
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
  
  .popup-buttons button {
    padding: 8px;
  }
  </style>

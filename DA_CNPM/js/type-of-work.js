document.addEventListener("DOMContentLoaded", function () {
    loadWorkList();
});

let workList = ["Lập trình", "Thiết kế", "Marketing", "Quản lý dự án"];

function loadWorkList() {
    let ul = document.getElementById("work-list");
    ul.innerHTML = "";
    workList.forEach((work, index) => {
        let li = document.createElement("li");
        li.textContent = work;

        // Tạo nút sửa
        let editBtn = document.createElement("button");
        editBtn.textContent = "Sửa";
        editBtn.onclick = function () { editWork(index); };

        // Tạo nút xóa
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Xóa";
        deleteBtn.onclick = function () { deleteWork(index); };

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    });
}

function filterWorks() {
    let search = document.getElementById("search").value.toLowerCase();
    let filteredWorks = workList.filter(work => work.toLowerCase().includes(search));

    let ul = document.getElementById("work-list");
    ul.innerHTML = "";
    filteredWorks.forEach((work, index) => {
        let li = document.createElement("li");
        li.textContent = work;

        let editBtn = document.createElement("button");
        editBtn.textContent = "Sửa";
        editBtn.onclick = function () { editWork(index); };

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Xóa";
        deleteBtn.onclick = function () { deleteWork(index); };

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    });
}

function addWork() {
    let newWork = prompt("Nhập tên công việc:");
    if (newWork) {
        workList.push(newWork);
        loadWorkList();
    }
}

function editWork(index) {
    let updatedWork = prompt("Chỉnh sửa công việc:", workList[index]);
    if (updatedWork !== null) {
        workList[index] = updatedWork;
        loadWorkList();
    }
}

function deleteWork(index) {
    let confirmDelete = confirm("Bạn có chắc muốn xóa công việc này?");
    if (confirmDelete) {
        workList.splice(index, 1);
        loadWorkList();
    }
}


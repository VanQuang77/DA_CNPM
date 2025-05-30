// Mảng lưu danh sách loại công việc
let projects = [];

// Hàm hiển thị danh sách công việc
function displayProjects() {
    let projectList = document.getElementById("projectList");
    let filterType = document.getElementById("projectTypeFilter").value;
    projectList.innerHTML = ""; // Xóa danh sách cũ

    projects
        .filter(project => filterType === "all" || project.type === filterType)
        .forEach((project, index) => {
            let row = `<tr>
                <td>${index + 1}</td>
                <td>${project.name}</td>
                <td>${project.desc}</td>
                <td>${project.type}</td>
                <td>
                    <button class="btn-edit" onclick="editProject(${index})">Sửa</button>
                    <button class="btn-delete" onclick="deleteProject(${index})">Xóa</button>
                </td>
            </tr>`;
            projectList.innerHTML += row;
        });
}

// Hàm thêm công việc
function addProject() {
    let nameInput = document.getElementById("projectName");
    let descInput = document.getElementById("projectDesc");
    let typeInput = document.getElementById("projectType");

    if (!nameInput || !descInput || !typeInput) {
        alert("Không tìm thấy ô nhập liệu!");
        return;
    }

    let name = nameInput.value.trim();
    let desc = descInput.value.trim();
    let type = typeInput.value;

    if (name === "" || desc === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    projects.push({ name, desc, type }); // Thêm vào mảng
    displayProjects(); // Cập nhật danh sách

    // Xóa nội dung nhập vào
    nameInput.value = "";
    descInput.value = "";
}

// Hàm sửa công việc
function editProject(index) {
    let newName = prompt("Nhập tên mới:", projects[index].name);
    let newDesc = prompt("Nhập mô tả mới:", projects[index].desc);
    let newType = prompt("Nhập loại công việc mới:", projects[index].type);

    if (newName !== null && newDesc !== null && newType !== null) {
        projects[index].name = newName;
        projects[index].desc = newDesc;
        projects[index].type = newType;
        displayProjects(); // Cập nhật danh sách
    }
}

// Hàm xóa công việc
function deleteProject(index) {
    if (confirm("Bạn có chắc chắn muốn xóa công việc này?")) {
        projects.splice(index, 1); // Xóa công việc khỏi mảng
        displayProjects(); // Cập nhật danh sách
    }
}

// Hiển thị danh sách ban đầu
displayProjects();

let editingId = null;// To track if we are editing an existing student

// Load all students
//Function syntax
/*// Define an async function
async function functionName() {
  
  // Step 1: Fetch data from a given URL (API endpoint)
  const response = await fetch("URL");

  // Step 2: Convert the response into JSON format
  const data = await response.json();

  // Step 3: Update the DOM (HTML element) with the fetched data
  document.getElementById("elementId").innerHTML = data
    .map(
      (item) => `
        <p>
          ${item.property1} - ${item.property2} - ${item.property3}
          <button onclick="editFunction(${item.id}, '${item.property1}', '${item.property2}')">Edit</button>
          <button onclick="deleteFunction(${item.id})">Delete</button>
        </p>
      `
    )
    .join(""); // Join array into a single string
}*/


async function loadStudents() {
  const res = await fetch("/students");
  const students = await res.json();
  document.getElementById("studentList").innerHTML = students
    .map(
      (s) => `
    <p>
      ${s.id}. ${s.name} - ${s.email} - ${s.course}
      <button onclick="editStudent(${s.id}, '${s.name}', '${s.email}', '${s.course}')">Edit</button>
      <button onclick="deleteStudent(${s.id})">Delete</button>
    </p>
  `
    )
    .join("");
}

// Add or Update student
document.getElementById("studentForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const student = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    course: document.getElementById("course").value,
  };

  if (editingId) {
    await fetch(`/students/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    editingId = null;
  } else {
    await fetch("/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
  }

  e.target.reset();
  loadStudents();
});

// Edit student
function editStudent(id, name, email, course) {
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("course").value = course;
  editingId = id;
}

// Delete student
async function deleteStudent(id) {
  await fetch(`/students/${id}`, { method: "DELETE" });
  loadStudents();
}

loadStudents();

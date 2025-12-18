// Variabel hitung klasifikasi
let clean = 0;
let dirty = 0;
let eco = 0;
let industry = 0;

// LOGIN
function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (user === "" || pass === "") {
        alert("Nama dan password harus diisi!");
        return;
    }

    // Sembunyikan login, tampilkan home
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("homePage").classList.remove("hidden");
    document.getElementById("displayName").innerText = user;
}

// LOGOUT
function logout() {
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
    // reset username & password
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

// UPLOAD & KLASIFIKASI
function previewImage(event) {
    const file = event.target.files[0];
    const image = document.getElementById("outputImage");
    const result = document.getElementById("classificationResult");

    if (!file) return;

    image.src = URL.createObjectURL(file);
    image.style.display = "block";

    let name = file.name.toLowerCase();

    if (name.includes("bersih") || name.includes("clean")) {
        result.innerText = "🌿 Lingkungan Bersih";
        clean++;
    } else if (name.includes("sampah") || name.includes("kotor")) {
        result.innerText = "🗑️ Lingkungan Tercemar";
        dirty++;
    } else if (name.includes("eco") || name.includes("daur")) {
        result.innerText = "♻️ Lingkungan Ramah Lingkungan";
        eco++;
    } else {
        result.innerText = "🏭 Lingkungan Industri";
        industry++;
    }

    updateChart();
}

// UPDATE GRAFIK
function updateChart() {
    document.querySelector(".clean").style.width = (clean * 10 + 10) + "%";
    document.querySelector(".dirty").style.width = (dirty * 10 + 10) + "%";
    document.querySelector(".eco").style.width = (eco * 10 + 10) + "%";
    document.querySelector(".industry").style.width = (industry * 10 + 10) + "%";

    document.getElementById("cleanCount").innerText = clean;
    document.getElementById("dirtyCount").innerText = dirty;
    document.getElementById("ecoCount").innerText = eco;
    document.getElementById("industryCount").innerText = industry;
}

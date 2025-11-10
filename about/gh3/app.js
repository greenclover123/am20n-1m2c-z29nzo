const supabaseUrl = "https://bvgezuuvqjzrprvmahqx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2Z2V6dXV2cWp6cnBydm1haHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1NzU1MzQsImV4cCI6MjA2MDE1MTUzNH0.DHv5ZF28Ka7Azes9AKebSaDCE8iaoRA94PZjH79vb6o";
const client = supabase.createClient(supabaseUrl, supabaseKey);

let currentUser = null;

function showMessage(message, type = "success") {
  const status = document.getElementById("status");
  status.innerText = message;
  status.className = type;
}

function showApp() {
  document.getElementById("auth").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
  document.getElementById("siteDataControls").classList.remove("hidden");
}

function hideApp() {
  document.getElementById("auth").classList.remove("hidden");
  document.getElementById("app").classList.add("hidden");
  document.getElementById("siteDataControls").classList.add("hidden");
  document.getElementById("status").innerText = "";
  document.getElementById("siteDataStatus").innerText = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}

async function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await client.auth.signInWithPassword({ email, password });

  if (error) {
    showMessage("Login failed: " + error.message, "error");
    return;
  }

  currentUser = data.user;
  showApp();
  showMessage("Login successful!", "success");
}

async function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await client.auth.signUp({ email, password });

  if (error) {
    showMessage("Sign-up failed: " + error.message, "error");
    return;
  }

  showMessage("Sign-up successful! Check your email to verify your account.", "success");
}

async function logout() {
  await client.auth.signOut();
  currentUser = null;
  hideApp();
  showMessage("Logged out.", "success");
}

// Attach event listeners once DOM is ready
document.addEventListener("DOMContentLoaded", async () => {
  document.getElementById("loginBtn").addEventListener("click", signIn);
  document.getElementById("signupBtn").addEventListener("click", signUp);
  document.getElementById("logoutBtn").addEventListener("click", logout);

  const { data } = await client.auth.getUser();
  if (data.user) {
    currentUser = data.user;
    showApp();
    showMessage("Auto-logged in!", "success");
  }
});

export { client };
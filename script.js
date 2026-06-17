function savePlan() {
  const goal = document.getElementById("goal").value;
  const risk = document.getElementById("risk").value;
  const platform = document.getElementById("platform").value;

  const output = document.getElementById("planOutput");

  if (goal === "" || risk === "" || platform === "") {
    output.innerHTML = "<p>Please fill out all boxes first.</p>";
    return;
  }

  output.innerHTML = `
    <h3>Your Beginner Trading Plan</h3>
    <p><strong>Goal:</strong> ${goal}</p>
    <p><strong>Risk Rule:</strong> ${risk}</p>
    <p><strong>Platform:</strong> ${platform}</p>
    <p>Good start. Practice first, keep learning, and never trade money you cannot afford to lose.</p>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("terminal-output");
  const cmdline = document.getElementById("cmdline");
  const promptText = "C:\\>";

  function appendOutput(text) {
    const pre = output.querySelector("pre");
    pre.textContent += "\n" + text;
    output.scrollTop = output.scrollHeight;
  }

  cmdline.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const input = cmdline.value.trim();
      if (!input) {
        cmdline.value = "";
        return;
      }

      if (input.toLowerCase() === "clear") {
        output.querySelector("pre").textContent = "*** ERROR: THOUGHT NOT FOUND ***\n\nSYSTEM FAILURE. PLEASE CONTACT ADMIN.\n\n" + promptText + " ";
        cmdline.value = "";
        return;
      }

      if (input.toLowerCase() === "exit") {
        // Redirect back to main terminal
        window.location.href = "index.html";
        return;
      }

      appendOutput(`${promptText} ${input}\n'${input}' is not recognized as an internal or external command.`);
      cmdline.value = "";
    }
  });

  cmdline.focus();
});

document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("terminal-output");
  const cmdline = document.getElementById("cmdline");

  const bootText = `Microsoft(R) Windows 95
(C)Copyright Microsoft Corp 1981-1995.
(H)ey visitor, welcome to my world

(T)ype 'help' for a list of commands.
`;

  output.textContent = bootText;

  const commands = {
    help: `Supported commands:
  whoami           Show user info
  date             Show current date & time
  echo [text]      Repeat what you type
  clear            Clear the screen
  cd weird_diaries Go to blog
  view thoughts    View thoughts page`,

    whoami: "User: EFAULT",

    date: () => new Date().toString(),

    "cd weird_diaries": () => { window.location.href = "weird_diaries.html"; return null; },

    "view thoughts": () => { window.location.href = "thought.html"; return null; },
  };

  function appendOutput(text) {
    output.textContent += text + "\n";
    output.scrollTop = output.scrollHeight;
  }

  cmdline.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const input = cmdline.value.trim();
      if (!input) {
        cmdline.value = "";
        return;
      }

      if (input === "clear") {
        output.textContent = bootText;
        cmdline.value = "";
        return;
      }

      let result = "";
      if (input.startsWith("echo ")) {
        result = input.slice(5);
      } else if (commands[input]) {
        const cmdResult = commands[input];
        if (typeof cmdResult === "function") {
          const returned = cmdResult();
          if (returned === undefined || returned === null) {
            // Redirect or no output, skip printing
            cmdline.value = "";
            return;
          } else {
            result = returned;
          }
        } else {
          result = cmdResult;
        }
      } else {
        result = `'${input}' is not recognized as an internal or external command.`;
      }

      appendOutput(`C:\\> ${input}\n${result}\n`);
      cmdline.value = "";
    }
  });

  cmdline.focus();
});

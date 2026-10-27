// AI Assistant Interaction Logic
(function () {
  const chatMessages = document.getElementById("chatMessages");
  const userInput = document.getElementById("userInput");
  const sendButton = document.getElementById("sendButton");
  const chatStatus = document.getElementById("chatStatus");

  if (!chatMessages || !userInput || !sendButton) return;

  // Append a message to the chat container
  function appendMessage(text, sender = "assistant") {
    const messageEl = document.createElement("div");
    messageEl.className = `chat-message chat-${sender}`;
    messageEl.textContent = text;
    chatMessages.appendChild(messageEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Initial welcome message
  appendMessage(
    "👋 Hello! I am Dhara's AI Assistant. Ask me anything about Dhara's background, technical skills, projects, or how to get in touch!"
  );

  // Generate an intelligent answer
  function getResponse(question) {
    const q = question.toLowerCase().trim();

    if (!q) return "Please ask a question!";

    // Greetings
    if (/^(hi|hello|hey|greetings|hola)/.test(q)) {
      return "Hi there! Feel free to ask about Dhara's projects, technical skills (C++, Python, Agentic AI, DSA), or contact info.";
    }

    // Contact & Email
    if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("mail")) {
      return `You can reach Dhara Mittal via email at dharamittal103@gmail.com or connect via GitHub at https://github.com/Dhara103.`;
    }

    // Skills
    if (q.includes("skill") || q.includes("stack") || q.includes("technolog") || q.includes("language") || q.includes("tools")) {
      return "Dhara specializes in C++, C, Python, Agentic AI, and DSA, with experience in building multi-agent workflows, data serialization, and web applications.";
    }

    // About / Bio / Who is Dhara
    if (q.includes("about") || q.includes("who is") || q.includes("background") || q.includes("education") || q.includes("college") || q.includes("location") || q.includes("jaipur")) {
      return "Dhara Mittal is an undergraduate Computer Science student specializing in Artificial Intelligence & Machine Learning, based in Jaipur, India. She is passionate about building multi-agent workflows, Python automation, and data-driven solutions.";
    }

    // Projects overview
    if (q.includes("project") || q.includes("portfolio") || q.includes("built") || q.includes("work")) {
      return "Dhara has built several key projects:\n• Fibonacci Sequence Optimizer (Benchmarking memoization, DP, matrix exp)\n• Factorial & Large Number Analyzer\n• Struct-to-Dict Serialization Utility\n• Personal Reading List Web App\n• Automated Bug Analyzer & Code Cleaner\n• Interactive Quiz Application\n• BreakFree (Habit & recovery analytics)\n• ScamShield (AI digital safety)";
    }

    // Fibonacci
    if (q.includes("fibonacci")) {
      return "The Fibonacci Sequence Optimizer benchmarks computational approaches: Memoization (Top-Down DP), Tabulation (Bottom-Up DP), and Matrix Exponentiation for maximum efficiency. GitHub: https://github.com/Dhara103/fibonnaci";
    }

    // Factorial
    if (q.includes("factorial")) {
      return "The Factorial Computation & Large Number Analyzer handles big integer arithmetic beyond standard integer limits using custom array multiplication and tail-call optimization. GitHub: https://github.com/Dhara103/factorial-";
    }

    // Struct to dict
    if (q.includes("struct") || q.includes("dict") || q.includes("serialization")) {
      return "Struct-to-Dict is a Python utility to serialize objects, custom data structures, and dataclasses into dictionaries and back for JSON & API readiness. GitHub: https://github.com/Dhara103/structure-to-dict";
    }

    // Reading list
    if (q.includes("reading") || q.includes("book")) {
      return "The Personal Reading List is a responsive web application to track books, reading progress, and genres with interactive state management. GitHub: https://github.com/Dhara103/reading-list";
    }

    // Bug analyzer / code cleaner
    if (q.includes("bug") || q.includes("clean") || q.includes("grade") || q.includes("messy")) {
      return "The Automated Bug Analyzer & Messy Python Code Cleaner parses ASTs and regex patterns to diagnose exceptions and format code to PEP 8 standards. GitHub: https://github.com/Dhara103/correcting-grade";
    }

    // Quiz
    if (q.includes("quiz")) {
      return "The Quiz Application is a web platform for interactive question-and-answer sessions and scoring. GitHub: https://github.com/Dhara103/quiz";
    }

    // ScamShield / BreakFree
    if (q.includes("scam") || q.includes("shield")) {
      return "ScamShield is an AI digital safety layer for detecting and explaining digital scams. GitHub: https://github.com/Dhara103/ScamShield";
    }
    if (q.includes("breakfree") || q.includes("habit") || q.includes("addiction")) {
      return "BreakFree is a smart addiction recovery web app with streak tracking, craving prediction, and behavioral analytics. GitHub: https://github.com/Dhara103/BreakFree";
    }

    // GitHub
    if (q.includes("github")) {
      return "Check out all of Dhara's open-source repositories on GitHub at: https://github.com/Dhara103";
    }

    // Fallback response
    return `That's a great question! Dhara is an AI & ML undergraduate focusing on Agentic AI, C++, Python, and data-driven systems. You can explore her projects listed above or reach out at dharamittal103@gmail.com!`;
  }

  // Send message action
  function handleSend() {
    const text = userInput.value.trim();
    if (!text) return;

    appendMessage(text, "user");
    userInput.value = "";
    userInput.focus();

    if (chatStatus) chatStatus.textContent = "AI is thinking...";

    setTimeout(() => {
      const response = getResponse(text);
      appendMessage(response, "assistant");
      if (chatStatus) chatStatus.textContent = "";
    }, 400);
  }

  sendButton.addEventListener("click", handleSend);

  userInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  });
})();

console.log("Javascript Connected");

// Theme Toggle
const themeButton = document.getElementById("themeToggle");

function applyTheme(isDark) {
  if (isDark) {
    document.body.classList.add("dark-mode");
    if (themeButton) themeButton.textContent = "Switch to Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    if (themeButton) themeButton.textContent = "Switch to Dark Mode";
  }
}

// Initialize theme from localStorage or system preference
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") {
  applyTheme(true);
} else if (savedTheme === "light") {
  applyTheme(false);
} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  applyTheme(true);
}

if (themeButton) {
  themeButton.addEventListener("click", function () {
    const isCurrentlyDark = document.body.classList.contains("dark-mode");
    applyTheme(!isCurrentlyDark);
    localStorage.setItem("portfolio-theme", !isCurrentlyDark ? "dark" : "light");
  });
}

// Weather Widget
const cityInput = document.getElementById("cityInput");
const weatherButton = document.getElementById("weatherButton");
const weatherResult = document.getElementById("weatherResult");

if (weatherButton && cityInput && weatherResult) {
  weatherButton.addEventListener("click", getWeather);
  cityInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      getWeather();
    }
  });
}

async function getWeather() {
  const city = cityInput.value.trim();

  if (!city) {
    weatherResult.textContent = "Please enter a city.";
    return;
  }

  weatherResult.textContent = "Loading weather...";

  const apiKey = "5c7b60c5d6abd9cb73639a1cba0fce7a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    weatherResult.innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p><strong>Temperature:</strong> ${Math.round(data.main.temp)}°C (feels like ${Math.round(data.main.feels_like)}°C)</p>
      <p><strong>Condition:</strong> ${data.weather[0].main} — ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}% | <strong>Wind:</strong> ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    weatherResult.textContent = "Unable to fetch weather. Please verify the city name and try again.";
    console.error(error);
  }
}

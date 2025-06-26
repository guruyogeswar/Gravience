body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #000;
  color: #fff;
}

h1, h2, h3, p {
  margin: 0;
}

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  background: black;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: bold;
  color: white;
}

.hero .highlight {
  color: #f97316;
}

.hero p {
  font-size: 1.2rem;
  color: #cbd5e1;
  margin-top: 1rem;
}

.coming-soon {
  margin-top: 2rem;
  font-size: 2rem;
  color: #f97316;
  animation: pulse 2s infinite;
  font-weight: bold;
}

.fog-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top right, #0f172a, #000, #1e293b);
  opacity: 0.9;
  z-index: 0;
}

.background-noise {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  animation: fogShift 40s linear infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes fogShift {
  0% { background-position: 0 0; }
  100% { background-position: 1000px 0; }
}

.about, .join {
  background: #1e293b;
  padding: 80px 20px;
  text-align: center;
}

.about h2, .join h2 {
  font-size: 2rem;
  color: white;
  margin-bottom: 20px;
}

.about p, .join p {
  color: #cbd5e1;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
}

.mission-vision {
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  background: #000;
  border-top: 1px solid #334155;
  border-bottom: 1px solid #334155;
  padding: 80px 20px;
}

.mission-vision .item {
  margin-bottom: 40px;
}

.mission-vision .icon {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #f97316;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 20px;
}

input[type="email"] {
  padding: 12px;
  width: 100%;
  max-width: 300px;
  background: #334155;
  border: none;
  color: white;
  border-radius: 5px;
}

button {
  padding: 12px 24px;
  background: #f97316;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #ea580c;
}

footer {
  background: black;
  padding: 40px 20px;
  text-align: center;
  font-size: 0.9rem;
  color: #94a3b8;
  border-top: 1px solid #334155;
}
